import type { HTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import styles from './Thumbnail.module.css';

export interface ThumbnailProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  /** 72 in cards, 60 in detail headers, 40 in compact rows. */
  size?: 72 | 60 | 40;
}

/** `.general-collection-item-thumbnail-container` — logo tile for sources, tools, programs. */
export function Thumbnail({ src, alt = '', size = 72, className, ...rest }: ThumbnailProps) {
  return (
    <span className={cx(styles.tile, styles[`s${size}`], className)} {...rest}>
      {src && <img src={src} alt={alt} loading="lazy" />}
    </span>
  );
}
