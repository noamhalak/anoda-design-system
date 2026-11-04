import type { HTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './SourceTypeLabel.module.css';

/** `.source-type-label` — e.g. "פודקאסט" on content detail pages. */
export function SourceTypeLabel({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cx(styles.label, className)} {...rest} />;
}
