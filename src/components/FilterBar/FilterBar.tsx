import type { ButtonHTMLAttributes, FormEvent, HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import styles from './FilterBar.module.css';

export interface ClearFiltersButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

/** `.clean-filters` — outlined "ניקוי" button. */
export function ClearFiltersButton({ children = 'ניקוי', className, type = 'button', ...rest }: ClearFiltersButtonProps) {
  return (
    <button type={type} className={cx(styles.clear, className)} {...rest}>
      <Icon name="filter-off" size={24} />
      <span>{children}</span>
    </button>
  );
}

export interface FilterBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  /** Current search text. */
  query?: string;
  onQueryChange?: (q: string) => void;
  searchPlaceholder?: string;
  /** DropdownFilter elements (and optional Toggles). */
  filters?: ReactNode;
  onClear?: () => void;
  /** Extra row under the controls, above the divider (e.g. an A–Z letter index). */
  below?: ReactNode;
  /** Applied filters — usually ActiveFilterChip elements. */
  activeFilters?: ReactNode;
  shown?: number;
  total?: number;
  /** ≤479px the filters live in a panel opened from the bottom trigger. */
  onOpenMobileFilters?: () => void;
}

/** Listing filter bar (.cms-filters-form-container): search, filter dropdowns, clear; divider; chips + count. */
export function FilterBar({ query, onQueryChange, searchPlaceholder = 'חיפוש', filters, onClear, below, activeFilters, shown, total, onOpenMobileFilters, className, ...rest }: FilterBarProps) {
  const submit = (e: FormEvent) => e.preventDefault();
  return (
    <div className={cx(styles.bar, className)} {...rest}>
      <div className={styles.top}>
        <form role="search" className={styles.controls} onSubmit={submit}>
          <label className={styles.search}>
            <Icon name="search" size={24} />
            <input type="search" aria-label={searchPlaceholder} placeholder={searchPlaceholder} value={query} onChange={(e) => onQueryChange?.(e.target.value)} />
          </label>
          <div className={styles.filters}>{filters}</div>
          {onClear && <ClearFiltersButton className={styles.clearBtn} onClick={onClear} />}
        </form>
        {below}
      </div>
      <div className={styles.results}>
        {activeFilters && <div className={styles.chips}>{activeFilters}</div>}
        {total !== undefined && (
          <span className={styles.count} aria-live="polite">
            <strong>{shown ?? total}</strong> / {total}
          </span>
        )}
      </div>
      {onOpenMobileFilters && (
        <button type="button" className={styles.mobileTrigger} onClick={onOpenMobileFilters}>
          <Icon name="filter" size={24} />
          סינון וחיפוש
        </button>
      )}
    </div>
  );
}
