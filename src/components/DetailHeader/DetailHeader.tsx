import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { Thumbnail } from '../Thumbnail';
import styles from './DetailHeader.module.css';

export interface DetailHeaderProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  breadcrumb?: ReactNode;
  title: ReactNode;
  source?: ReactNode;
  meta?: ReactNode;
  logo?: string;
  /** Hide the source thumbnail. */
  noThumbnail?: boolean;
}

/** `.content-page-header-container` — header of every detail page. */
export function DetailHeader({ breadcrumb, title, source, meta, logo, noThumbnail, className, ...rest }: DetailHeaderProps) {
  return (
    <header className={cx(styles.header, className)} {...rest}>
      {breadcrumb && <nav className={styles.breadcrumb} aria-label="breadcrumb">{breadcrumb}</nav>}
      <div className={styles.row}>
        {!noThumbnail && <Thumbnail src={logo} size={60} />}
        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          {(source || meta) && (
            <div className={styles.meta}>
              {source && <strong>{source}</strong>}
              {meta && <span>{meta}</span>}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export interface ActionBannerProps extends HTMLAttributes<HTMLDivElement> {
  /** Main link — e.g. "לקריאת הפוסט". */
  children: ReactNode;
  /** Gradient icon button at the end, e.g. opening the source. */
  action?: ReactNode;
}

/** `.content-page-header-actions-container` — purple-70 strip with the page's main action. */
export function ActionBanner({ children, action, className, ...rest }: ActionBannerProps) {
  return (
    <div className={cx(styles.action, className)} {...rest}>
      <div className={styles.actionLabel}>{children}</div>
      {action}
    </div>
  );
}
