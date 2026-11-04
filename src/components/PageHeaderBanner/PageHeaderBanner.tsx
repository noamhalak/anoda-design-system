import type { HTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import styles from './PageHeaderBanner.module.css';

export interface PageHeaderBannerProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title: ReactNode;
  description?: ReactNode;
  icon: IconName;
  /** Optional CTA at the end, e.g. "הגשת תיק עבודות" on /portfolios. */
  action?: ReactNode;
}

/** `.content-card-container.page-header` — purple banner at the top of listing pages. */
export function PageHeaderBanner({ title, description, icon, action, className, ...rest }: PageHeaderBannerProps) {
  return (
    <header className={cx(styles.banner, className)} {...rest}>
      <span className={styles.tile}>
        <Icon name={icon} size={24} />
      </span>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </header>
  );
}
