# Mini Game Repository Rules

This repository is a static GitHub Pages library for lightweight classroom English mini games.

## Core workflow
1. Create each new lesson in its own folder at the repository root.
2. Each game must have its own `index.html`.
3. Use a short lowercase kebab-case folder slug, for example `past-simple-01`.
4. Never overwrite, rename, or delete an existing game unless the user explicitly asks.
5. After creating a game, add one entry to `games.json` so it appears on the home library.
6. Keep all paths relative so the site works under GitHub Pages project URLs.
7. Prefer self-contained HTML/CSS/JS to reduce dependency and deployment problems.

## Default classroom UX
- Student name required before Start.
- One question/activity at a time.
- Score and progress always visible during play.
- Large text and buttons suitable for screen sharing and young learners.
- Next, Back, Restart, and Sound On/Off controls.
- Correct/incorrect feedback.
- Final score screen.
- Timer is optional. Use it only when the lesson request asks for one.
- Avoid authentication, user accounts, databases, or backend features unless explicitly requested.

## Content rules
- Keep language appropriate to the learner level given by the user.
- Do not show answer keys before the learner submits.
- Keep interactions simple and classroom-friendly.
- Preserve previous games.

## Template
Use `_template/index.html` as the starting point for new games.
