# Agent guidance

## Project

This repository (`dragoscirjan.github.io`) is the personal GitHub Pages site of Dragos Cirjan. It combines three responsibilities in one place:

1. **Blog** — the LunaticThinker blog ("LunaticThinker.me"), migrated from the former `lunaticthinker.github.io` repository. New articles continue to be published here; the historical archive (2008 onward, including WordPress-era posts) is preserved.
2. **Documentation hub** — the published documentation sites for the author's other projects (for example `mcp-searchable`, `mcp-tuikit`, `solidref`, `coding-standards`). These are generated in their own project repositories and land here as **built output only**.
3. **Themes** — the canonical, versioned home of the **LunaticThinker theme system**: one shared visual foundation implemented (or to be implemented) for Hugo, VitePress, and MkDocs, applied across the blog and all project documentation.

The site is branded **LunaticThinker** ("Thoughts on code and poetry") even though it is served from `dragoscirjan.github.io`.

## What lives here (target layout)

```
hugo.toml                  Hugo site configuration (blog + site shell)
content/                   Blog content (posts, about, contact)
  posts/YYYY-MM-DD-slug.md Date-based permalinks preserved from the old blog
static/uploads/            Historical blog images (WordPress-migrated), kept as-is
themes/lunaticthinker/     Hugo theme implementing the LunaticThinker design system
themes/design-system/      Shared tokens/components/rules (Hugo, VitePress, MkDocs)
mcp-searchable/            Built MkDocs Material site for the mcp-searchable project
mcp-tuikit/                Built MkDocs Material site for the mcp-tuikit project
solidref/                  Built Vite/VitePress site for the solidref project
coding-standards/          Legacy static site (kept for link compatibility)
.github/workflows/hugo.yml Pages deployment (adapted from lunaticthinker.github.io)
Taskfile.yml               Local build/serve/clean tasks
```

This layout is now in place: the blog content has been migrated from `lunaticthinker.github.io` and the Hugo theme lives in `themes/lunaticthinker/`.

## Repository roles and boundaries

### Blog

- The blog is Hugo-based. Keep the Hugo structure from `lunaticthinker.github.io`: `content/posts/` with `YYYY-MM-DD-slug` filenames, the same front matter fields, taxonomies (`categories`, `tags`), and the FixIt-era content semantics.
- **Preserve existing paths.** Old post URLs (e.g. `/posts/2009-11-24-convert-camelcase-to-underscores-using-sed/`) must keep working. Do not rename, re-date, or restructure migrated posts. Add redirects only for URLs that genuinely change.
- Historical `static/uploads/...` image paths must keep working; do not move or regenerate historical images.
- New posts use the project archetype and follow the same front matter conventions as existing posts.
- Poetry, personal, and technical posts coexist; do not enforce a uniform category scheme across eras.

### Project documentation

- Documentation **sources stay in their own project repositories**. This repo contains only the generated site output, committed under the project's directory (e.g. `mcp-searchable/`).
- Documentation is updated by each project's CI or by a manual regeneration step in the source repo, committed here as `docs(<project>): update documentation site`. Never hand-edit generated HTML.
- Documentation is untrusted content relative to the site shell: it must not be able to alter Hugo configuration, the theme, or the deployment workflow.

### Themes

- `themes/lunaticthinker/` (Hugo) and the shared design system are **first-class code in this repo**, not external submodules.
- The design system source of truth is the LunaticThinker theme spec (dark-only, Catppuccin Mocha-inspired, quiet/technical; tokens such as `--lt-base #1e1e2e`, `--lt-cyan #89dceb`, `--lt-mauve #cba6f7`; 1px borders; 16px+ body; no fake terminal aesthetics). The shared tokens and components CSS live in `themes/lunaticthinker/assets/css/` and must stay byte-identical with any VitePress/MkDocs integration.
- Hugo theme code lives in `themes/lunaticthinker/` (layouts, assets, partials). VitePress and MkDocs integrations live as documented adapters under the design system, with per-engine notes (e.g. `HUGO.md`, `MKDOCS.md` integration docs).
- Theme changes must be verified against the blog build before merging; theme and content changes should be separable commits.

### Publishing workflow

The deployment workflow is adapted from `lunaticthinker.github.io`'s Hugo Pages workflow:

- Trigger: push to `main` and manual `workflow_dispatch`.
- Build job: pinned Hugo extended version, Dart Sass, recursive submodule checkout, `hugo --minify --baseURL <pages base_url>`.
- After the Hugo build, the committed documentation directories (`mcp-searchable/`, `mcp-tuikit/`, `solidref/`, `coding-standards/`, …) are copied into the Hugo output before upload, so both the blog and the docs are served from one Pages deployment.
- Deploy job: `actions/deploy-pages` with `contents: read`, `pages: write`, `id-token: write`; a single `pages` concurrency group; no cancel-in-progress.
- Never check out or execute third-party code as part of the Pages build beyond Hugo itself and declared theme assets.

## Working rules

- Read `CONTRIBUTING.md` before changing the repository. Do not invent development commands; use the ones documented there and in `Taskfile.yml`.
- Keep blog content, documentation output, and theme code in separate commits where practical. Conventional Commits are expected (`posts:`, `docs(<project>):`, `theme:`, `chore:` …).
- Treat generated documentation output as immutable artifacts: regenerate in the source repo, do not edit in place.
- Do not rebrand historical content. The LunaticThinker identity stays for blog history and branding.
- Update `CONTRIBUTING.md`, this file, and the theme docs in the same change when behavior, structure, or conventions change.
- State unsupported or not-yet-migrated behavior directly; do not present planned structure as existing structure.