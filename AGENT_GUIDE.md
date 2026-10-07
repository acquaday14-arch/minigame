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
- Next, Back, Restart, and Sound On/Off controls when appropriate.
- Clear correct/incorrect feedback.
- Final score screen.
- Timer is optional. Use it only when the lesson request asks for one.
- Avoid authentication, user accounts, databases, or backend features unless explicitly requested.

## Visual / interaction template selection
Read `STYLE_REFERENCES.md` before building a new game.

Choose the closest local template:
- `_template/index.html` = clean/simple base.
- `_templates/present-tense-challenge/index.html` = playful arcade style for grammar, vocabulary, word order and multi-round challenges.
- `_templates/was-were-did-quest/index.html` = picture-first purple quest style for image questions.

Unless the user asks for a different look, prefer one of the two playful reference templates over the plain base.

Preserve the reference feel:
- playful rounded typography
- bright but controlled pastel palette
- strong visual hierarchy
- responsive large controls
- correct/wrong sound effects
- small motion feedback such as pop, shake, progress animation and celebration
- no heavy framework required

## Picture games
When images are central:
- create or use a game-local `assets/` folder
- use relative image paths
- optimize assets for web
- if AI images are generated, keep style consistent across the same game
- never hotlink the old ChatGPT Sites
- make image cards responsive and large enough for classroom viewing

## Content rules
- Keep language appropriate to the learner level given by the user.
- Do not show answer keys before the learner submits.
- Keep interactions simple and classroom-friendly.
- Preserve previous games.

## Template
Start from the selected LOCAL template and adapt content without breaking the existing interaction patterns.


## Teacher Records
Central Teacher Records is mandatory for normal published games.

Every new published game must:
- load `/minigame/shared/teacher-records-config.js`
- load `/minigame/shared/teacher-records.js`
- submit exactly one record when an attempt reaches its final result screen
- send student name, game title, score, total, and duration
- keep the Google Sheet private; never show the class record list in the student-facing game
- keep the helper's local browser backup as a fallback
- not send records from template preview URLs under `/_template` or `/_templates/`

Do not create a new backend or a new Sheet per game. All games use the shared central endpoint.
