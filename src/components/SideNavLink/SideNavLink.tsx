import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import { Badge } from '../Badge';
import styles from './SideNavLink.module.css';

export interface SideNavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconName;
  children: ReactNode;
  current?: boolean;
  disabled?: boolean;
  badge?: ReactNode;
  /** Shows a chevron for expandable groups (e.g. "תכנים"). */
  expandable?: boolean;
  expanded?: boolean;
}

/** `.navigation-side-menu-link` — icon at the start, badge/chevron at the end. */
export function SideNavLink({ icon, children, current, disabled, badge, expandable, expanded, className, href, ...rest }: SideNavLinkProps) {
  return (
    <a
      href={disabled ? undefined : href}
      aria-current={current ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      aria-expanded={expandable ? !!expanded : undefined}
      className={cx(styles.link, current && styles.current, disabled && styles.disabled, expanded && styles.expanded, className)}
      {...rest}
    >
      <Icon name={icon} size={24} />
      <span className={styles.label}>{children}</span>
      {badge && <Badge>{badge}</Badge>}
      {expandable && <Icon name="chevron-down" size={20} className={styles.chevron} />}
    </a>
  );
}
