import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { TrendBadge, type TrendBadgeProps } from '../TrendBadge';
import styles from './SalaryCard.module.css';

export interface SalaryCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'role'> {
  /** Hebrew role, e.g. "🖋️ מעצב.ת מוצר" */
  role: ReactNode;
  /** English role, e.g. "Product Designer" */
  roleEn?: ReactNode;
  salary: ReactNode;
  trend: TrendBadgeProps['trend'];
  change: ReactNode;
}

/** `.salary-card` — role bar, monthly salary, year-over-year Trend Badge. */
export function SalaryCard({ role, roleEn, salary, trend, change, className, ...rest }: SalaryCardProps) {
  return (
    <div className={cx(styles.card, className)} {...rest}>
      <div className={styles.label}>
        <strong>{role}</strong>
        {roleEn && (
          <>
            <span aria-hidden>•</span>
            <span>{roleEn}</span>
          </>
        )}
      </div>
      <div className={styles.value}>
        <span className={styles.salary}>{salary}</span>
        <TrendBadge trend={trend}>{change}</TrendBadge>
      </div>
    </div>
  );
}
