import type { HTMLAttributes, ReactNode } from 'react';
import { Logo } from '../../brand/Logo';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import { Divider } from '../Divider';
import { Tag } from '../Tag';
import styles from './Footer.module.css';

export interface FooterLinkItem {
  label: ReactNode;
  href: string;
  icon?: IconName;
}

export interface FooterLinkProps {
  item: FooterLinkItem;
}

/** `.footer-link-container` — link with a 20px icon at the start. */
export function FooterLink({ item }: FooterLinkProps) {
  return (
    <a className={styles.link} href={item.href}>
      {item.icon && <Icon name={item.icon} size={20} />}
      <span>{item.label}</span>
    </a>
  );
}

export const footerPages: FooterLinkItem[] = [
  { label: 'בית', href: '/', icon: 'home' },
  { label: 'תיקי עבודות', href: '/portfolios', icon: 'briefcase' },
  { label: 'קורות חיים', href: '/cv-resume', icon: 'cv' },
  { label: 'אירועים', href: '/events', icon: 'calendar' },
  { label: 'מסלולי לימוד', href: '/study-programs', icon: 'school' },
  { label: 'כלים', href: '/tools', icon: 'tools' },
  { label: 'ספרים', href: '/books', icon: 'book' },
  { label: 'מקורות', href: '/sources', icon: 'users' },
  { label: 'נתוני שכר', href: '/salary', icon: 'info' },
];

export const footerContent: FooterLinkItem[] = [
  { label: 'כל התכנים', href: '/content/all-content', icon: 'article' },
  { label: 'פוסטים ומאמרים', href: '/content/posts-and-articles', icon: 'article' },
  { label: 'פודקאסטים', href: '/content/podcasts', icon: 'mic' },
  { label: 'סרטונים', href: '/content/videos', icon: 'play' },
];

export const footerContact: FooterLinkItem[] = [
  { label: 'אודות', href: '/about', icon: 'info' },
  { label: 'לינקדאין', href: 'https://www.linkedin.com/company/anoda', icon: 'linkedin' },
  { label: 'קבוצת וואטסאפ', href: '#', icon: 'whatsapp' },
  { label: 'anoda.ux@gmail.com', href: 'mailto:anoda.ux@gmail.com', icon: 'mail' },
];

export interface FooterProps extends Omit<HTMLAttributes<HTMLElement>, 'content'> {
  tagline?: ReactNode;
  pages?: FooterLinkItem[];
  content?: FooterLinkItem[];
  /** Category tags — `{ label, href }`. */
  categories?: { label: string; href: string }[];
  contact?: FooterLinkItem[];
}

/** `.footer-main-card-container` — on every page. */
export function Footer({
  tagline = 'כל הידע על חווית משתמש, במקום אחד',
  pages = footerPages,
  content = footerContent,
  categories = [],
  contact = footerContact,
  className,
  ...rest
}: FooterProps) {
  return (
    <footer className={cx(styles.footer, className)} {...rest}>
      <div className={styles.header}>
        <h2 className={styles.tagline}>{tagline}</h2>
        <Logo height={32} aria-hidden />
      </div>
      <div className={styles.columns}>
        <nav className={styles.column} aria-label="עמודים">
          <h3 className={styles.title}>עמודים</h3>
          {pages.map((i) => <FooterLink key={`${i.href}-${String(i.label)}`} item={i} />)}
        </nav>
        <nav className={styles.column} aria-label="תכנים">
          <h3 className={styles.title}>תכנים</h3>
          {content.map((i) => <FooterLink key={`${i.href}-${String(i.label)}`} item={i} />)}
        </nav>
        {categories.length > 0 && (
          <div className={cx(styles.column, styles.categories)}>
            <h3 className={styles.title}>קטגוריות</h3>
            <div className={styles.tags}>
              {categories.map((c) => <Tag key={`${c.label}-${c.href}`} href={c.href} icon="tag">{c.label}</Tag>)}
            </div>
          </div>
        )}
      </div>
      <Divider className={styles.divider} />
      <div className={styles.bottom}>
        <div className={styles.contact}>{contact.map((i) => <FooterLink key={`${i.href}-${String(i.label)}`} item={i} />)}</div>
        <span className={styles.credit}>© anoda {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
