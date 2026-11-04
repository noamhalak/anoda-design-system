import type { HTMLAttributes, ReactNode } from 'react';
import type { IconName } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import { MediaChip } from '../MediaChip';
import styles from './ContentCard.module.css';

export interface ContentCardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title: ReactNode;
  description?: ReactNode;
  /** Cover image URL. Omit to render the neutral placeholder; pass `null` to hide the cover. */
  image?: string | null;
  imageAlt?: string;
  sourceName: ReactNode;
  sourceImage?: string;
  /** e.g. "3 דק׳ • 18.10.26 • 🇮🇱" */
  meta?: ReactNode;
  /** Content-type chip on the start (right) corner. */
  typeIcon?: IconName;
  /** Whole-card link. */
  href?: string;
  /** External source link — shows the link chip on the end (left) corner. */
  externalHref?: string;
}

/** `.content-card` — listing card. Title and description clamp to 2 lines. */
export function ContentCard({
  title,
  description,
  image,
  imageAlt = '',
  sourceName,
  sourceImage,
  meta,
  typeIcon = 'article',
  href,
  externalHref,
  className,
  ...rest
}: ContentCardProps) {
  return (
    <article className={cx(styles.card, className)} {...rest}>
      {image !== null && (
        <div className={styles.cover}>
          {image && <img src={image} alt={imageAlt} loading="lazy" />}
          <div className={styles.chips}>
            <MediaChip icon={typeIcon} />
            {externalHref && <MediaChip icon="external-link" href={externalHref} label="פתיחה במקור" />}
          </div>
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.source}>
        {sourceImage ? <img className={styles.sourceImage} src={sourceImage} alt="" /> : <span className={styles.sourceImage} aria-hidden />}
        <div className={styles.sourceText}>
          <div className={styles.sourceName}>{sourceName}</div>
          {meta && <div className={styles.meta}>{meta}</div>}
        </div>
      </div>
      {href && <a className={styles.link} href={href} aria-label={typeof title === 'string' ? title : undefined} />}
    </article>
  );
}
