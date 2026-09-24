# Contributing

## Project overview

This repository serves `dragoscirjan.github.io` — the LunaticThinker personal site. It hosts three things:

1. The **LunaticThinker blog** (Hugo), migrated from `lunaticthinker.github.io` with its historical posts and images preserved.
2. The **published documentation** for the author's other projects, committed here as built output only (`mcp-searchable/`, `mcp-tuikit/`, `solidref/`, `coding-standards/`).
3. The **LunaticThinker theme system** — a shared dark, Catppuccin Mocha-inspired design foundation for Hugo, VitePress, and MkDocs.

Development expectations for coding agents live in `AGENTS.md`; this file covers the human workflow.

## Development model

- **Blog and site shell**: Hugo (extended), pinned and provided by [mise](https://mise.jdx.dev) (`mise.toml`). Tasks run with `mise run <task>`. VitePress and MkDocs theme integrations share the same design tokens and are planned for later.
- **Themes**: Hugo theme code under `themes/lunaticthinker/`; shared design tokens and components under the theme system area, with integration notes for Hugo, VitePress, and MkDocs.
- **Project docs**: generated in each project's own repository. This repo receives only the built output.
- **Issues and design**: GitHub Issues for defects/features; design decisions and the theme spec live in this repository's documentation (and the GitHub Wiki where used).

## Set up the repository

```bash
git clone https://github.com/dragoscirjan/dragoscirjan.github.io
cd dragoscirjan.github.io
```

Prerequisites:

- Hugo **extended** (same pinned version as `.github/workflows/hugo.yml`)
- [mise](https://mise.jdx.dev) (installs the pinned Hugo automatically on first `mise run`)
- Git submodules, if the theme is referenced as one during migration: `git submodule update --init --recursive`

> Note: tasks are defined in `mise.toml`. If a task is missing, check `mise.toml` and `AGENTS.md` for the current state rather than inventing commands.

## Local development

```bash
mise run serve         # Hugo dev server with drafts and future posts, live reload
mise run build         # Production build (minified) + docs copy into public/
mise run rebuild       # clean + build
mise run clean         # remove public/
mise run hugo:version
```

The local dev server excludes the committed documentation directories from Hugo's build; they are copied into the Pages artifact during deployment, not processed by Hugo.

## Blog content workflow

1. Create a post from the archetype (date-based filename, same front matter fields as existing posts):

   ```bash
   hugo new content posts/$(date +%Y-%m-%d)-my-post-slug.md
   ```

2. Write the post; keep taxonomies (`categories`, `tags`) consistent with existing posts.
3. Preview locally with `mise run serve`.
4. Commit with a `posts:` or `content:` prefix, e.g. `posts: add article on X`.

Rules:

- **Never modify migrated posts' filenames, dates, or slugs.** Permalinks are part of the historical contract.
- Historical images under `static/uploads/` stay untouched.
- Drafts (front matter `draft: true`) are fine locally; `mise run serve` shows them, production builds exclude them.

## Documentation publishing workflow

Documentation sources live in their respective project repositories. To update docs here:

1. Build the docs site in the **source project repository** (MkDocs, VitePress, etc.).
2. Replace the generated output under this repo's project directory (e.g. `mcp-tuikit/`) — remove stale generated files, copy the new build.
3. Commit exactly as:

   ```
   docs(<project>): update documentation site
   ```

Never hand-edit generated HTML, search indexes, or asset bundles under these directories. If a fix is needed, fix it in the source repo and regenerate.

## Theme development

- The LunaticThinker theme is the shared visual foundation: dark-only, Catppuccin Mocha tokens (`--lt-base`, `--lt-cyan`, `--lt-mauve`, …), 1px borders, restrained technical aesthetic, no fake terminal UI.
- Hugo changes: edit `themes/lunaticthinker/` and verify with `mise run serve` against real blog content.
- Design-system changes (tokens, components): update the shared source and every engine integration (Hugo, VitePress, MkDocs) in the same change, or split into coordinated PRs that land together.
- Reference pages/HTML previews from the theme spec should be kept in sync with the implemented templates.
- Commit with a `theme:` prefix.

## Branches and pull requests

- Work happens on short-lived branches merged to `main` by pull request; direct pushes to `main` are acceptable only for small content fixes and documentation-output updates by the owner.
- One logical change per PR. Blog content, theme work, and docs regeneration should be separate PRs unless tightly coupled.
- Use Conventional Commits.

## Deployment

- Deployment runs automatically on push to `main` via `.github/workflows/hugo.yml` (adapted from the old `lunaticthinker.github.io` workflow): pinned Hugo, Dart Sass, `hugo --minify`, docs directories copied into the artifact, then `actions/deploy-pages`.
- Manual runs are available via `workflow_dispatch` in the Actions tab.
- Do not add other deployment paths. The committed docs directories plus Hugo output together form the single Pages artifact.

## Checklist

Before opening a PR, confirm:

- [ ] `mise run build` succeeds (Hugo build clean, no errors).
- [ ] Migrated post paths and `static/uploads/` references are unchanged.
- [ ] Generated docs directories contain only regenerated output, no hand edits.
- [ ] Theme changes respect the LunaticThinker design system tokens and rules.
- [ ] `CONTRIBUTING.md` / `AGENTS.md` / theme docs updated when conventions changed.
- [ ] Commits follow Conventional Commits.

## Documentation

- `README.md` — what the site is and how to run it.
- `CONTRIBUTING.md` (this file) — workflows and commands.
- `AGENTS.md` — instructions for coding agents and structural boundaries.
- The theme design system and per-engine integration notes live with the theme sources.