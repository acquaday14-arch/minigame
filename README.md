# minigame

Interactive English mini games for classroom teaching.

Live library:
https://acquaday14-arch.github.io/minigame/

## Structure

- `index.html` — game library home page
- `games.json` — list of published games shown on the home page
- `_template/index.html` — clean/simple reusable base
- `_templates/present-tense-challenge/index.html` — playful arcade reference template
- `_templates/was-were-did-quest/index.html` — picture-first quest reference template
- `STYLE_REFERENCES.md` — visual/sound/effect guidance based on the two liked Sites
- `AGENT_GUIDE.md` — rules for safely creating new games
- `ONE_CLICK_PROMPT.md` — reusable one-click prompt
- `demo/index.html` — deployment test

Each new game should be added in its own folder, for example:

```
past-simple-01/index.html
comparatives-01/index.html
vocabulary-animals/index.html
```

GitHub Pages automatically publishes changes from the `main` branch.
