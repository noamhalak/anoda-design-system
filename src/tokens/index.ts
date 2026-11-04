// JS references to the CSS variables in styles/tokens.css — use these instead of hex values.
const v = (name: string) => `var(--${name})`;

export const colorPrimitive = {
  purple30: v('purple--30-primary'),
  purple40: v('purple--40'),
  purple50: v('purple--50'),
  purple60: v('purple--60'),
  purple70: v('purple--70'),
  neutral10: v('neutrals--10-black'),
  neutral20: v('neutrals--20'),
  neutral30: v('neutrals--30'),
  neutral40: v('neutrals--40'),
  neutral50: v('neutrals--50'),
  neutral60: v('neutrals--60'),
  neutral70: v('neutrals--70'),
  white: v('neutrals--100-white'),
} as const;

export const colorBg = {
  page: v('anoda-bg-page'),
  surface: v('anoda-bg-surface'),
  subtle: v('anoda-bg-subtle'),
  neutralHover: v('anoda-bg-neutral-hover'),
  brand: v('anoda-bg-brand'),
  brandSubtle: v('anoda-bg-brand-subtle'),
  brandMuted: v('anoda-bg-brand-muted'),
  brandHover: v('anoda-bg-brand-hover'),
  onBrand: v('anoda-bg-on-brand'),
  onBrandHover: v('anoda-bg-on-brand-hover'),
  glass: v('anoda-bg-glass'),
  overlay: v('anoda-bg-overlay'),
  success: v('anoda-bg-success'),
} as const;

export const colorText = {
  primary: v('anoda-text-primary'),
  secondary: v('anoda-text-secondary'),
  tertiary: v('anoda-text-tertiary'),
  disabled: v('anoda-text-disabled'),
  placeholder: v('anoda-text-placeholder'),
  brand: v('anoda-text-brand'),
  onBrand: v('anoda-text-on-brand'),
  success: v('anoda-text-success'),
} as const;

export const colorBorder = {
  subtle: v('anoda-border-subtle'),
  default: v('anoda-border-default'),
  strong: v('anoda-border-strong'),
  brand: v('anoda-border-brand'),
  brandSoft: v('anoda-border-brand-soft'),
  focusRing: v('anoda-border-focus-ring'),
  onBrand: v('anoda-border-on-brand'),
} as const;

export const space = {
  4: v('size--4'),
  6: v('size--6'),
  8: v('size--8'),
  12: v('size--12'),
  16: v('size--16'),
  24: v('size--24'),
  28: v('size--28'),
  32: v('size--32'),
  40: v('size--40'),
  48: v('size--48'),
  56: v('size--56'),
} as const;

export const radius = {
  4: v('anoda-radius-4'),
  8: v('anoda-radius-8'),
  12: v('anoda-radius-12'),
  16: v('anoda-radius-16'),
  48: v('anoda-radius-48'),
  full: v('anoda-radius-full'),
} as const;

export const shadow = {
  cardHover: v('anoda-shadow-card-hover'),
  buttonGlow: v('anoda-shadow-button-glow'),
  floatingChip: v('anoda-shadow-floating-chip'),
} as const;

export const gradient = {
  brand: v('anoda-gradient-brand'),
  tile: v('anoda-gradient-tile'),
  tileOnBrand: v('anoda-gradient-tile-on-brand'),
} as const;

export const fontFamily = v('anoda-font-family');

export const breakpoint = { tablet: 991, mobileLandscape: 767, mobile: 479, wide: 1440 } as const;

export const tokens = { colorPrimitive, colorBg, colorText, colorBorder, space, radius, shadow, gradient, fontFamily, breakpoint } as const;
