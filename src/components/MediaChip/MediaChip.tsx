import type { HTMLAttributes } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import styles from './MediaChip.module.css';

export interface MediaChipProps extends HTMLAttributes<HTMLElement> {
  icon: IconName;
  /** Renders a link (e.g. the external "open source" chip). */
  href?: string;
  label?: string;
}

/** 32px glass chip floating over card images (content type / direct link). */
export function MediaChip({ icon, href, label, className, ...rest }: MediaChipProps) {
  const content = <Icon name={icon} size={20} />;
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={cx(styles.chip, className)} {...rest}>
      {content}
    </a>
  ) : (
    <span aria-label={label} role={label ? 'img' : undefined} className={cx(styles.chip, className)} {...rest}>
      {content}
    </span>
  );
}
