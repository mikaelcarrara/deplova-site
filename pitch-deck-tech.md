# Detraxis — Do Caos ao Código (Pitch Técnico)

## 01 · A Visão

### Intenção em software. Com garantias.
- A Detraxis não é um gerador de código. É uma plataforma de Engenharia de Produto orientada por Blueprint — que garante software previsível, validado e fisicamente executável a partir de uma conversa de 60 minutos.
- Blueprint‑First · Contrato antes do código
- Determinístico · Mesmo input, mesmo output
- Anti‑hallucination · A IA opera dentro de limites

## 02 · O Problema

### O desenvolvimento artesanal é o gargalo da inovação.
- Ideias morrem no vale entre o conceito e o código. O custo é alto, o prazo é incompatível com o mercado, e quando o produto sai, já está desatualizado.
- Resultado: as empresas perdem tempo corrigindo o que a IA “tentou” fazer.
- Squads inflados: meses e queima de caixa para validar uma hipótese simples.
- A IA alucina: inventa soluções que não funcionam.
- Falta de padrão: cada entrega vem de um jeito.
- Insegurança: risco de quebrar o que já estava pronto.

## 03 · A Solução

### Da conversa ao MVP em 48h. Com contratos, não com sorte.
- A Detraxis transforma 60 minutos de briefing em um pipeline de compilação determinístico. Cada camada passa por validação antes de avançar. Nada é gerado sem contrato técnico aprovado.
- Camadas:
  - Camada 0 · Briefing → Whisper transcreve para `transcript.txt`.
  - Camada 1 · Thinker → NotebookLM extrai intenção técnica e gera `thinker_output.json`.
  - Checkpoint 1 · Sprint Planning → cliente prioriza features e assina contrato.
  - Camada 2 · Core Pipeline → Bridge · Architect · Governance · Coherence · Handoff Compiler (11 validações).
  - Checkpoint 2 · Operador revisa blueprint e wireframe.
  - Camada 3 · Builder → Claude Code executa o `builder_handoff.json`. MVP no ar (Next.js + Tailwind v4 + shadcn/ui).

## 04 · Como Funciona

### Arquitetura em três camadas independentes.
- Cada camada é especializada, auditável e ignorante das outras. Separação de preocupações = sistema auditável e determinístico.
- Product Thinking (Thinker) — do caos à intenção técnica.
- Core Pipeline (Governança) — da intenção ao blueprint.
- Builder (Execução) — do blueprint ao MVP.

## 05 · Os Contratos

### Quatro artefatos. Uma cadeia inquebrável.
- Do briefing ao build, cada etapa produz um artefato JSON auditável, contrato da próxima.
- Cliente + Operador · Contrato de Sprint → `thinker_output_sprint.json`
- Bridge · Intenção blindada → `refined_intent.json`
- Architect · Blueprint de Produto → `product_definition.json`
- Handoff · Plano de Obra → `builder_handoff.json`
- “O Builder não decide. Ele opera dentro de um contrato auditado antes de chegar nele.”

## 06 · Governança e Segurança

### Máquina governa. Humano corrige.
- 11 camadas de validação. 10 automáticas. 2 checkpoints humanos antes de qualquer código.
- (1) Sprint Planning — cliente no comando · Humano
- (2) Sync Check — drift zero · Auto
- (3) Bridge Guard — intenção blindada · Auto
- (4–5) Schema Validation + Structure Guard — anti‑hallucination · Fail‑Fast
- (6–7) Identity Check + Capabilities Lock — escopo travado · Auto
- (8) DB Access Guard — zonas protegidas · Auto
- (9–10) Skeleton Fit + Capability Support — viabilidade técnica · Auto
- (11) Route Conflict — sem colisões · Auto
- Checkpoint do Operador — pipeline pausa sem autorização explícita.

## 07 · Diferencial Mecânico

### O Handoff JSON
- Explica por que IAs potentes falham sozinhas e como a Detraxis resolve com um handoff rígido e auditável.
- Deriva Arquitetural · Planta Baixa Única
- Amnésia de Contexto · Memória Externa Rígida
- Vulnerabilidade Silenciosa · Zonas de Segurança (Middleware/Auth)

## 08 · Sistema em Ação · Sprint Planning

### Priorização do sprint. Features ranqueadas antes do build.
- P0, P1, P2 definidos por impacto; story points calculados; Builder só executa o que passou pelo sprint.

## 09 · Sistema em Ação · Pipeline

### Pipeline rodando. Cada etapa visível e rastreável.
- Log stream em tempo real — do Sync Check ao Handoff. Artefatos gerados à direita, status de cada camada à esquerda.

## 10 · O Produto Final

### MVP funcional com arquitetura limpa
- Código TypeScript estrito, design grammar padronizada, deploy ativo.

## 11 · Unit Economics & Eficiência

### Velocidade e custo sob controle
- Operação e governança reduzem retrabalho e incerteza.

## 12 · Investimento

### Tese
- Plataforma de engenharia determinística para construção de software com IA.

## 13 · Visão e Roadmap

### Expansão
- Evolução do Core e integrações para novos ambientes.

## 14 · CTA

### Do briefing ao código. Sem improvisos.
- Agende seu briefing e veja o sistema operar em 48 horas.
