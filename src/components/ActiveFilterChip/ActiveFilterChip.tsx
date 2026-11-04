import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import styles from './ActiveFilterChip.module.css';

export interface ActiveFilterChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode;
}

/** `.active-filter-tag` — applied filter under the filter bar; click to remove. */
export function ActiveFilterChip({ children, className, type = 'button', ...rest }: ActiveFilterChipProps) {
  return (
    <button type={type} className={cx(styles.chip, className)} aria-label={`הסרת סינון: ${typeof children === 'string' ? children : ''}`} {...rest}>
      <span>{children}</span>
      <Icon name="close" size={16} />
    </button>
  );
}
