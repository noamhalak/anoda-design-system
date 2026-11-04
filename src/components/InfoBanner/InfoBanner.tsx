import type { HTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './InfoBanner.module.css';

/** `.secondary-banner.in-a-content-card` — tinted note inside a section card. */
export function InfoBanner({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx(styles.banner, className)} {...rest} />;
}
