# minigame

Interactive English mini games for classroom teaching.

Live library:
https://acquaday14-arch.github.io/minigame/

## Structure

- `index.html` — game library home page
- `games.json` — list of published games shown on the home page
- `_template/index.html` — reusable base template for new classroom games
- `AGENT_GUIDE.md` — rules for safely creating new games
- `demo/index.html` — deployment test

Each new game should be added in its own folder, for example:

```
past-simple-01/index.html
comparatives-01/index.html
vocabulary-animals/index.html
```

GitHub Pages automatically publishes changes from the `main` branch.
