#!/usr/bin/env bash
# check-no-secrets.sh — logos-ai
# Guard leve contra segredos acidentais no repositório (gate G6 da régua de
# maturidade do Dédalo — ver docs/architecture/02-dedalo.md).
#
# O que faz:
#   - Inspeciona apenas arquivos VERSIONADOS (ou staged, com --staged).
#   - Falha em casos óbvios: .env real versionado, arquivos de credencial,
#     material de chave e padrões evidentes de chave privada / token / API key.
#
# O que NÃO faz:
#   - Não lê valores de credenciais reais fora do repositório.
#   - Não depende de serviço externo nem de ferramenta pesada (só git + grep).
#
# Uso:
#   scripts/check-no-secrets.sh            # varre arquivos versionados (CI)
#   scripts/check-no-secrets.sh --staged   # varre apenas o que está staged (pré-commit)
#
# Saída: 0 se nada óbvio for detectado; 1 caso contrário.
#
# Política de referência: operations/secrets-policy.md
# Falso-positivo? Ajuste a ALLOWLIST explícita e pequena abaixo.

set -uo pipefail

MODE="tracked"
[ "${1:-}" = "--staged" ] && MODE="staged"

# --- Allowlist explícita e pequena (paths relativos à raiz do repo) ----------
# Arquivos que legitimamente mencionam nomes/padrões de segredo (docs e o
# próprio guard) ou que são exemplos. Qualquer arquivo *.example também é aceito.
ALLOWLIST=(
  ".env.example"
  "scripts/check-no-secrets.sh"
  "docs/operations/dedalo-change-discipline.md"
  "operations/secrets-policy.md"
  "docs/operations/openclaw-inventory.md"
)

is_allowed() {
  local f="$1"
  local a
  for a in "${ALLOWLIST[@]}"; do
    [ "$f" = "$a" ] && return 0
  done
  case "$f" in
    *.example) return 0 ;;
  esac
  return 1
}

# --- Lista de arquivos a inspecionar -----------------------------------------
if [ "$MODE" = "staged" ]; then
  mapfile -t FILES < <(git diff --cached --name-only --diff-filter=ACM)
else
  mapfile -t FILES < <(git ls-files)
fi

FAILED=0
report() { echo "  [SEGREDO?] $*"; FAILED=1; }

# --- 1. Nomes de arquivo proibidos -------------------------------------------
for f in "${FILES[@]}"; do
  [ -z "$f" ] && continue
  is_allowed "$f" && continue
  base="$(basename "$f")"
  case "$base" in
    .env.example) : ;;                       # permitido
    .env|.env.*)  report "arquivo .env versionado: $f" ;;
  esac
  case "$base" in
    creds.json)          report "arquivo de credencial: $f" ;;
    client_secret*.json) report "OAuth client secret: $f" ;;
    *token*.txt)         report "arquivo de token: $f" ;;
    *.pem|*.key|*.cert|*.pfx|*.p12) report "material de chave: $f" ;;
  esac
done

# --- 2. Conteúdo: padrões inequívocos (qualquer arquivo não-allowlist) -------
# Nota: os regex são passados com `-e` porque HARD_REGEX começa com '-', o que
# o grep interpretaria como opção.
HARD_REGEX='-----BEGIN [A-Z ]*PRIVATE KEY-----|AKIA[0-9A-Z]{16}'

# --- 3. Conteúdo: atribuição de segredo (pula .md e exemplos) ----------------
ASSIGN_REGEX='(password|passwd|secret|token|api[_-]?key|private[_-]?key|bearer)[[:space:]]*[:=][[:space:]]*["'"'"'][^"'"'"']{8,}'
PLACEHOLDER='your[-_]|placeholder|example|changeme|xxxx|<[^>]+>|\$\{|REPLACE|CHANGE_ME'

# IMPORTANTE: nunca imprimir o conteúdo da linha que casou — isso republicaria
# o segredo nos logs do CI. Reportamos apenas arquivo, número da linha e tipo.
for f in "${FILES[@]}"; do
  [ -z "$f" ] && continue
  [ -f "$f" ] || continue
  is_allowed "$f" && continue

  # Padrões inequívocos: coletar só os números de linha (campo 1 de grep -n).
  hard_lines="$(grep -nEI -e "$HARD_REGEX" "$f" 2>/dev/null | cut -d: -f1 | head -n 5 | paste -sd, -)"
  if [ -n "$hard_lines" ]; then
    report "padrão de chave privada / access key em: $f (linha(s): $hard_lines)"
  fi

  case "$f" in
    *.md|*.example) : ;;                     # docs/exemplos discutem segredos legitimamente
    *)
      # grep -n dá "<linha>:<conteúdo>"; separamos a linha do conteúdo e NUNCA
      # ecoamos o conteúdo — só o usamos para filtrar placeholders.
      while IFS= read -r match; do
        [ -z "$match" ] && continue
        lineno="${match%%:*}"
        content="${match#*:}"
        printf '%s' "$content" | grep -qiE -e "$PLACEHOLDER" && continue
        report "possível segredo atribuído em: $f (linha: $lineno)"
      done < <(grep -nEiI -e "$ASSIGN_REGEX" "$f" 2>/dev/null)
      ;;
  esac
done

echo
if [ "$FAILED" -eq 0 ]; then
  echo "OK — nenhum segredo óbvio detectado em ${#FILES[@]} arquivo(s) (modo: $MODE)."
  exit 0
else
  echo "FALHA — possível segredo no repositório. Ver operations/secrets-policy.md."
  echo "Se for falso-positivo, ajuste a ALLOWLIST explícita em scripts/check-no-secrets.sh."
  exit 1
fi
