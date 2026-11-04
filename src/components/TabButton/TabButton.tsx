import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import styles from './TabButton.module.css';

export interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconName;
  current?: boolean;
  children: ReactNode;
}

/** `.tab-button` — underline tab on desktop, bordered chip ≤479px. */
export function TabButton({ icon, current, className, children, type = 'button', ...rest }: TabButtonProps) {
  return (
    <button type={type} role="tab" aria-selected={!!current} className={cx(styles.tab, current && styles.current, className)} {...rest}>
      <span>{children}</span>
      {icon && <Icon name={icon} size={20} />}
    </button>
  );
}
