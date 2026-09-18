# Jurisprudências.ai

Pesquisa de jurisprudência assistida por IA para advogados. Envie uma peça processual ou descreva a tese em linguagem natural e receba decisões dos tribunais brasileiros em segundos — cada uma com número do processo, órgão julgador, ementa, data e link direto para a fonte oficial.

A premissa é simples: pesquisa jurídica não pode depender de referências inventadas. Todo resultado aponta para o tribunal de origem.

## Funcionalidades

- **Busca por texto** — descreva o caso em linguagem natural.
- **Envio de peça** — a peça é lida na íntegra e os temas jurídicos são identificados automaticamente.
- **Filtros** — refine por tribunal, órgão julgador e período.
- **Resultados verificáveis** — ementa, data e link direto para o site oficial do tribunal.
- **Login com Google** — autenticação via Firebase.

## Stack

- [Next.js 14](https://nextjs.org) (App Router) + React 18
- TypeScript
- Tailwind CSS
- Firebase Authentication (login com Google)
- [lucide-react](https://lucide.dev) para ícones

## Estrutura

```text
src/
├── app/                     # rotas (App Router)
│   ├── page.tsx             # landing page
│   ├── search/page.tsx      # busca com filtros
│   └── api/search/route.ts  # endpoint de busca
├── components/              # Header, Footer, DecisionCard
├── contexts/AuthContext.tsx
├── hooks/use-outside-click.ts
├── lib/                     # firebase, constants
└── types/                   # tipos compartilhados
```
