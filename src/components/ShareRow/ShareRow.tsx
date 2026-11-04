import type { HTMLAttributes } from 'react';
import type { IconName } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import { IconButton } from '../Button';
import styles from './ShareRow.module.css';

export interface ShareRowProps extends HTMLAttributes<HTMLDivElement> {
  /** URL to share; defaults to the current page. */
  url?: string;
  title?: string;
}

const targets: { icon: IconName; label: string; href: (u: string) => string }[] = [
  { icon: 'whatsapp', label: 'וואטסאפ', href: (u) => `https://wa.me/?text=${u}` },
  { icon: 'linkedin', label: 'לינקדאין', href: (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
  { icon: 'facebook', label: 'פייסבוק', href: (u) => `https://www.facebook.com/sharer/sharer.php?u=${u}` },
  { icon: 'x-logo', label: 'X', href: (u) => `https://x.com/intent/post?url=${u}` },
];

/** `.content-modal-share-buttons` — share links in the detail-page sidebar. */
export function ShareRow({ url, title = 'שיתוף', className, ...rest }: ShareRowProps) {
  const share = (fn: (u: string) => string) => {
    const u = encodeURIComponent(url ?? window.location.href);
    window.open(fn(u), '_blank', 'noopener');
  };
  return (
    <div className={cx(styles.row, className)} {...rest}>
      <span className={styles.title}>{title}</span>
      <div className={styles.buttons}>
        {targets.map((t) => (
          <IconButton key={t.icon} variant="ghost-neutral" icon={t.icon} label={t.label} onClick={() => share(t.href)} />
        ))}
      </div>
    </div>
  );
}
