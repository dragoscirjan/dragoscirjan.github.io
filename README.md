# LunaticThinker.me

Personal site of Dragos Cirjan, served from [dragoscirjan.github.io](https://dragoscirjan.github.io/):

- **Blog** — the LunaticThinker blog ("Thoughts on code and poetry"), migrated from `lunaticthinker.github.io`, with all historical posts (2008+) and URLs preserved.
- **Project documentation** — published docs for `mcp-searchable`, `mcp-tuikit`, `solidref` and the legacy `coding-standards` site, committed here as built output under `projects/` and served alongside the blog.
- **Themes** — the LunaticThinker theme system: a shared dark, Catppuccin Mocha-inspired design foundation for Hugo (implemented in `themes/lunaticthinker/`), with VitePress and MkDocs integrations planned.

## Development

```bash
mise run serve   # local dev server (drafts + live reload)
mise run build   # production build + docs copy into public/
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for workflows and `AGENTS.md` for coding-agent guidance.

## Deployment

Pushes to `main` build with pinned Hugo (extended) via `.github/workflows/hugo.yml` and deploy to GitHub Pages together with the committed documentation directories.