import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import styles from './InputField.module.css';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Visible label above the field. */
  label?: ReactNode;
  /** Icon at the end (left) — e.g. `search` for listing search. */
  icon?: IconName;
}

/** `.form-input-field` — text / search input. */
export function InputField({ label, icon, className, ...rest }: InputFieldProps) {
  const field = (
    <span className={cx(styles.field, className)}>
      <input className={styles.input} {...rest} />
      {icon && <Icon name={icon} size={20} />}
    </span>
  );
  return label ? (
    <label className={styles.label}>
      {label}
      {field}
    </label>
  ) : (
    field
  );
}

export interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
}

export function TextAreaField({ label, className, ...rest }: TextAreaFieldProps) {
  const field = (
    <span className={cx(styles.field, styles.textarea, className)}>
      <textarea className={styles.input} {...rest} />
    </span>
  );
  return label ? (
    <label className={styles.label}>
      {label}
      {field}
    </label>
  ) : (
    field
  );
}

export interface DropdownFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: ReactNode;
  /** Icon at the start (right), e.g. `filter`. */
  icon?: IconName;
  children: ReactNode;
}

/** Listing filter dropdown (`.w-dropdown-toggle`) — native <select> for accessibility. */
export function DropdownField({ label, icon = 'filter', className, children, ...rest }: DropdownFieldProps) {
  const field = (
    <span className={cx(styles.field, className)}>
      {icon && <Icon name={icon} size={20} />}
      <select className={styles.select} {...rest}>
        {children}
      </select>
      <Icon name="chevron-down" size={20} />
    </span>
  );
  return label ? (
    <label className={styles.label}>
      {label}
      {field}
    </label>
  ) : (
    field
  );
}

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  children: ReactNode;
}

/** Filter checkbox — box at the start (right) of the label. */
export function Checkbox({ children, className, ...rest }: CheckboxProps) {
  return (
    <label className={cx(styles.checkbox, className)}>
      <input type="checkbox" {...rest} />
      <span>{children}</span>
    </label>
  );
}
