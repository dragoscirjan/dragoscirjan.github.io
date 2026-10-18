# LunaticThinker.me

Personal site of Dragos Cirjan, served from [dragoscirjan.github.io](https://dragoscirjan.github.io/):

- **Blog** — the LunaticThinker blog ("Thoughts on code and poetry"), migrated from `lunaticthinker.github.io`, with all historical posts (2008+) and URLs preserved.
- **Project documentation** — published docs for `mcp-searchable`, `mcp-tuikit`, `solidref` and the legacy `coding-standards` site, committed here as built output under `projects/` and served alongside the blog.
- **Themes** — the LunaticThinker editorial design: a shared dark, serif-led visual foundation implemented for Hugo in `themes/lunaticthinker/`, with shared studio assets used by VitePress and MkDocs adapters.

## Development

```bash
mise run serve   # local dev server (drafts + live reload)
mise run build   # production build + docs copy into public/
```

## Agent-assisted publishing

Project-scoped skills under [`.agents/skills/`](.agents/skills/) support the publishing workflow without replacing the author's judgment:

- [`asd-ste100-technical`](.agents/skills/asd-ste100-technical/SKILL.md) helps make technical articles precise and readable.
- [`unslop`](.agents/skills/unslop/SKILL.md) removes common AI-writing patterns while preserving intentional voice.
- [`instruction-maintenance`](.agents/skills/instruction-maintenance/SKILL.md) audits repeated workflow mismatches and proposes human-approved improvements to repository instructions.

Instruction maintenance is proposal-first. It must not silently change editorial policy, article content, security boundaries, or publication authority.

See [CONTRIBUTING.md](CONTRIBUTING.md) for publishing workflows, [VALIDATION.md](VALIDATION.md) for checks, and [AGENTS.md](AGENTS.md) for agent guidance.

## Deployment

Pushes to `main` build with pinned Hugo (extended) via `.github/workflows/hugo.yml` and deploy to GitHub Pages together with the committed documentation directories.