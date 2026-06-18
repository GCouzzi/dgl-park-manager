# E-Estacionamento — React + TypeScript + Bun

Frontend convertido de HTML/CSS estático para **React + Vite + TypeScript**, refatorado para reaproveitar layout, navegação e elementos visuais comuns, e ajustado para uso com **Bun**.

## Requisitos

- Bun instalado na máquina.

## Como instalar

```bash
bun install
```

Esse comando instalará as dependências e gerará o lockfile do Bun no seu ambiente.

## Como rodar em desenvolvimento

```bash
bun run dev
```

A aplicação usa `HashRouter`, então as telas ficam em rotas como:

- `#/login`
- `#/homepage-funcionario`
- `#/homepage-administrador`

## Como validar TypeScript

```bash
bun run typecheck
```

## Como gerar build

```bash
bun run build
```

O build executa:

```bash
tsc --noEmit && vite build
```

Ou seja, o projeto passa por checagem TypeScript antes da build de produção.

## Como visualizar o build localmente

```bash
bun run preview
```

## O que foi convertido

- 39 páginas HTML convertidas para componentes React em `.tsx`.
- Projeto migrado para TypeScript com `tsconfig.json` e `vite.config.ts`.
- Bootstrap e Bootstrap Icons movidos para imports globais em `src/main.tsx`.
- Links `.html` convertidos para rotas hash do React Router.
- Formulários configurados para não recarregar a página no submit, mantendo o comportamento de protótipo estático.
- Campos com `value`, `checked`, `selected`, `readonly`, `maxlength`, `rows` e `colspan` ajustados para atributos compatíveis com React/TypeScript.
- `package-lock.json` removido para evitar mistura de lockfiles npm/Bun.

## O que foi tipado/refatorado

Os trechos repetidos de HTML/CSS foram extraídos para componentes e arquivos de configuração tipados:

```text
src/components/AppShell.tsx       # Estrutura base com navbar e footer
src/components/AuthShell.tsx      # Estrutura das telas públicas/login
src/components/AppNavbar.tsx      # Navbar dinâmica por perfil
src/components/AppFooter.tsx      # Rodapé comum
src/components/CrudSidebar.tsx    # Sidebar reutilizável de Inserir/Listar/Buscar
src/components/PageCard.tsx       # Card padrão de páginas internas
src/components/Icon.tsx           # Wrapper para Bootstrap Icons
src/config/navigation.ts          # Menus, recursos e rotas CRUD tipados
src/hooks/usePageTitle.ts         # Hook tipado para document.title
src/main.tsx                      # Entrada React com validação do root element
src/vite-env.d.ts                 # Declarações globais do Vite/CSS
src/styles.css                    # CSS global compartilhado
```

Com isso, as páginas ficam responsáveis principalmente pelo conteúdo específico da tela, enquanto navegação, rodapé, sidebar, título e card base ficam centralizados e tipados.
