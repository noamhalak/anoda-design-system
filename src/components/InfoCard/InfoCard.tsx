import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import { Thumbnail } from '../Thumbnail';
import styles from './InfoCard.module.css';

export interface InfoCardProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'title'> {
  title: ReactNode;
  description?: ReactNode;
  logo?: string;
  meta?: ReactNode;
  metaIcon?: IconName;
}

/** `.info-card-collection-item` — tools, sources, salary resources. Logo tile at the start. */
export function InfoCard({ title, description, logo, meta, metaIcon = 'info', className, ...rest }: InfoCardProps) {
  return (
    <a className={cx(styles.card, className)} {...rest}>
      <span className={styles.content}>
        <Thumbnail src={logo} size={72} />
        <span className={styles.text}>
          <span className={styles.title}>{title}</span>
          {description && <span className={styles.description}>{description}</span>}
        </span>
      </span>
      {meta && (
        <span className={styles.meta}>
          <Icon name={metaIcon} size={20} />
          {meta}
        </span>
      )}
    </a>
  );
}
