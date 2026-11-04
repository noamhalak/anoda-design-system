# Anoda Design System

React + TypeScript components and design tokens for **anoda.co.il** — Hebrew-first, RTL, Google Sans.
The code mirrors the Figma library: [Design-system](https://www.figma.com/design/KJtQSt4Qz8Ow5e1u50gRNS/Design-system).

## What's inside
| | |
|---|---|
| **Tokens** | `src/styles/tokens.css` — colours (Webflow names + semantic `--anoda-*`), spacing `--size--*`, radius, shadows, gradients. JS refs in `src/tokens`. |
| **Typography** | `src/styles/typography.css` — `.anoda-display`, `.anoda-h1`…`.anoda-h5`, `.anoda-p1`…`.anoda-p3(-bold)`, `.anoda-caption-bold` (mobile sizes ≤479px). |
| **Brand** | `Logo` (default / white), `Favicon`, `public/favicon.svg` |
| **Icons** | `Icon` — 24 stroke icons (`home`, `search`, `arrow-left`, `article`, `calendar`, …) |
| **Actions** | `Button` (9 variants), `IconButton`, `SearchPillButton` |
| **Labels** | `Tag` (sm / lg), `Badge`, `SourceTypeLabel`, `MediaChip`, `Divider` |
| **Navigation** | `TopNavigation`, `SideNavigation` + `SideNavLink`, `TabButton`, `SearchField` |
| **Content** | `ContentCard`, `ContentListItem`, `SectionCard` + `SectionHeader`, `PageHeaderBanner` |
| **Forms** | `InputField`, `TextAreaField`, `DropdownField`, `Checkbox` |

## Use it in another project
```bash
npm install github:noamhalak/anoda-design-system
```
```tsx
import 'anoda-design-system/styles.css';
import { Button, ContentCard, TopNavigation } from 'anoda-design-system';

export function App() {
  return (
    <div dir="rtl">
      <TopNavigation />
      <Button variant="primary-gradient" icon="suggest">הצעת תוכן</Button>
    </div>
  );
}
```
Set `dir="rtl"` and `lang="he"` on `<html>`. For a page reset (background, font, RTL), also import `anoda-design-system/base.css` and add `data-anoda` to `<html>`.

### Using it with Claude Code
This repo ships a `CLAUDE.md`, so Claude follows the system automatically when working **in this repo**.
In a project that *uses* the package, add this to that project's `CLAUDE.md`:
```md
## Design system
Use `anoda-design-system` for all UI. Import `anoda-design-system/styles.css` once.
Never hardcode colours, spacing or radii — use the `--anoda-*` / `--size--*` CSS variables or the
`tokens` export. Reuse its components (Button, Tag, ContentCard, TopNavigation, SideNavigation, …)
before writing new ones. Layouts are RTL (Hebrew-first). Font: Google Sans 400/700.
Reference: node_modules/anoda-design-system/CLAUDE.md and README.md.
```

## Develop
```bash
npm install
npm run dev        # playground: http://localhost:5173
npm run typecheck
npm run build      # dist/ (ES module + CSS + types)
```

## Known gaps
- Icons are stand-ins for the site's custom "Anoda Icons" font.
- Gradients use a few fixed colour stops (see `--anoda-gradient-*`).
- Only the light theme exists on the live site.
