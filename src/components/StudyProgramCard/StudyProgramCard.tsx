import type { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import { Badge } from '../Badge';
import { Divider } from '../Divider';
import { Tag } from '../Tag';
import { Thumbnail } from '../Thumbnail';
import styles from './StudyProgramCard.module.css';

export interface StudyProgramCardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title: ReactNode;
  school: ReactNode;
  logo?: string;
  /** "קורס", "תואר", "לימודי תעודה" */
  kind: ReactNode;
  location: ReactNode;
  admission?: ReactNode;
  free?: boolean;
  discount?: boolean;
  specialization?: boolean;
  tags?: string[];
  href?: string;
}

/** Study program card (/study-programs) — logo, school + badges, title, type · location · admission, tags. */
export function StudyProgramCard({ title, school, logo, kind, location, admission, free, discount, specialization, tags = [], href, className, ...rest }: StudyProgramCardProps) {
  return (
    <article className={cx(styles.card, className)} {...rest}>
      <div className={styles.header}>
        <Thumbnail src={logo} size={72} />
        <div className={styles.titleCol}>
          <div className={styles.sourceRow}>
            <span className={styles.school}>{school}</span>
            <span className={styles.badges}>
              {specialization && <Badge tone="grey">התמחות</Badge>}
              {discount && <Badge>הנחה</Badge>}
              {free && <Badge tone="solid">חינם!</Badge>}
            </span>
          </div>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>
      <div className={styles.meta}>
        <span><Icon name="school" size={20} />{kind}</span>
        <span><Icon name="map-pin" size={20} />{location}</span>
        {admission && <span><Icon name="check-circle" size={20} />{admission}</span>}
      </div>
      {tags.length > 0 && (
        <>
          <Divider />
          <div className={styles.tags}>
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </>
      )}
      {href && <a className={styles.link} href={href} aria-label={typeof title === 'string' ? title : undefined} />}
    </article>
  );
}
