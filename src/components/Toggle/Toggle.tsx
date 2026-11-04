import type { InputHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './Toggle.module.css';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  children?: ReactNode;
}

/** `.filter-checkbox-toggle` — 40×24 switch (study-program filters: "הנחות", "התמחות"). */
export function Toggle({ children, className, ...rest }: ToggleProps) {
  return (
    <label className={cx(styles.toggle, className)}>
      <span>{children}</span>
      <input type="checkbox" role="switch" className={styles.input} {...rest} />
      <span className={styles.track} aria-hidden>
        <span className={styles.dot} />
      </span>
    </label>
  );
}
