import type { HTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './TrendBadge.module.css';

export interface TrendBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** `up` green, `down` red, `new` neutral. */
  trend: 'up' | 'down' | 'new';
}

/** `.salary-change` — year-over-year change, e.g. "3.4% ↑". */
export function TrendBadge({ trend, className, ...rest }: TrendBadgeProps) {
  return <span className={cx(styles.badge, styles[trend], className)} {...rest} />;
}
