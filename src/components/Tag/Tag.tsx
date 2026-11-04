import type { HTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import styles from './Tag.module.css';

export interface TagProps extends HTMLAttributes<HTMLElement> {
  /** `sm` 4/8 padding (content pages, footer) · `lg` 8/12 (home categories). */
  size?: 'sm' | 'lg';
  /** A built-in icon name, or any node (the live site uses a 20px category PNG). */
  icon?: IconName | ReactNode;
  href?: string;
  children: ReactNode;
}

/** `.tag` — category link/chip. Icon renders on the start (right) side. */
export function Tag({ size = 'sm', icon, href, className, children, ...rest }: TagProps) {
  const iconNode = typeof icon === 'string' ? <Icon name={icon as IconName} size={20} /> : icon;
  const content = (
    <>
      {iconNode && <span className={styles.icon}>{iconNode}</span>}
      <span className={styles.text}>{children}</span>
    </>
  );
  const classes = cx(styles.tag, size === 'lg' && styles.lg, className);
  return href ? (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  ) : (
    <span className={classes} {...rest}>
      {content}
    </span>
  );
}
