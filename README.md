# claude-skills

## Plugins (loaded via `.claude/settings.json`)

- `mattpocock-skills` (mattpocock/skills)
- `humanizer` (blader/humanizer)
- `lemo-opuscar` (lemomo-ai/lemo-opuscar)
- `hallmark` (nutlope/hallmark)
- `ponytail` (dietrichgebert/ponytail)
- `ui-ux-pro-max` (nextlevelbuilder/ui-ux-pro-max-skill)

## Tools (installed by the cloud setup script)

- `graphify` (Graphify-Labs/graphify): CLI plus the project skill in `.claude/skills/graphify/` and hooks in `.claude/settings.json`. Locally: `uv tool install graphifyy`.
- `rtk` (rtk-ai/rtk): CLI plus a global Bash hook. Locally: install per its README, then `rtk init -g`.

Not included: emilkowalski/skills and coreyhaines31/marketingskills, which install via `npx skills add` and have no plugin marketplace.

## Copied skills (`.claude/skills/`)

Copied from third-party repos via `npx skills add`. Check each original repo's license before reusing or redistributing:

- emilkowalski/skills (incl. `apple-design`)
- coreyhaines31/marketingskills (incl. `product-marketing`)
