# ONE-CLICK PROMPT — Create a New Classroom Mini Game

Use the connected GitHub repository `acquaday14-arch/minigame`.

Create a new lightweight English classroom mini game from the worksheet/content I provide after this prompt.

## Repository rules
- Work on branch `main`.
- Use `_template/index.html` as the starting structure.
- Create the new game in a NEW folder at the repository root.
- Generate a short lowercase kebab-case folder slug from the lesson topic.
- If that slug already exists, add `-02`, `-03`, etc. Never overwrite an existing game unless I explicitly ask.
- The new folder must contain its own `index.html`.
- Keep the game self-contained with HTML/CSS/JavaScript whenever practical.
- Use only relative paths.
- Do not delete, rename, or modify other games.
- After creating the game, add exactly one new entry to `games.json` so it appears on the library home page.
- Preserve valid JSON in `games.json`.
- Do not change GitHub Pages settings.

## Default classroom UX
- Require student name before Start.
- Show one question/activity at a time.
- Show Score and Progress while playing.
- Use large, clear text and buttons.
- Include Next, Back, Restart, and Sound On/Off.
- Give clear correct/incorrect feedback.
- Show a final score screen.
- Timer is OFF by default. Only add/enable a timer if I explicitly request one.
- Keep the design bright, friendly, simple, and suitable for classroom screen sharing.
- Avoid login, authentication, user accounts, databases, backend services, or unnecessary frameworks.

## Content handling
- Use the worksheet/content I provide as the source of truth.
- Correct obvious grammar/answer-key mistakes before publishing.
- Keep vocabulary and instructions appropriate to the requested learner level.
- Do not reveal answers before the learner submits.
- For matching, word-order, fill-in-the-blank, MCQ, and error-correction tasks, convert them into interactive activities rather than displaying the worksheet as a static page.
- If images are supplied, use them only where they genuinely help the activity.

## Safety against accidental breakage
Before writing:
1. Read `AGENT_GUIDE.md`.
2. Read `_template/index.html`.
3. Read `games.json`.
4. Check whether the intended folder slug already exists.

After writing:
1. Re-read the new `index.html`.
2. Confirm `games.json` is valid JSON and contains the new game exactly once.
3. Confirm no existing game files were overwritten.
4. Confirm the direct URL format is:
   `https://acquaday14-arch.github.io/minigame/<folder-slug>/`

## Completion behavior
Do the work directly. Do not stop to propose architecture or ask unnecessary technical questions.

When finished, reply with:
- Game title
- Direct student link
- One short sentence describing what was created
- Mention any issue only if something actually failed

---

## NEW GAME CONTENT

Paste the worksheet, screenshots, vocabulary list, grammar target, questions, or lesson instructions below this line.
