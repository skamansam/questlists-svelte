# AGENTS

## Mission
Questlists Svelte is a slim Svelte playground used to build and verify the Twintrinsic Tailwind CSS library. Changes here should keep the Svelte demo lightweight while showcasing Tailwind-powered UI patterns that mirror the upstream design system.

## Core Responsibilities
1. **Component + UI development** – Implement and refine demo components/pages that exercise Twintrinsic utilities. Keep examples minimal yet visually polished.
2. **Styling validation** – Ensure Tailwind classes (including plugins like typography, forms, aspect-ratio, and container queries) behave as expected across breakpoints.
3. **Tooling upkeep** – Maintain the Vite/SvelteKit app, Storybook docs, Tailwind config, and testing harnesses so the library remains easy to review.
4. **Regression safety** – Expand Vitest unit coverage and Playwright e2e smoke tests whenever new UI behavior is introduced.

## Toolbelt & Scripts
Use `pnpm` (preferred) or `npm` to run the scripts below:

| Script | Purpose |
| --- | --- |
| `pnpm dev` | Run the Vite-powered SvelteKit dev server for local iteration. |
| `pnpm build` / `pnpm preview` | Produce and inspect the optimized bundle before publishing. |
| `pnpm lint` | Prettier check + ESLint pass; required before opening PRs. |
| `pnpm check` | `svelte-check` type/diagnostic sweep synced with the repo tsconfig. |
| `pnpm storybook` / `pnpm build-storybook` | Develop or statically build Storybook docs that accompany component work. |
| `pnpm test:unit` | Execute Vitest suites. |
| `pnpm test:e2e` | Run Playwright tests; keep a fast, meaningful baseline. |
| `pnpm test` | Combined e2e + unit pipeline run. |

## Collaboration Guidelines
- **Small, reviewable PRs**: Favor narrowly scoped changes with clear before/after context.
- **Story parity**: Every new UI capability should have a Storybook story (or update) plus minimal documentation to teach reviewers how it’s meant to work.
- **Testing discipline**: Add or update Vitest/Playwright coverage for new logic; note any intentionally skipped scenarios with TODOs.
- **Localization & assets**: Place shared assets in `src/assets`; wire translations via `@inlang/paraglide-sveltekit` when applicable.
- **Design consistency**: Match the Twintrinsic visual language—tailored color palettes, purposeful typography, and deliberate spacing.

## Suggested Agent Workflow
1. **Sync + install** – `pnpm install`, ensure `pnpm check` passes.
2. **Plan** – Outline the UI/feature delta; confirm whether stories/tests need updates.
3. **Implement** – Develop in `src/…`, mirroring Tailwind utility usage.
4. **Validate** – Run `pnpm lint`, `pnpm test`, and preview Storybook plus the Svelte app.
5. **Document** – Update READMEs, stories, or inline comments when behavior changes.
6. **Review readiness** – Prepare screenshots/clips if visual changes are non-trivial.

## Communication
- Prefer GitHub issues or PR discussions for design questions.
- Use Storybook links or Chromatic deployments when requesting feedback on component behavior.
- Flag blockers early; include reproduction steps and command output when reporting failures.


You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available Svelte MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
