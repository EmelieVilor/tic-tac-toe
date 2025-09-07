# Copilot Instructions for Tic-Tac-Toe React/Vite Project

## Project Overview
- This is a React + TypeScript project bootstrapped with Vite.
- Main UI logic is in `src/Components/` (Board, Square, Game, Header).
- App entry point: `src/main.tsx` and `src/App.tsx`.
- Styling: `src/App.css`, `src/index.css`.
- Types are defined in `src/Types/`.

## Architecture & Data Flow
- The game state (board squares, turn, winner) is managed in React components using hooks (`useState`).
- `Game.tsx` is the top-level component, rendering the board and controls.
- `Board.tsx` manages the squares and turn logic, passing props to `Square.tsx`.
- `Square.tsx` is a presentational component for each cell.
- No global state management (Redux, Context) is used; all state is local to components.

## Developer Workflows
- **Build:** Run `npm run build` to create a production build (uses Vite).
- **Dev Server:** Run `npm run dev` for hot-reloading development server.
- **Lint:** Run `npm run lint` (ESLint config in `eslint.config.js`).
- **Type Checking:** TypeScript config in `tsconfig*.json` files.
- **No test framework is present by default.**

## Conventions & Patterns
- Use TypeScript for all components and props.
- Board state is an array of `(string | null)[]` (not `string | null[]`).
- Component props are typed in `src/Types/` (e.g., `SquareProps.ts`).
- Functional components only; no class components.
- Use Vite's HMR for fast refresh during development.
- Keep logic for winner calculation and turn management inside `Board.tsx`.
- Use presentational/dumb components for UI (e.g., `Square.tsx`).

## Integration Points
- No backend/API integration; all logic is client-side.
- Images/assets in `src/Images/` and `src/assets/`.
- Public files (e.g., icons) in `public/`.

## Examples
- To update board state:
  ```tsx
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  setSquares(nextSquares);
  ```
- To add a new component, place it in `src/Components/` and type props in `src/Types/`.

## Key Files
- `src/Components/Board.tsx`: Game logic, state, winner calculation.
- `src/Components/Square.tsx`: Cell rendering.
- `src/Components/Game.tsx`: Top-level UI.
- `src/Types/SquareProps.ts`: Prop types.
- `vite.config.ts`: Vite build config.
- `eslint.config.js`: Linting rules.

---
If any section is unclear or missing, please specify what needs improvement or what additional context is needed.
