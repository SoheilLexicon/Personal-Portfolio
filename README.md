# Soheil Mohajer – Personal Portfolio

A responsive individual frontend portfolio made with **React, Vite, JavaScript/JSX, CSS Grid and Flexbox**.

## Sections

- **Header** – logo, navigation and an accessible mobile menu (React `useState`).
- **Hero** – introduction and a CSS-only visual preview.
- **About** – background and learning goals.
- **Skills** – grouped technical skills rendered from data.
- **Projects** – cards rendered with `.map()` and conditional buttons based on verified links.
- **Education** – current and previous training.
- **Contact** – real GitHub, LinkedIn and Credly profiles, plus an email link.
- **Footer** – credits and back-to-top navigation.

`src/App.jsx` contains the React components. `src/portfolioData.js` holds editable details, projects, skills and links. `src/App.css` controls layout, colors and responsive rules.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal. `npm run build` creates the deployable `dist` directory.

## Before publishing

1. Review the text and contact details in `src/portfolioData.js`.
2. The CV project uses the verified repository URL `https://github.com/SoheilLexicon/Lexicon-CV`.
3. **Skåne IT Support** is currently a local demo. Add `repoUrl` and `demoUrl` *only after* they exist and you have tested them.
4. **CampusEats** is clearly labelled a **group prototype**; do not present it as a completed individual production app.
5. Private side projects are not included in this public portfolio.
6. Check the mobile menu, external links and email link before presenting.

## AI in the development workflow

ChatGPT was used to discuss site structure, help refine the styling and review code. The project should be tested and understood before presenting.

## Deployment

For a GitHub Pages **project** repository, configure Vite's `base` option (e.g. `/repository-name/`). For Netlify or Vercel, the standard Vite build output is `dist`.
