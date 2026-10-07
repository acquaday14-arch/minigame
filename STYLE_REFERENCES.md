# Style reference templates

These local templates preserve the interaction style the user likes from two earlier ChatGPT Sites. New games should copy the LOCAL template, not depend on the external Site at runtime.

## 1. Present Tense Challenge — playful arcade
Reference Site:
https://present-tense-challenge.acquaday14.chatgpt.site/game

Local template:
`_templates/present-tense-challenge/index.html`

Use this when the lesson is mainly text/grammar/word-order and should feel lively:
- rounded purple HUD
- round / points / question counters
- bold playful Fredoka typography
- large answer cards
- bright pastel accents
- correct-answer pop
- wrong-answer shake
- Web Audio correct/incorrect sounds
- confetti celebration
- clear Back / Restart / Next controls

## 2. Was-Were-Did Quest — picture-first quest
Reference Site:
https://was-were-did-quest.acquaday14.chatgpt.site/game

Local template:
`_templates/was-were-did-quest/index.html`

Use this when pictures are central to the task:
- large picture card as the visual focus
- purple game HUD
- round / points / question counters
- playful Fredoka typography
- large matching-answer cards
- correct/wrong animation and sound
- layout suitable for AI-generated question images

### Picture assets
For a real picture game, replace the placeholder SVG in the local template with files stored inside that game's own `assets/` folder, for example:
`my-game/assets/q01.webp`.

Prefer WebP or optimized PNG/JPEG. Use relative paths. Never hotlink images from the old ChatGPT Sites.
