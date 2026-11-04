import type { HTMLAttributes, ReactNode } from 'react';
import { Logo } from '../../brand/Logo';
import { cx } from '../../utils/cx';
import { Button, IconButton } from '../Button';
import { SearchField } from '../SearchField';
import styles from './TopNavigation.module.css';

export interface TopNavigationProps extends HTMLAttributes<HTMLElement> {
  logoHref?: string;
  /** Centre slot. Defaults to the categories button + SearchField. */
  search?: ReactNode;
  /** End (left) slot. Defaults to the "הצעת תוכן" button. */
  actions?: ReactNode;
  onMenuClick?: () => void;
  onSearchClick?: () => void;
  /** position: fixed (as on the live site). */
  fixed?: boolean;
}

/** `.navigation-top` — logo at the start, search centred, CTA at the end; collapses to toggles ≤991px. */
export function TopNavigation({ logoHref = '/', search, actions, onMenuClick, onSearchClick, fixed, className, ...rest }: TopNavigationProps) {
  return (
    <header className={cx(styles.bar, fixed && styles.fixed, className)} {...rest}>
      <IconButton className={styles.mobileOnly} variant="ghost-neutral" icon="menu" label="תפריט" onClick={onMenuClick} />
      <a href={logoHref} className={styles.logo} aria-label="anoda — דף הבית">
        <Logo height={32} aria-hidden />
      </a>
      <div className={styles.search}>
        {search ?? (
          <>
            <SearchField />
            <Button variant="ghost-neutral" icon="chevron-down">
              קטגוריות
            </Button>
          </>
        )}
      </div>
      <div className={styles.actions}>
        {actions ?? (
          <Button variant="secondary" icon="suggest">
            הצעת תוכן
          </Button>
        )}
      </div>
      <IconButton className={styles.mobileOnly} variant="ghost-neutral" icon="search" label="חיפוש" onClick={onSearchClick} />
    </header>
  );
}
