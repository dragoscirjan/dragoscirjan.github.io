# Contributing to LunaticThinker

Contributions through focused issues and pull requests are welcome. This guide applies to human contributors and coding agents.

Read this document before planning or performing a repository architecture, design, implementation, content, documentation, configuration, policy, or publication change.

## Project overview

This repository serves `dragoscirjan.github.io` as the LunaticThinker personal site. It has three responsibilities:

1. The **LunaticThinker blog**, built with Hugo and migrated from `lunaticthinker.github.io` with historical posts and images preserved.
2. The **published documentation** for the author's other projects, committed as built output under `projects/`.
3. The **LunaticThinker theme**, a dark, serif-led editorial design implemented for Hugo under `themes/lunaticthinker/`.

The shared studio package also feeds VitePress and MkDocs adapters, but their source directories are not part of this repository unless they are explicitly added. Do not describe absent local components as implemented here.

This is a blog and publishing repository, not an application-code project. Editorial quality, authorial voice, factual care, and historical continuity take precedence over coding-centric defaults.

This is a blog and publishing repository, not an application-code project. Editorial quality, authorial voice, factual care, and historical continuity take precedence over coding-centric defaults.

## Contribution workflow

1. Clarify ambiguous requirements and confirm shared understanding.
2. Create or link a GitHub issue before architecture, design, implementation, or policy changes. New posts, documentation artifact refreshes, typo fixes, and broken-link fixes do not require an issue unless the owner requests one.
3. Keep each change focused on one issue or task. Separate blog content, generated documentation, and theme changes when practical.
4. Follow the isolated-workspace gate and configuration in `AGENTS.md` before changing repository state.
5. Update documentation when behavior, policy, structure, or usage changes.
6. Read and follow [`VALIDATION.md`](VALIDATION.md) before validating, committing, pushing, or publishing the change.
7. Commit with [Conventional Commits](https://www.conventionalcommits.org/), using scopes or prefixes that match the change, such as `posts:`, `content:`, `docs(<project>):`, `theme:`, or `chore:`.
8. Push only the change branch and open a pull request targeting `main`.

Do not merge or release without explicit owner instruction. Approval, completed checks, or a mergeable pull request is not permission to merge or release.

## Repository identity for automated contributors

When a workflow needs repository identity, query project-scoped memory or context first. The reusable `isolated-workspace` skill owns the Git fallback, sanitization, and caching procedure. Do not duplicate or bypass that procedure.

Store only safe identity data. Never store credentials, token-bearing URLs, embedded user information, or personal filesystem paths.

## Development model

- **Blog and site shell:** Hugo Extended, pinned through `mise.toml`. Run project tasks with `mise run <task>`.
- **Theme:** Hugo theme code lives under `themes/lunaticthinker/`. Shared visual rules use the LunaticThinker editorial design: dark, serif-led layouts, accent variables, diagonal compositions, and the generated workspace scene.
- **Project documentation:** Documentation sources remain in their own repositories. This repository receives built output only under `projects/<name>/`.
- **Issues and design:** Track defects and features in GitHub Issues. Keep implemented behavior, repository guidance, and theme documentation consistent.
- **Agent skills:** Reusable skills live under `.agents/skills/` and follow the [Agent Skills specification](https://agentskills.io/specification).

## Set up the repository

```bash
git clone https://github.com/dragoscirjan/dragoscirjan.github.io
cd dragoscirjan.github.io
```

Prerequisites:

- Hugo Extended at the version pinned in `mise.toml` and `.github/workflows/hugo.yml`
- [mise](https://mise.jdx.dev), which installs the pinned Hugo version when a task runs

Use the commands defined in `mise.toml`. Do not invent replacement build or deployment commands.

## Local development

```bash
mise run serve         # Hugo server with drafts, future posts, and live reload
mise run build         # Minified production build, then copy projects/ into public/
mise run rebuild       # Clean, then build
mise run clean         # Remove public/
mise run hugo:version  # Show the pinned Hugo version
```

The local Hugo server does not process committed project documentation as source. The production task and Pages workflow copy `projects/` into the generated site.

## Blog article workflow

1. Create a post from the project archetype with a date-based filename:

   ```bash
   hugo new content posts/$(date +%Y-%m-%d)-my-post-slug.md
   ```

2. Complete the front matter and keep the filename, publication date, slug, categories, and tags intentional.
3. Draft in the author's intended voice. Technical posts may use `.agents/skills/asd-ste100-technical/SKILL.md` for clarity; do not apply its developer-documentation style mechanically to poetry or personal essays.
4. Verify factual claims, code examples, quotations, links, and image paths. Distinguish facts from opinion and personal recollection.
5. Apply `.agents/skills/unslop/SKILL.md` as a final editorial pass on new or substantially revised prose. Preserve deliberate rhythm, ambiguity, humor, and poetic language.
6. Preview the article with `mise run serve`, then run the checks in `VALIDATION.md`.
7. Commit with a `posts:` or `content:` prefix, for example `posts: add article on X`.

Rules:

- Preserve existing post paths. Never rename, re-date, or restructure migrated posts.
- Keep historical images under `static/uploads/` at their existing paths.
- Do not rebrand historical content. The LunaticThinker identity remains part of the archive.
- Poetry, personal writing, and technical articles coexist. Do not force one category scheme or prose style across eras.
- Drafts may use `draft: true`; local serving includes them, while production builds exclude them.

## Documentation publishing workflow

Documentation sources live in their respective project repositories. To update documentation here:

1. Build the documentation site in its source repository.
2. Replace the corresponding generated output under `projects/<project>/`, or call this repository's reusable publishing workflow.
3. Commit the artifact update as:

   ```text
   docs(<project>): update documentation site
   ```

Never hand-edit generated HTML, search indexes, source maps, or asset bundles. Fix the source project and regenerate the site.

### Publishing from another repository

The reusable workflow `.github/workflows/docs.yml` accepts a built documentation artifact and publishes it under `projects/<project>/`.

```yaml
# .github/workflows/publish-docs.yml in the source project
name: Publish documentation

on:
  push:
    branches: [main]
    paths: ['docs/**', 'mkdocs.yml']
  workflow_dispatch:

permissions:
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build documentation
        run: mkdocs build --site-dir site
      - name: Upload docs artifact
        uses: actions/upload-artifact@v4
        with:
          name: docs-site
          path: site

  publish:
    needs: build
    uses: dragoscirjan/dragoscirjan.github.io/.github/workflows/docs.yml@main
    with:
      project: mcp-searchable
    secrets:
      token: ${{ secrets.PAGES_DOCS_TOKEN }}
```

Details:

- The artifact name defaults to `docs-site`. Set `artifact` for another name and `source_dir` when the artifact wraps the site root in a subdirectory.
- `PAGES_DOCS_TOKEN` must have only the repository access needed to write contents in `dragoscirjan/dragoscirjan.github.io`. A caller's `GITHUB_TOKEN` cannot push to another repository.
- The workflow commits as `github-actions[bot]` with `docs(<project>): update documentation site` and pushes to `main`. That push triggers the Pages deployment. An unchanged artifact exits without a commit.
- Publishing runs are serialized per project with the `docs-publish-<project>` concurrency group.
- Documentation is untrusted relative to the site shell. It must not modify Hugo configuration, theme code, or deployment workflows.

## Theme development

- Keep Hugo theme code in `themes/lunaticthinker/`.
- Treat `assets/css/theme.css`, `assets/js/theme.js`, and `assets/workspace.svg` as byte-identical copies of the `lunaticthinker-studio` shared assets used by engine adapters.
- Keep Hugo-only styling for generated markup in `assets/css/hugo.css`; it must not alter shared editorial classes.
- Do not copy studio demo routes, demo project data, or the local contact composer into production. Navigation and project links remain config-driven from `hugo.toml`.
- Verify theme changes against real blog content with `mise run serve` and with the production build.
- Change shared assets in the studio source first, then copy them to Hugo and every affected VitePress or MkDocs adapter in one coordinated change.
- Keep templates and integration notes consistent with implemented behavior.
- Use a `theme:` commit prefix.

## Agent asset rules

- Match each skill directory name to the `name` in its `SKILL.md` frontmatter.
- Keep reusable skills independent of this site's absolute paths and project-specific behavior.
- Keep detailed reusable workflows in skills. Keep only startup routing, project configuration, security boundaries, and owner authority in `AGENTS.md`.
- Preserve security boundaries and required workflow gates when simplifying instructions.
- Do not duplicate workspace commands outside the workspace skills.
- Do not modify imported skills as a side effect of adapting repository policy. Skill changes require an explicit task and their own validation.

## Human-approved instruction improvement

When repeated feedback or an observed writing, review, or publication workflow shows that repository instructions no longer fit the blog, follow the `instruction-maintenance` skill. An agent may inspect the instruction graph and present an exact proposal without prior approval. It must not mutate instructions without explicit human approval of that proposal.

For this repository, an audit may examine article planning, drafting, revision, fact-checking, voice preservation, taxonomy, media handling, preview, and publication guidance, together with the routes, dependencies, handoffs, and skill metadata that support those activities. Treat code and tooling instructions as support for publishing rather than the default center of the workflow.

Do not turn one article's stylistic choice or one-off correction into a global rule without evidence that it is a reusable preference. Keep technical articles, personal essays, and poetry distinct. Instruction improvement must not silently rewrite published content, normalize historical voice, or weaken permalink and archive protections.

Approval is limited to the stated files and rule changes. Changed evidence, scope, dependencies, handoffs, or protected rules require a revised proposal and new approval. After approval, follow the normal issue, isolated-workspace, validation, commit, and pull-request gates.

This workflow covers instruction routes, deferred policy documents, dependency or handoff statements, and skill routing metadata. It does not authorize changes to detailed skill behavior or to article content; those require their normal workflows.

## Environment and secret contract

The published site is static. Local builds do not require runtime credentials.

- Pin build tools in `mise.toml` and the matching GitHub Actions workflow.
- Keep deployment and cross-repository credentials in GitHub Actions secrets.
- Never add tokens, private keys, credential-bearing URLs, or local machine paths to content, configuration, examples, generated output, or agent assets.
- Document any new environment input beside the code or workflow that consumes it.

## Branches, worktrees, and pull requests

All human and coding-agent changes use a short-lived branch in a dedicated Git worktree. Do not develop in the primary checkout or directly on `main`.

The repository workspace configuration is defined in `AGENTS.md`. The `isolated-workspace` skill owns workspace creation and reuse; do not duplicate its commands here. Change branches use `change/<change-id>`. The skill derives the sibling workspace root from the repository identity and places the worktree at `../dragoscirjan.github.io--workspaces/<change-id>`.

A pull request should:

- contain one focused change
- explain what changed and why
- link the relevant issue when required
- report the checks that ran
- state any validation that could not run
- avoid claiming unsupported or unverified behavior

Opening or updating the pull request is the default stopping point for coding agents. Leave the pull request unmerged unless the owner explicitly instructs otherwise.

## Deployment

Pushes to `main` deploy through `.github/workflows/hugo.yml`. The workflow builds Hugo with the pinned extended version, copies committed `projects/` artifacts into `public/projects/`, uploads one Pages artifact, and deploys it with `actions/deploy-pages`.

Do not add a second deployment path. Do not trigger a manual deployment without explicit owner instruction.

## Documentation map

- `README.md` — site purpose and basic development commands
- `AGENTS.md` — instruction routing, workspace configuration, security boundaries, and owner authority
- `CONTRIBUTING.md` — repository workflows and content rules
- `VALIDATION.md` — checks required before commit, push, publication, or pull request
- `.agents/skills/` — reusable workflow and writing skills
- Theme documentation — design rules and engine-specific integration notes beside theme sources
