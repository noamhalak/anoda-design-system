import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import styles from './ContentListItem.module.css';

export interface ContentListItemProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'title'> {
  title: ReactNode;
  meta?: ReactNode;
  thumbnail?: string;
}

/** Compact content row (`.content-card.highlight-content-secondary`) — thumbnail at the start. */
export function ContentListItem({ title, meta, thumbnail, className, ...rest }: ContentListItemProps) {
  return (
    <a className={cx(styles.item, className)} {...rest}>
      {thumbnail ? <img className={styles.thumb} src={thumbnail} alt="" loading="lazy" /> : <span className={styles.thumb} aria-hidden />}
      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        {meta && <span className={styles.meta}>{meta}</span>}
      </span>
    </a>
  );
}
