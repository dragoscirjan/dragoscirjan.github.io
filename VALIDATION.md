# Validation

Read this document before validating, committing, pushing, or publishing a repository change. Run the checks that match the changed files and behavior.

This repository does not define one automated test suite for every content and artifact type. Record each check that ran. If a required check cannot run, state why.

## Every change

- Run `git diff --check`.
- Review `git status` and the complete diff.
- Confirm that only files required by the issue or task changed.
- Check that examples and documentation describe behavior that exists.
- Do not claim that an unexecuted check passed.

## Production site changes

When a change can affect the published site:

- Run `mise run build`.
- Confirm that Hugo completes without errors.
- Confirm that `projects/` is copied to `public/projects/` by the documented build task.
- Use `mise run serve` for changes that require visual or navigation review.
- Check the affected pages at narrow and wide viewport sizes when layout or theme behavior changes.

Generated `public/` output is a validation artifact unless a task explicitly requires it to be committed.

## Blog and article changes

When a change adds or revises a post:

- Check the front matter, date-based filename, draft state, title, categories, and tags.
- Confirm that the resulting permalink is intentional.
- Check local links, external links, image paths, code fences, quotations, and attributed claims.
- Preview the complete article with `mise run serve`.
- For technical articles, confirm that commands and code examples are accurate and that facts are distinct from opinion.
- Apply the required writing skills from `AGENTS.md` without flattening the author's personal or poetic voice.
- Confirm that unrelated historical post paths and files under `static/uploads/` did not change.

## Generated documentation changes

When a change updates `projects/<project>/`:

- Confirm that the output was generated in the source project rather than edited by hand here.
- Confirm that only the intended project directory changed.
- Check the generated site's entry page and asset references.
- Run `mise run build` and confirm that the project appears under `public/projects/<project>/`.
- Record the source repository revision or publishing workflow run when available.

Do not execute generated documentation as trusted repository code.

## Theme changes

When a change modifies `themes/lunaticthinker/` or shared visual rules:

- Run `mise run build`.
- Review representative home, list, article, taxonomy, about, contact, and documentation-link pages with `mise run serve`.
- Check keyboard focus, contrast, overflow, long code blocks, and narrow-screen behavior.
- Confirm that implemented tokens and documentation agree.
- Confirm that planned VitePress or MkDocs adapters are not presented as implemented unless their sources exist.

## Workflow and configuration changes

When a change modifies `mise.toml`, `hugo.toml`, or `.github/workflows/`:

- Check YAML or TOML syntax with an available parser or the owning tool.
- Confirm that the Hugo version remains aligned between `mise.toml` and the Pages workflow.
- Review workflow permissions and keep them minimal.
- Confirm that untrusted documentation cannot modify or execute the site shell.
- Confirm that secrets are referenced through GitHub Actions secrets and are not printed or committed.

## Skill changes

When a change adds or modifies a skill:

- Verify that every `SKILL.md` has valid `name` and `description` frontmatter.
- Verify that each skill directory name matches its declared `name`.
- Verify that Pi and OpenCode discover the changed skill from `.agents/skills/`.
- Check relative references, supporting files, licenses, and command examples.
- Confirm that harness-specific behavior is explicit and does not masquerade as portable Agent Skills behavior.
- When a task requires an unchanged import, compare every copied file byte-for-byte with its source.

## Workspace-skill changes

When a change modifies `isolated-workspace` or `cleanup-workspaces`:

- Exercise the Git procedure in a disposable repository.
- Exercise the Jujutsu procedure in a disposable repository.
- Test the relevant safety stops, not only the successful path.
- Confirm that `AGENTS.md` still provides the required project workspace configuration.
- Confirm that workspace commands remain in the skills and are not duplicated in project policy files.
- Confirm that repository identity lookup remains memory or context first, falls back to Git only on a miss, and stores only safe derived identity data.

## Instruction-improvement changes

When instructions are adapted through the `instruction-maintenance` workflow:

- Confirm that recorded human approval follows the exact proposal.
- Confirm that changed files and rules stay within the approved scope.
- Confirm that changed evidence, scope, dependencies, handoffs, or protected rules caused a revised proposal and new approval.
- Distinguish required dependencies from later-phase handoffs and informational references.
- Check for missing targets, stale names or paths, conflicts, duplication, ambiguity, and dependency cycles.
- Confirm that skill routing metadata still states what each affected skill does and when it applies.
- Confirm that security boundaries, mandatory gates, validation requirements, and owner authority are unchanged unless separately proposed and explicitly approved.
- Confirm that detailed skill behavior and article content did not change through this workflow.
- For editorial guidance, confirm that repeated evidence supports a reusable rule rather than a one-off stylistic preference.
- Confirm that the adaptation preserves the distinctions among technical writing, personal essays, poetry, and historical content.

## Markdown changes

When a change modifies Markdown:

- Review heading order and section structure.
- Check local and external links.
- Review code fences, commands, paths, and examples manually.
- Use sentence-case headings and clear, concrete language.
- Preserve intentional voice in blog content rather than applying documentation style universally.

## Policy and instruction changes

When a change modifies `AGENTS.md`, `CONTRIBUTING.md`, `VALIDATION.md`, or another instruction file:

- Confirm that `AGENTS.md` contains only startup routing, project configuration, always-on security, and owner authority.
- Confirm that every deferred document or mandatory skill has a clear trigger in `AGENTS.md`.
- Confirm that read-only analysis does not require deferred contributor instructions unless it needs repository identity.
- Confirm that planning or performing a repository change requires `CONTRIBUTING.md`.
- Confirm that mutation requires `isolated-workspace`.
- Confirm that article-writing skills have narrow triggers and preserve intentional author voice.
- Confirm that validating, committing, pushing, or publishing requires `VALIDATION.md`.
- Confirm that workspace cleanup requires `cleanup-workspaces`.
- Confirm that instruction drift or repeated editorial workflow mismatch requires `instruction-maintenance` before an adaptation proposal.
- Confirm that instruction mutation requires explicit human approval of the exact proposal.
- Confirm that missing required instructions stop the gated phase.
- Check for conflicting or duplicated policy across instruction files.

## Publication report

Before pushing or opening a pull request, summarize:

- changed files
- checks that passed
- checks that failed
- checks that did not run and why
- remaining risks or follow-up work

Do not merge or trigger a manual deployment without explicit owner instruction.
