# My Page

Personal portfolio page built with **React**, **TypeScript**, **Vite**, and **Chakra UI**.

## Features

- Responsive, minimalistic layout
- Light/dark theme toggle
- EN/PT language toggle (i18next)
- Home and Projects pages (React Router)

## Tech Stack

- React 18 + TypeScript
- Vite
- Chakra UI + Emotion
- React Router
- i18next / react-i18next

## Getting Started

```bash
cd frontend/my-page
pnpm install
pnpm dev
```

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — type-check and build for production
- `pnpm lint` — run ESLint
- `pnpm preview` — preview the production build locally

## Project Structure

```
frontend/my-page/
├── src/
│   ├── components/   # Shared UI components
│   ├── pages/        # HomePage, ProjectsPage
│   ├── locales/      # en.json, pt.json
│   ├── i18n.ts
│   └── routes.tsx
└── package.json
```
