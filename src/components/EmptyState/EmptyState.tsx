import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './EmptyState.module.css';

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  emoji?: ReactNode;
  children?: ReactNode;
}

/** `.empty-state` — shown when filters return nothing. */
export function EmptyState({ emoji = '😮', children = 'לא נמצא תוכן רלוונטי', className, ...rest }: EmptyStateProps) {
  return (
    <div role="status" className={cx(styles.empty, className)} {...rest}>
      <span className={styles.emoji} aria-hidden>{emoji}</span>
      <span>{children}</span>
    </div>
  );
}
