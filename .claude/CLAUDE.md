# Auditoria — Camada 1

Auditoria automática por análise estática roda no workflow
`.github/workflows/auditoria.yml` (gitleaks, semgrep, lint/typecheck), sem LLM e sem
serviço externo, a cada PR e no push para a branch default.

Está em **modo aviso** (reporta os achados, não reprova o PR). Para detalhes e para
tornar os checks bloqueantes, ver `~/.claude/CLAUDE.md`, seção "Camada 1".
