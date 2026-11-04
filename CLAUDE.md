# Anoda Design System — instructions for Claude

This repo is the code version of the Anoda design system (anoda.co.il). It mirrors the Figma library
"Design-system": https://www.figma.com/design/KJtQSt4Qz8Ow5e1u50gRNS/Design-system

## Rules
- **Hebrew-first, RTL.** Pages are `dir="rtl"`. Use logical CSS (`padding-inline-start`, `inset-inline-end`, `text-align: start`). In JSX, the first child of a row renders on the right — put icons before labels for "icon at the start".
- **Never hardcode colours, spacing, radii or shadows.** Use the CSS variables in `src/styles/tokens.css` (or the JS refs in `src/tokens/index.ts`). Primitive names (`--purple--30-primary`, `--neutrals--70`, `--size--16`) match the live Webflow site; prefer the semantic `--anoda-*` variables in components.
- **Font:** Google Sans 400/700 only (`--anoda-font-family`). Text styles live in `src/styles/typography.css` (`.anoda-h2`, `.anoda-p3-bold`, …) and match the Figma text styles.
- **Reuse components** from `src/components` before writing new UI. Button has 9 variants (`primary`, `primary-gradient`, `secondary`, `secondary-grey`, `light-purple`, `outline`, `ghost-purple`, `ghost-neutral`, `on-purple`); use `IconButton` for icon-only actions (it requires `label`).
- **Breakpoints** (same as the site): ≤991 tablet (sidebar → drawer, search → toggle), ≤767, ≤479 phone. Components handle these with media queries — there are no `breakpoint` props.
- **Accessibility:** focus ring = 3px `--anoda-border-focus-ring`; icon-only controls need an accessible name; decorative icons are `aria-hidden` (the `Icon` component does this when no `label` is passed).
- **Logo / favicon:** use `<Logo />` (`tone="white"` on purple) and `<Favicon />`. Never redraw them.
- **Icons:** `src/icons/paths.ts` holds the 24px stroke set from Figma. They are stand-ins for the site's "Anoda Icons" font; add new icons there with the same 24×24, 2px-stroke style.
- Each component = one folder: `Component.tsx` + `Component.module.css` + `index.ts`, exported from `src/index.ts`, and shown in `playground/main.tsx`.

## When you change or add a component
1. Check the matching component in the Figma file (pages: Buttons, Tags & Labels, Navigation, Cards, Forms) and keep names, variants and values in sync.
2. Add it to the playground and check it at 1440px and 375px.
3. Run `npm run typecheck && npm run build` before committing.

## Commands
- `npm install` — install
- `npm run dev` — playground at http://localhost:5173
- `npm run typecheck` / `npm run build` — must pass before a commit
