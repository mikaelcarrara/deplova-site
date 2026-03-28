# Detraxis Site

Website institucional da Detraxis com múltiplas páginas HTML e design system baseado em tokens CSS.

## Stack

- HTML/CSS/JS vanilla
- Design system modular (tokens + componentes reutilizáveis)
- Sem etapa de build/minificação no repositório

## Estrutura do projeto

```text
.
├─ site/
│  ├─ css/
│  │  ├─ tokens.css              # Tokens globais (cores, spacing, tipografia)
│  │  ├─ base.css                # Base tipográfica e reset
│  │  ├─ style.css               # Orquestra imports de CSS
│  │  ├─ primitives/             # Primitivos (grid etc.)
│  │  ├─ components/             # Componentes reutilizáveis
│  │  ├─ sections/               # Blocos de seção
│  │  ├─ pages/                  # CSS específico por página
│  │  ├─ animations.css
│  │  └─ responsive.css
│  ├─ js/
│  │  ├─ hero.js
│  │  ├─ form.js
│  │  ├─ cookie-consent.js
│  │  ├─ open-anim.js
│  └─ img/
├─ pipeline/
├─ *.html
├─ CNAME
└─ README.md
```

## Organização do CSS

Entrada principal: `site/css/style.css`

Ordem de camadas:
1. Tokens (`tokens.css`)
2. Base (`base.css`)
3. Primitivos (`primitives/*`)
4. Componentes (`components/*`)
5. Seções (`sections/*`)
6. Animações/responsivo (`animations.css`, `responsive.css`)
7. CSS por página (`site/css/pages/*`)

## Organização do JavaScript

- JS por responsabilidade e carregado por página via `<script src="...">`
- `cookie-consent.js` é usado na home (`index.html`)
- `open-anim.js` controla o canvas da seção Open Source

## Rodar localmente

No diretório raiz:

```bash
python -m http.server 4173
```

Abra:

```text
http://localhost:4173/
```

## Deploy no GitHub Pages

- Projeto publicado como site estático (sem build no repositório)
- Código fonte enviado como está
- Domínio customizado configurado via `CNAME`

## Convenções de contribuição

- Mudanças pequenas e isoladas
- Preservar compatibilidade visual e responsiva
- Reutilizar tokens/componentes antes de criar novos
- Evitar mudanças estruturais de HTML sem validar a página inteira
