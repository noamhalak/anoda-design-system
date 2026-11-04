import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { Badge } from '../Badge';
import styles from './FeatureBanner.module.css';

export interface FeatureBannerProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title: ReactNode;
  badge?: ReactNode;
  children?: ReactNode;
  /** CTA — usually a <Button>. */
  action?: ReactNode;
  image?: string;
}

/** `.banner-3-columns` — content across two columns, image in the end column (mentoring, salary intro). */
export function FeatureBanner({ title, badge, children, action, image, className, ...rest }: FeatureBannerProps) {
  return (
    <section className={cx(styles.banner, !image && styles.noImage, className)} {...rest}>
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          {badge && <Badge>{badge}</Badge>}
        </div>
        {children && <div className={styles.text}>{children}</div>}
        {action && <div>{action}</div>}
      </div>
      {image && <img className={styles.image} src={image} alt="" loading="lazy" />}
    </section>
  );
}
