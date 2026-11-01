# Roadmap

Planned work for the Health Bingo mobile app. Each item comes from a gap or plan already visible in the codebase or README.

## Quality & testing
- [ ] Unit tests for the Zustand stores in `src/store/` (11 stores; currently untested)
- [ ] Unit tests for `src/utils/` and the API wrappers in `src/services/`
- [ ] Replace the single smoke test in `__tests__/App.test.tsx` with screen-level tests for the main flows (create, join and play a challenge)
- [ ] GitHub Actions CI: lint, TypeScript check and Jest on every push and pull request

## Configuration & setup
- [ ] Per-environment config (dev / prod) instead of the hardcoded `API_BASE_URL` in `src/constants/config.ts`
- [ ] Ship redistributable (CC0 or self-made) sound effects so a fresh clone builds without adding local audio files
- [ ] Re-enable React Native's New Architecture once legacy modules (e.g. `react-native-sound`) support it

## Features
- [ ] Analytics & event tracking: prompt-view → upgrade conversion, inactivity drop-off, popular categories and feature usage
- [ ] Gamified upsell: milestone rewards or discount coupons after a first completed challenge
