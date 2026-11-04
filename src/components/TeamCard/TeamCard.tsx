import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { IconButton } from '../Button';
import { Divider } from '../Divider';
import styles from './TeamCard.module.css';

export interface TeamCardProps extends HTMLAttributes<HTMLElement> {
  name: ReactNode;
  job: ReactNode;
  company: ReactNode;
  photo?: string;
  companyLogo?: string;
  bio: ReactNode;
  linkedin?: string;
  email?: string;
}

/** `.about-team-card` — team member on /about. */
export function TeamCard({ name, job, company, photo, companyLogo, bio, linkedin, email, className, ...rest }: TeamCardProps) {
  return (
    <article className={cx(styles.card, className)} {...rest}>
      <header className={styles.header}>
        {photo ? <img className={styles.photo} src={photo} alt="" /> : <span className={styles.photo} aria-hidden />}
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.role}>
            <span>{job}</span>
            {companyLogo ? <img className={styles.logo} src={companyLogo} alt="" /> : <span className={styles.logo} aria-hidden />}
            <span>{company}</span>
          </div>
        </div>
      </header>
      <Divider className={styles.divider} />
      <p className={styles.bio}>{bio}</p>
      {(linkedin || email) && (
        <div className={styles.actions}>
          {linkedin && <IconButton variant="primary-gradient" icon="linkedin" label="לינקדאין" onClick={() => window.open(linkedin, '_blank')} />}
          {email && <IconButton variant="primary-gradient" icon="mail" label="מייל" onClick={() => (window.location.href = `mailto:${email}`)} />}
        </div>
      )}
    </article>
  );
}

export interface ExpertItemProps extends HTMLAttributes<HTMLDivElement> {
  name: ReactNode;
  org: ReactNode;
  photo?: string;
}

/** Advisor in "מובילי דעה שייעצו במהלך הדרך" on /about. */
export function ExpertItem({ name, org, photo, className, ...rest }: ExpertItemProps) {
  return (
    <div className={cx(styles.expert, className)} {...rest}>
      {photo ? <img className={styles.expertPhoto} src={photo} alt="" /> : <span className={styles.expertPhoto} aria-hidden />}
      <div>
        <div className={styles.expertName}>{name}</div>
        <div className={styles.expertOrg}>{org}</div>
      </div>
    </div>
  );
}
