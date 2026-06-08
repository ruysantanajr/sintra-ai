<!-- BEGIN GEPETO REVIEW GUIDELINES -->
## Review guidelines

- Gepeto deve auditar apenas as mudancas do diff da PR.
- Priorizar bugs funcionais, build quebrado, falhas de seguranca, secrets expostos, autenticacao/autorizacao incorreta e regressao de performance.
- Reprovar se houver bug que quebre funcionalidade, vulnerabilidade de seguranca, secret/credencial exposta ou build claramente quebrado.
- Aprovar quando nao houver achado bloqueante, mesmo que existam sugestoes de melhoria.
- Responder sempre em portugues no formato:

```md
**VEREDICTO:** Aprovado ou Reprovado

**ACHADOS:** Nenhum achado relevante.

**SUGESTOES:** Nenhuma.
```

- Quando houver achados, usar severidade `[CRITICO/MEDIO/BAIXO]` e citar arquivo/linha quando possivel.
<!-- END GEPETO REVIEW GUIDELINES -->
