import type { HTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import { IconButton } from '../Button';
import styles from './SectionHeader.module.css';

export interface SectionHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode;
  subtitle?: ReactNode;
  icon: IconName;
  /** "See all" arrow at the end (left). */
  onAction?: () => void;
  actionLabel?: string;
  /** Heading level for the title. */
  as?: 'h1' | 'h2' | 'h3';
}

/** `.content-card-header` — icon tile, title + subtitle, optional arrow. */
export function SectionHeader({ title, subtitle, icon, onAction, actionLabel = 'לכל התכנים', as: Heading = 'h2', className, ...rest }: SectionHeaderProps) {
  return (
    <div className={cx(styles.header, className)} {...rest}>
      <span className={styles.tile}>
        <Icon name={icon} size={32} />
      </span>
      <div className={styles.text}>
        <Heading className={styles.title}>{title}</Heading>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {onAction && <IconButton icon="arrow-left" label={actionLabel} variant="ghost-purple" onClick={onAction} />}
    </div>
  );
}

export interface SectionCardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

/** `.content-card-container` — white section card (40px padding, 24 on phones). */
export function SectionCard({ className, ...rest }: SectionCardProps) {
  return <section className={cx(styles.section, className)} {...rest} />;
}
