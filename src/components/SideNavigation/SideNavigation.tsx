import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './SideNavigation.module.css';

export interface SideNavigationProps extends HTMLAttributes<HTMLElement> {
  /** SideNavLink elements. */
  children: ReactNode;
  /** Pinned to the bottom (e.g. "אודות"). */
  footer?: ReactNode;
  /** ≤991px the sidebar is a drawer — controls its visibility. */
  open?: boolean;
}

/** `.navigation-side-menu` — sidebar ≥992px, drawer below. */
export function SideNavigation({ children, footer, open, className, ...rest }: SideNavigationProps) {
  return (
    <nav aria-label="ניווט ראשי" className={cx(styles.nav, open && styles.open, className)} {...rest}>
      <div className={styles.list}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </nav>
  );
}
