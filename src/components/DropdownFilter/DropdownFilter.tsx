import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import styles from './DropdownFilter.module.css';

export interface DropdownOptionItem {
  value: string;
  label: string;
  /** Built-in icon name or any node (the site uses a 20px category image). */
  icon?: IconName | ReactNode;
}

export interface DropdownOptionProps {
  option: DropdownOptionItem;
  checked: boolean;
  onToggle: (value: string) => void;
}

/** `.filter-checkbox-container` — checkbox at the start, optional icon, label. */
export function DropdownOption({ option, checked, onToggle }: DropdownOptionProps) {
  const icon = typeof option.icon === 'string' ? <Icon name={option.icon as IconName} size={20} /> : option.icon;
  return (
    <label className={styles.option}>
      <input type="checkbox" checked={checked} onChange={() => onToggle(option.value)} />
      {icon && <span className={styles.optionIcon}>{icon}</span>}
      <span className={styles.optionLabel}>{option.label}</span>
    </label>
  );
}

export interface DropdownFilterProps {
  label: string;
  /** Leading icon on the trigger (`categories`, `globe`, `info`…). */
  icon?: IconName;
  options: DropdownOptionItem[];
  value: string[];
  onChange: (value: string[]) => void;
  /** Adds a search field at the top of the menu (e.g. "חיפוש קטגוריה"). */
  searchable?: boolean;
  searchPlaceholder?: string;
  className?: string;
}

/** Filter dropdown — trigger (Input Field · Dropdown) + menu of checkbox options. */
export function DropdownFilter({ label, icon = 'filter', options, value, onChange, searchable, searchPlaceholder, className }: DropdownFilterProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const root = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (root.current && !root.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open]);

  const shown = useMemo(() => (query ? options.filter((o) => o.label.includes(query)) : options), [options, query]);
  const toggle = (v: string) => onChange(value.includes(v) ? value.filter((x) => x !== v) : [...value, v]);

  return (
    <div ref={root} className={cx(styles.root, className)}>
      <button type="button" className={cx(styles.trigger, open && styles.open)} aria-expanded={open} aria-controls={menuId} onClick={() => setOpen((o) => !o)}>
        <Icon name={icon} size={20} />
        <span className={styles.label}>{label}</span>
        {value.length > 0 && <span className={styles.count}>{value.length}</span>}
        <Icon name="chevron-down" size={20} className={styles.chevron} />
      </button>
      {open && (
        <div id={menuId} className={styles.menu} role="group" aria-label={label}>
          {searchable && (
            <span className={styles.search}>
              <Icon name="search" size={20} />
              <input type="search" value={query} placeholder={searchPlaceholder ?? `חיפוש ${label}`} onChange={(e) => setQuery(e.target.value)} />
            </span>
          )}
          <div className={styles.options}>
            {shown.map((o) => (
              <DropdownOption key={o.value} option={o} checked={value.includes(o.value)} onToggle={toggle} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
