import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { Tag } from '../Tag';
import styles from './BookCard.module.css';

export interface BookCardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title: ReactNode;
  description?: ReactNode;
  cover?: string;
  author: ReactNode;
  authorImage?: string;
  /** e.g. "2024 • מודפס • דיגיטלי • 🇮🇱" */
  meta?: ReactNode;
  tags?: string[];
  href?: string;
}

/** `.content-card.books` — 170×240 cover at the start; cover on top ≤479px. */
export function BookCard({ title, description, cover, author, authorImage, meta, tags = [], href, className, ...rest }: BookCardProps) {
  return (
    <article className={cx(styles.card, className)} {...rest}>
      <div className={styles.cover}>{cover && <img src={cover} alt="" loading="lazy" />}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.author}>
          {authorImage ? <img src={authorImage} alt="" /> : <span className={styles.authorImage} aria-hidden />}
          <span>
            <span className={styles.authorName}>{author}</span>
            {meta && <span className={styles.meta}>{meta}</span>}
          </span>
        </div>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </div>
      {href && <a className={styles.link} href={href} aria-label={typeof title === 'string' ? title : undefined} />}
    </article>
  );
}
