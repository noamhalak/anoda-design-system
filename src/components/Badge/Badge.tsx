import type { HTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Badge.module.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** `purple` (default, "2026" / "הנחה"), `grey` ("התמחות"), `solid` ("חינם!"). */
  tone?: 'purple' | 'grey' | 'solid';
}

/** `.badge-tag` — 12/16 Bold label. */
export function Badge({ tone = 'purple', className, ...rest }: BadgeProps) {
  return <span className={cx(styles.badge, tone !== 'purple' && styles[tone], className)} {...rest} />;
}
