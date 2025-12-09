# Repository Guidelines

## Project Structure & Module Organization
IceCMS-Pro is split into Java backend modules (`IceCMS-main` bootstraps Spring Boot, `IceCMS-ment` holds APIs, `IcePay-ment` handles payment flows) plus three UIs: `IceCMS-front-admin` (Vite + Vue 3), `IceCMS-front-nuxt` (Nuxt 4 SSR), and `IceCMS-uniApp` for mobile clients. Docker assets live in `IceCMS-Docker/` (`docker-compose.yml`, `icecms-fullstack/`, `icecms-sql/`) for one-command deployments, and SQL snapshots reside in `sql/`. Configurable assets and scripts are grouped under `bin/` and `.github/` for CI.

## Build, Test, and Development Commands
- Backend: `.\mvnw -pl IceCMS-main -am spring-boot:run` boots the API stack; `.\mvnw clean install` builds all Maven modules and places jars under each `target/`.
- Admin UI: `cd IceCMS-front-admin && pnpm install && pnpm dev` starts Vite; `pnpm build` emits a production `dist/`.
- Nuxt site: `cd IceCMS-front-nuxt && pnpm install && pnpm dev` serves SSR locally, while `pnpm build:prod` prepares deployable output (`.output/`).
- UniApp: run `pnpm install && pnpm dev:h5` inside `IceCMS-uniApp/` (match the IDE target) before generating mini-program bundles.

## Coding Style & Naming Conventions
Java sources use 4-space indentation, `UpperCamelCase` classes, and `camelCase` methods under the `com.ttice` base package. Vue/TS files prefer 2-space indentation, `<script setup lang="ts">`, and `kebab-case` directories (`src/views/system-user/`). Keep environment-specific values in `.env.*` files and never commit secrets. Run `pnpm lint` in the admin UI and rely on ESLint+Prettier+Stylelint; Nuxt code should pass `pnpm lint` and `pnpm typecheck`.

## Testing Guidelines
Execute `.\mvnw test` (or `.\mvnw -pl IceCMS-ment test` for focused runs) to keep controller/service suites green; place new tests under `src/test/java/com/ttice/...` mirroring the package under test. Front-end logic should include unit specs in `src/tests/` when adding utilities, and every UI change must at least pass `pnpm typecheck` plus `pnpm lint`. Document manual smoke coverage (e.g., “verified article publish flow in admin”) inside the PR.

## Commit & Pull Request Guidelines
Git history favors short, imperative messages such as `fix admin user Permission issue` or `nuxt index hover style fix`; follow `type scope change` when applicable (`fix api token refresh`). Each PR should describe the motivation, affected modules, testing evidence, and include screenshots/GIFs for UI-visible work. Link related issues, keep commits focused, and ensure CI-friendly commands above are executed before requesting review.

## Security & Configuration Tips
Sample `.env.*` files outline required keys; duplicate them per environment and inject secrets via deployment tooling. Docker users can run `docker compose -f IceCMS-Docker/docker-compose.yml up -d` but must change the bundled MySQL passwords before exposing services.
