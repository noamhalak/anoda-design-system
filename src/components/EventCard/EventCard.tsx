import type { HTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import styles from './EventCard.module.css';

export interface EventDataItemProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  icon: IconName;
  children: ReactNode;
}

/** `.event-card-data-container` — label + icon over a bold value (date, time, location, price). */
export function EventDataItem({ label, icon, children, className, ...rest }: EventDataItemProps) {
  return (
    <div className={cx(styles.data, className)} {...rest}>
      <span className={styles.dataLabel}>
        <Icon name={icon} size={20} />
        {label}
      </span>
      <span className={styles.dataValue}>{children}</span>
    </div>
  );
}

export interface EventCardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title: ReactNode;
  source: ReactNode;
  sourceLogo?: string;
  image?: string;
  date: ReactNode;
  time: ReactNode;
  location: ReactNode;
  price: ReactNode;
  /** `.promoted-event` — purple glow, larger image, "בקרוב" badge. */
  promoted?: boolean;
  href?: string;
}

/** `.event-card` — event row: image and title at the start, date / time / location / price at the end. Stacks ≤767px. */
export function EventCard({ title, source, sourceLogo, image, date, time, location, price, promoted, href, className, ...rest }: EventCardProps) {
  return (
    <article className={cx(styles.card, promoted && styles.promoted, className)} {...rest}>
      <div className={styles.image}>
        {image && <img src={image} alt="" loading="lazy" />}
        {promoted && <span className={styles.soon}>בקרוב</span>}
      </div>
      <div className={styles.title}>
        <span className={styles.source}>
          {sourceLogo ? <img src={sourceLogo} alt="" /> : <span className={styles.logo} aria-hidden />}
          {source}
        </span>
        <h3 className={styles.name}>{title}</h3>
      </div>
      <div className={styles.dataRow}>
        <EventDataItem label="תאריך" icon="calendar">{date}</EventDataItem>
        <EventDataItem label="שעה" icon="clock">{time}</EventDataItem>
        <EventDataItem label="מיקום" icon="map-pin">{location}</EventDataItem>
        <EventDataItem label="מחיר" icon="ticket">{price}</EventDataItem>
      </div>
      {href && <a className={styles.link} href={href} aria-label={typeof title === 'string' ? title : undefined} />}
    </article>
  );
}
