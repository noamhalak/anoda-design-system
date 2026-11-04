import type { HTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Divider.module.css';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  /** White 16% for purple surfaces (.home-hero-divider). */
  onBrand?: boolean;
}

export function Divider({ orientation = 'horizontal', onBrand, className, ...rest }: DividerProps) {
  return <hr aria-orientation={orientation} className={cx(styles.divider, styles[orientation], onBrand && styles.onBrand, className)} {...rest} />;
}
