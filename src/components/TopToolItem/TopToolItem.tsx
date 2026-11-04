import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { Thumbnail } from '../Thumbnail';
import styles from './TopToolItem.module.css';

export interface TopToolItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: ReactNode;
  logo?: string;
}

/** `.top-tools-collection-item` — logo tile + name in the "כלים פופולריים" strip. */
export function TopToolItem({ name, logo, className, ...rest }: TopToolItemProps) {
  return (
    <a className={cx(styles.item, className)} {...rest}>
      <Thumbnail src={logo} size={72} />
      <span className={styles.name}>{name}</span>
    </a>
  );
}

/** White strip that holds TopToolItems. */
export function TopToolsStrip({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx(styles.strip, className)} {...rest} />;
}
