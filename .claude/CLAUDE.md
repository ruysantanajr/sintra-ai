# Monitoramento Gepeto — regra obrigatória neste repo

> Regra completa em `~/.claude/CLAUDE.md` (global), seção
> "Fluxo Gepeto → Responsabilidade do Claudinho → passo 3".

## Após qualquer PR aberta ou atualizada (SEM EXCEÇÃO)

1. Aplicar `gh pr edit <n> --add-label "gepeto:pending"` (belt-and-suspenders).
2. **Imediatamente** chamar `ScheduleWakeup(delaySeconds: 90)` passando o mesmo
   prompt do `/loop` ativo, para retomar o monitoramento no próximo ciclo.
3. A cada wake-up, verificar `gh pr view <n> --json labels`:
   - `gepeto:approved` → continuar o fluxo (merge → deploy → próxima etapa).
   - `gepeto:rejected` → corrigir os achados na mesma branch e dar push.
   - `gepeto:pending` → reagendar `ScheduleWakeup(delaySeconds: 90)`.
4. **Nunca encerrar o turno sem ter iniciado esse loop.**
   Parar sem monitorar é falha de fluxo — Ruy não deve precisar retomar manualmente.
