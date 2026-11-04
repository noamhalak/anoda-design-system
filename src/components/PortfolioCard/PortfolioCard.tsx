import type { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import { MediaChip } from '../MediaChip';
import { Tag } from '../Tag';
import styles from './PortfolioCard.module.css';

export interface PortfolioCardProps extends HTMLAttributes<HTMLElement> {
  name: ReactNode;
  experience: ReactNode;
  /** `portfolio` 16:9 cover · `cv` 7:9.9 CV preview. */
  type?: 'portfolio' | 'cv';
  image?: string;
  avatar?: string;
  /** "נבנה ב-" tool, portfolio only. */
  builtWith?: ReactNode;
  builtWithIcon?: string;
  tags?: string[];
  href?: string;
  externalHref?: string;
}

/** `.content-card.portfolio` / `.cv-resume` — person card on /portfolios and /cv-resume. */
export function PortfolioCard({ name, experience, type = 'portfolio', image, avatar, builtWith, builtWithIcon, tags = [], href, externalHref, className, ...rest }: PortfolioCardProps) {
  return (
    <article className={cx(styles.card, className)} {...rest}>
      <div className={cx(styles.cover, type === 'cv' && styles.cv)}>
        {image && <img src={image} alt="" loading="lazy" />}
        {externalHref && <MediaChip className={styles.chip} icon="external-link" href={externalHref} label="פתיחה" />}
      </div>
      <div className={styles.person}>
        {avatar ? <img className={styles.avatar} src={avatar} alt="" /> : <span className={styles.avatar} aria-hidden />}
        <div className={styles.text}>
          <div className={styles.name}>{name}</div>
          <div className={styles.meta}>
            <Icon name="user" size={20} />
            <span>{experience}</span>
            {type === 'portfolio' && builtWith && (
              <>
                <span>• נבנה ב-</span>
                {builtWithIcon && <img className={styles.tool} src={builtWithIcon} alt="" />}
                <span>{builtWith}</span>
              </>
            )}
          </div>
        </div>
      </div>
      {tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
      {href && <a className={styles.link} href={href} aria-label={typeof name === 'string' ? name : undefined} />}
    </article>
  );
}
