# Monitoramento Gepeto — regra obrigatória neste repo

> Regra completa em `~/.claude/CLAUDE.md` (global), seção "Fluxo Gepeto de
> Auditoria Automática". Referência detalhada: `C:\DEV\fluxo-auditoria-gepeto.md`.

## Após qualquer PR aberta ou atualizada (SEM EXCEÇÃO)

1. Aplicar `gh pr edit <n> --add-label "gepeto:pending"` (belt-and-suspenders).
2. **Imediatamente** chamar `ScheduleWakeup(delaySeconds: 90)` passando o mesmo
   prompt do `/loop` ativo, para retomar o monitoramento no próximo ciclo.
3. A cada wake-up, verificar `gh pr view <n> --json labels`:
   - `gepeto:approved` → aplicar o **Portão de SHA** (abaixo) e, se casar, continuar o fluxo (merge → deploy → próxima etapa).
   - `gepeto:rejected` → corrigir os achados na mesma branch e dar push.
   - `gepeto:pending` → reagendar `ScheduleWakeup(delaySeconds: 90)`.
4. **Nunca encerrar o turno sem ter iniciado esse loop.**
   Parar sem monitorar é falha de fluxo — Ruy não deve precisar retomar manualmente.

## Portão de SHA — obrigatório antes de qualquer merge ou deploy

O veredito do Gepeto é amarrado ao SHA auditado. Antes de mergear **ou** deployar em verde:

1. Ler o comentário de veredito mais recente e extrair `sha=` da 1ª linha
   (`GEPETO-VERDICT: approved sha=<head-sha-completo>`).
2. Obter o HEAD atual: `gh pr view <n> --json headRefOid --jq '.headRefOid'`.
3. Só seguir se **`sha do veredito == HEAD atual`** (igualdade exata de 40 caracteres).
4. Se diferirem, o veredito está stale → tratar como `gepeto:pending` e aguardar a reauditoria.

O reset automático para `gepeto:pending` a cada push e um debounce de 2 polls de 90s são
guards secundários — **nunca** substituem o Portão de SHA.
