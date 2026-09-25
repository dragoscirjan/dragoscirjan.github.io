# LunaticThinker Hugo theme (editorial)

The visual source of this theme is the shared LunaticThinker editorial design
(the `lunaticthinker-studio` package). The following files are **byte-identical**
copies of the studio's shared assets and must stay in sync with every other
engine adapter (VitePress, MkDocs):

- `assets/css/theme.css` — the complete editorial stylesheet
- `assets/js/theme.js` — menu, filters, code copy and shared behavior
- `assets/workspace.svg` — the generated desk scene illustration

`assets/css/hugo.css` is the Hugo-specific layer: styling for Hugo-generated
markup (pagination, taxonomy links, table of contents, legacy contact form,
highlighted code blocks) that the shared stylesheet does not cover.

`assets/brand-mark.svg` remains the site favicon.

## Layouts

- `baseof.html` — editorial shell (skip link, scene art, per-page accent)
- `_default/home.html` — full-height diagonal portal homepage
- `_default/list.html` — post listing with category filters and pagination
- `_default/single.html` — article layout with taxonomy links and ToC
- `_default/term.html` / `terms.html` — taxonomy term and index listings
- `docs/list.html` — project documentation landing (config-driven links)
- `404.html`, `partials/*`, `shortcodes/callout.html` (`.notice`)

## Compatibility rules

- Content, front matter, taxonomies and historic URLs are untouched by the theme.
- Navigation and project links come from `hugo.toml` (`site.Menus.main`,
  `site.Params.docs`); never hard-code studio demo routes (`/blog/`,
  `/project-*`).
- The layout stays centered: page-specific shell widening from the shared
  stylesheet (`.home`/`.project-page`/`.docs`, up to 1800px) is capped at the
  base 1300px column by `hugo.css`.
- `single.html` renders article meta, prev/next and the ToC only for section
  pages (posts); root pages (About, Contact) render a clean article without
  the "On this page" aside.
- The demo contact composer from the studio is not used; the site keeps its
  GitHub-issue form in `content/contact.md`.

## Verify

```sh
mise run serve   # local preview against real blog content
mise run build   # production build + docs copy
```