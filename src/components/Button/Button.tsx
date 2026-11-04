import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from '../../icons/Icon';
import { cx } from '../../utils/cx';
import styles from './Button.module.css';

export type ButtonVariant =
  | 'primary'
  | 'primary-gradient'
  | 'secondary'
  | 'secondary-grey'
  | 'light-purple'
  | 'outline'
  | 'ghost-purple'
  | 'ghost-neutral'
  | 'on-purple';

type CommonProps = {
  variant?: ButtonVariant;
  /** Icon on the start (right in RTL) side of the label. */
  icon?: IconName;
  children?: ReactNode;
  className?: string;
};

export type ButtonProps = CommonProps &
  (({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>) | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>));

/** `.anoda-button` — renders an <a> when `href` is set. */
export function Button({ variant = 'primary', icon, children, className, ...rest }: ButtonProps) {
  const classes = cx(styles.button, styles[variant], className);
  const content = (
    <>
      {icon && <Icon name={icon} size={24} />}
      {children}
    </>
  );
  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }
  const { type = 'button', ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}

export type IconButtonVariant = Extract<ButtonVariant, 'primary-gradient' | 'secondary' | 'light-purple' | 'ghost-purple' | 'ghost-neutral' | 'on-purple'>;

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: IconName;
  /** Required: icon-only buttons need an accessible name. */
  label: string;
  variant?: IconButtonVariant;
}

/** 40×40 icon-only button (section "see all" arrows, card actions, mobile menu). */
export function IconButton({ icon, label, variant = 'ghost-purple', className, type = 'button', ...rest }: IconButtonProps) {
  return (
    <button type={type} aria-label={label} title={label} className={cx(styles.button, styles.iconOnly, styles[variant], className)} {...rest}>
      <Icon name={icon} size={24} />
    </button>
  );
}

export interface SearchPillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

/** Small pill button that sits inside SearchField. */
export function SearchPillButton({ children = 'חיפוש', className, type = 'submit', ...rest }: SearchPillButtonProps) {
  return (
    <button type={type} className={cx(styles.searchPill, className)} {...rest}>
      {children}
    </button>
  );
}
