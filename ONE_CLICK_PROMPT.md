# ONE-CLICK PROMPT — Create a New Classroom Mini Game

Use the connected GitHub repository `acquaday14-arch/minigame`.

Create a new lightweight English classroom mini game from the worksheet/content I provide after this prompt.

## Repository rules
- Work on branch `main`.
- Read `AGENT_GUIDE.md`, `STYLE_REFERENCES.md`, `games.json`, and the relevant local template before writing.
- Choose the most suitable template automatically:
  - `_template/index.html` for a very simple/clean game.
  - `_templates/present-tense-challenge/index.html` for playful grammar, vocabulary, word-order, multi-round or general challenge games.
  - `_templates/was-were-did-quest/index.html` when picture questions are central.
- Create the new game in a NEW folder at the repository root.
- Generate a short lowercase kebab-case folder slug from the lesson topic.
- If that slug already exists, add `-02`, `-03`, etc. Never overwrite an existing game unless I explicitly ask.
- The new folder must contain its own `index.html`.
- Keep the game self-contained with HTML/CSS/JavaScript whenever practical.
- Use only relative paths.
- Do not delete, rename, or modify other games.
- After creating the game, add exactly one new entry to `games.json`.
- Preserve valid JSON in `games.json`.
- Do not change GitHub Pages settings.

## Preferred visual / sound feel
Unless I ask for another style, make the game feel like the two saved reference templates:
- playful rounded font and large headings
- bright, friendly pastel colors
- rounded HUD/cards/buttons
- clear round / score / progress / question counters
- correct-answer pop or celebration
- wrong-answer shake or clear visual feedback
- lightweight Web Audio sound effects
- responsive layout for laptop/tablet
- fun, polished, but not visually cluttered

## Default classroom UX
- Require student name before Start.
- Show one question/activity at a time.
- Show Score and Progress while playing.
- Use large, clear text and buttons.
- Include Next, Back, Restart, and Sound On/Off when appropriate.
- Give clear correct/incorrect feedback.
- Show a final score screen.
- Timer is OFF by default unless I explicitly request it or the brief clearly asks for timed rounds.
- Avoid login, authentication, user accounts, databases, backend services, or unnecessary frameworks.

## Content handling
- Use the worksheet/content I provide as the source of truth.
- Correct obvious grammar/answer-key mistakes before publishing.
- Keep vocabulary and instructions appropriate to the requested learner level.
- Do not reveal answers before the learner submits.
- Convert matching, word-order, fill-in-the-blank, MCQ, picture questions and error correction into real interactions.

## Image handling
- If I provide images, integrate them into the relevant questions.
- If a game clearly needs original illustrations and I request AI images, generate them in a consistent style, store them in that game's `assets/` folder, optimize them for web, and integrate them using relative paths.
- Never hotlink images from old ChatGPT Sites.

## Teacher Records integration
- Teacher Records is ON by default for every published game.
- Reuse the existing shared files:
  - `/minigame/shared/teacher-records-config.js`
  - `/minigame/shared/teacher-records.js`
- At the final result screen, automatically submit exactly one completed attempt containing:
  - student name
  - game title
  - score
  - total
  - duration
- Show a short status such as “Score sent to your teacher.”
- Never display the class record list to students.
- Do not create a new Google Sheet, Apps Script deployment, database, or backend for each game.
- Do not send test/template-preview scores from URLs under `/_template` or `/_templates/`.

## Safety against accidental breakage
Before writing:
1. Read the repository guides and selected template.
2. Check whether the intended folder slug already exists.

After writing:
1. Re-read the new `index.html`.
2. Confirm `games.json` is valid JSON and contains the new game exactly once.
3. Confirm no existing game files were overwritten.
4. Confirm the direct URL format:
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
