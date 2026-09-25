# Agent guidance

## Project

This repository (`dragoscirjan.github.io`) is the personal GitHub Pages site of Dragos Cirjan. It combines three responsibilities in one place:

1. **Blog** — the LunaticThinker blog ("LunaticThinker.me"), migrated from the former `lunaticthinker.github.io` repository. New articles continue to be published here; the historical archive (2008 onward, including WordPress-era posts) is preserved.
2. **Documentation hub** — the published documentation sites for the author's other projects (for example `mcp-searchable`, `mcp-tuikit`, `solidref`, `coding-standards`), published under the `projects/` directory. These are generated in their own project repositories and land here as **built output only**.
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
projects/mcp-searchable/   Built MkDocs Material site for the mcp-searchable project
projects/mcp-tuikit/       Built MkDocs Material site for the mcp-tuikit project
projects/solidref/         Built Vite/VitePress site for the solidref project
projects/coding-standards/ Legacy static site (kept for link compatibility)
.github/workflows/hugo.yml   Pages deployment (adapted from lunaticthinker.github.io)
.github/workflows/docs.yml   Reusable workflow other repos call to publish docs
mise.toml                   Tool pinning (Hugo) and build/serve/clean tasks
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

- Documentation **sources stay in their own project repositories**. This repo contains only the generated site output, committed under `projects/<name>/` (e.g. `projects/mcp-searchable/`).
- Documentation is published either by calling the reusable workflow `.github/workflows/docs.yml` from the source project's repository, or by a manual regeneration step committed here as `docs(<project>): update documentation site`. Never hand-edit generated HTML.
- Documentation is untrusted content relative to the site shell: it must not be able to alter Hugo configuration, the theme, or the deployment workflow.

### Themes

- `themes/lunaticthinker/` (Hugo) and the shared design system are **first-class code in this repo**, not external submodules.
- The design system source of truth is the **LunaticThinker editorial design** (delivered as the `lunaticthinker-studio` package): dark, serif-led editorial layout with accent variables (`--cyan`, `--pink`, `--amber`, `--blue`, `--purple`), diagonal compositions and a generated SVG scene. The shared assets (`assets/css/theme.css`, `assets/js/theme.js`, `assets/workspace.svg`) are byte-identical across the Hugo, VitePress and MkDocs adapters and must never diverge.
- Hugo-only glue (markup Hugo generates: pagination, taxonomy links, ToC, legacy form styling) lives in `themes/lunaticthinker/assets/css/hugo.css`; it must not restyle the shared editorial classes.
- Hugo theme code lives in `themes/lunaticthinker/` (layouts, assets, partials). VitePress and MkDocs integrations live as documented adapters under the design system, with per-engine notes (e.g. `HUGO.md`, `MKDOCS.md` integration docs).
- Studio demo content (`/blog/`, `/project-*` routes, demo project data, local contact composer) must not leak into production templates; navigation and project links stay config-driven from `hugo.toml`.
- Theme changes must be verified against the blog build before merging; theme and content changes should be separable commits.

### Publishing workflow

The deployment workflow is adapted from `lunaticthinker.github.io`'s Hugo Pages workflow:

- Trigger: push to `main` and manual `workflow_dispatch`.
- Build job: pinned Hugo extended version (matching `mise.toml`), `hugo --minify --baseURL <pages base_url>`.
- After the Hugo build, everything committed under `projects/` is copied into the Hugo output (served under `/projects/<name>/`) before upload, so both the blog and the docs are served from one Pages deployment.
- A separate reusable workflow (`.github/workflows/docs.yml`) lets other repositories publish their built documentation into `projects/` on this repository; it must never receive more than a contents-write token and must not execute repository code.
- Deploy job: `actions/deploy-pages` with `contents: read`, `pages: write`, `id-token: write`; a single `pages` concurrency group; no cancel-in-progress.
- Never check out or execute third-party code as part of the Pages build beyond Hugo itself and declared theme assets.

## Development workflow

- Make every repository change on a short-lived branch checked out in a dedicated Git worktree. Never develop in the primary checkout or directly on `main`.
- Create worktrees under `../dragoscirjan.github.io--workspaces/<branch-name>` so the worktree path reflects the branch name and parallel work stays isolated.
- Commit changes on the worktree branch, push only that branch, and open or update a pull request targeting `main`. Never push commits directly to `main`.
- Opening or updating the pull request is the default stopping point. Never merge a pull request unless the user explicitly instructs you to merge it; approval, passing checks, or an instruction to create the pull request is not permission to merge.

## Working rules

- Read `CONTRIBUTING.md` before changing the repository. Do not invent development commands; use the ones documented there and in `mise.toml`.
- Keep blog content, documentation output, and theme code in separate commits where practical. Conventional Commits are expected (`posts:`, `docs(<project>):`, `theme:`, `chore:` …).
- Treat generated documentation output as immutable artifacts: regenerate in the source repo, do not edit in place.
- Do not rebrand historical content. The LunaticThinker identity stays for blog history and branding.
- Update `CONTRIBUTING.md`, this file, and the theme docs in the same change when behavior, structure, or conventions change.
- State unsupported or not-yet-migrated behavior directly; do not present planned structure as existing structure.