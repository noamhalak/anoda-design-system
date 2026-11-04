import type { FormEvent, InputHTMLAttributes } from 'react';
import { Icon } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import { SearchPillButton } from '../Button';
import styles from './SearchField.module.css';

export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onSubmit'> {
  /** White background for the purple home hero. */
  surface?: 'default' | 'on-hero';
  /** Stretch to the container width (tablet/mobile). */
  fill?: boolean;
  buttonLabel?: string;
  onSearch?: (value: string) => void;
}

/** `.navigation-top-search` — pill search with an inline "חיפוש" button. */
export function SearchField({
  surface = 'default',
  fill,
  buttonLabel = 'חיפוש',
  placeholder = 'תכנים, תיקי עבודות, אירועים...',
  onSearch,
  className,
  ...rest
}: SearchFieldProps) {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = new FormData(e.currentTarget).get('q');
    onSearch?.(typeof value === 'string' ? value : '');
  };
  return (
    <form role="search" onSubmit={submit} className={cx(styles.field, surface === 'on-hero' && styles.onHero, fill && styles.fill, className)}>
      <Icon name="search" size={24} />
      <input name="q" type="search" aria-label={placeholder} placeholder={placeholder} className={styles.input} {...rest} />
      <SearchPillButton>{buttonLabel}</SearchPillButton>
    </form>
  );
}
