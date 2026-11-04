import type { HTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Badge.module.css';

/** `.badge-tag` — e.g. "2026" next to a side-nav item. */
export function Badge({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cx(styles.badge, className)} {...rest} />;
}
