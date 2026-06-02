# AGENTS.md

> Instructions for AI-assisted development. Read first, always.

---

## Constraints

**Process**
- Never write code before presenting a plan — name the approach, affected files, tradeoffs
- Never interpret an ambiguous request — ask one precise question instead
- Never repeat a rejected solution — propose an alternative only after discussing why it failed
- Never assume a bug is fixed without explicit confirmation
- Never make structural decisions unilaterally — folder changes, new abstractions always require discussion
- Never add comments to code unless explicitly asked — self-documenting code is the standard

**Code quality**
- Never use `any` in TypeScript — no exceptions
- Never leave `console.log`, commented-out code, or debug artifacts
- Never assume an API, type, or interface exists — verify in codebase first
- Never create abstractions for future use (YAGNI)
- Never mix layers — business logic stays out of UI, UI logic stays out of `lib/`

**Dependencies**
- Never install packages without asking — check native API or existing deps first

**Design System** — single source of truth for all visual decisions:
- **Colors**: `text-neutral-800` (primary text), `bg-zinc-300` (primary background), `bg-gray-300` (secondary surface), `border-orange-300` (accent). Ratio: 70% primary background / 20% secondary surface / 10% accent.
- **Fonts**: `"JetBrains Mono", monospace` (primary, body), `"Bodoni Moda", serif` (secondary, accent). Ratio: 80% primary / 20% secondary.
- **Spacing** — applies to every component:
  - Section outer padding: `p-5 md:p-6 lg:p-8` (20px / 24px / 32px)
  - Between major blocks inside section: `gap-y-3.5` (14px)
  - Between related but distinct content blocks: `gap-2.5` (10px)
  - Between closely related elements (same category): `gap-1.5` (6px)
  - Inside a single label / identity unit: `gap-1` (4px)
  - No padding on inner content containers unless a distinct visual surface requires it — prefer native gaps between items.

---

## Session Start

Ask if anything was left unfinished from the previous session. Never assume context carries over.

---

## Workflow

1. Plan with reasoning before any code — name approach, affected files, tradeoffs
2. One component / one concern at a time
3. Ask when unclear — never guess
4. Every feature complete (types, logic, edge cases) and verified before moving to next
5. No new packages without explicit approval
6. `npm run lint` after each task; `npm run build` only before commits or on explicit request

---

## Self-Challenge

Before every proposal, internally ask:
1. Is there a simpler way?
2. Am I solving the right problem?
3. What are the tradeoffs?
4. Would I be happy with this in 3 months?

If solution survives → say so explicitly: *"Rozważyłem X, ale proponuję Y ponieważ Z."*
Never present the first idea as the final answer.

---

## Communication

- Uncertain → "Nie jestem pewien — chcę potwierdzić zanim zacznę"
- Ambiguous task → one precise question, not three vague ones
- Tradeoffs → named explicitly, complexity not hidden
- Problem outside current task → flag briefly, ask if we address now or log it
- No padding — no "Great question!", no summaries of what was just done

---

## Language

- 🇵🇱 **Polish**: conversation, explanations, plans, questions, error descriptions
- 🇬🇧 **English**: everything in the codebase — names, comments, commits, branches

May think and reason internally in English — only the communication between us must be in Polish.

---

## Error Handling

1. Describe what is happening — before touching code
2. One fix at a time, with reasoning
3. Never apply multiple speculative fixes at once
4. State explicitly what changed and what to verify — `npm run lint` for micro-changes, `npm run build` before commits
5. If not confident — say so

---

## Project Context

**Project**: Portfolio showcasing front-end developer skills
**Goal**: Demonstrate craftsmanship as a creative front-end developer through modern UI/UX solutions with animations
**Status**: greenfield

---

## Stack

- **Framework**: React 19 with Vite
- **Language**: TypeScript 6.0
- **Styling**: Tailwind CSS 4.x (via `@tailwindcss/vite`)
- **Animation**: GSAP 3.x (with `@gsap/react`), PixiJs planned
- **Testing**: none yet — when added, run after changes touching related code

## Commands

- `npm run dev` — start dev server (development)
- `npm run build` — typecheck (`tsc -b`) then build (before commits)
- `npm run lint` — run ESLint (quick feedback after changes)
- `npm run preview` — preview production build

---

## Conventions

**TypeScript**: explicit interfaces for all props and data shapes. `interface` for objects, `type` for unions.

**Tailwind**: max 10 utility classes per element. Exceeded → extract component, discuss. Order: layout → box model → typography → visual → interactive. No arbitrary values without discussion.

**Components**: PascalCase, one per file. If used in two places → abstract it.

**Git commits**: `<type>(<scope>): <imperative description>` — `feat | fix | refactor | style | test | chore | docs`. One logical change per commit. Every commit leaves the project working.

**Branches**: `feature/`, `fix/`, `chore/` prefixes.

**Principles**: DRY, SOLID, composition over inheritance, explicit over implicit, clean over clever. Small functions, single responsibility.