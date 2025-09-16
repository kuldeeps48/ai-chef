# ai-chef

AI-powered recipe assistant that turns whatever is in the kitchen into step‑by‑step meals, tips, and shopping lists.

Features

- Turn ingredients into complete recipes with steps, timing, and tips
- Adjust servings and dietary preferences
- Auto-generate shopping lists
- Friendly, iterative prompting to refine results
- Lightweight UI built for speed

Tech stack

- React + Vite
- Vanilla CSS
- ESM, HMR, and ESLint

Prerequisites

- Node.js 18+ and npm

Quick start

- Clone repo and install dependencies: npm install
- Create .env in project root with your LLM provider key, for example:
  - VITE_OPENAI_API_KEY=your_key
- Start dev server: npm run dev
- Open the local URL printed by Vite

Scripts

- npm run dev: Start the app with HMR
- npm run build: Production build
- npm run preview: Preview the production build locally
- npm run lint: Lint the codebase (if configured)

Project structure (high level)

- src/
  - App.jsx, App.css: App shell and styles
  - components/: UI components (e.g., Header)
  - assets/: Icons and images

Usage

- Enter available ingredients and constraints (diet, time, cuisine)
- Generate a recipe, then refine by asking for substitutions or different styles
- Export or copy the shopping list and instructions

Roadmap

- Save/share recipes
- Nutrition estimates
- Multi-model support and cost controls
- Offline caching of previous results

Contributing

- Open issues and PRs are welcome. Keep changes small and include a brief rationale.

Disclaimer

- Always verify cooking times and allergens for your needs.
