import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactElement,
} from 'react';
import clsx from 'clsx';

import { OmitClassNameAndStyle, Values } from '../types';

import { ButtonLoader } from './button-loader';

import styles from './button.module.scss';

const SizeButton = {
  default: 'default',
  small: 'small',
  medium: 'medium',
  large: 'large',
  fluid: 'fluid',
} as const;

const KindButton = {
  primary: 'primary',
  secondary: 'secondary',
  dark: 'dark',
  ghost: 'ghost'
} as const;

type SizeButtonType = Values<typeof SizeButton>;

type ButtonKindType = Values<typeof KindButton>;

type ButtonProps = OmitClassNameAndStyle<
  ButtonHTMLAttributes<HTMLButtonElement>
> & {
  size?: SizeButtonType;
  kind?: ButtonKindType;
  loading?: boolean;
  icon?: ReactElement;
  id?: string;
}

function ButtonComponent(
  {
    children,
    icon,
    loading: isLoading,
    size = SizeButton.default,
    kind = KindButton.primary,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      ref={ref}
      disabled={isLoading}
      className={clsx(styles.button, {
        [styles['button--default']]: size === SizeButton.default,
        [styles['button--small']]: size === SizeButton.small,
        [styles['button--medium']]: size === SizeButton.medium,
        [styles['button--large']]: size === SizeButton.large,
        [styles['button--fluid']]: size === SizeButton.fluid,
        [styles['button-primary']]: kind === KindButton.primary,
        [styles['button-secondary']]: kind === KindButton.secondary,
        [styles['button-dark']]: kind === KindButton.dark,
        [styles['button-ghost']]: kind === KindButton.ghost,
  
      })}
    >
      {isLoading ? (<ButtonLoader />) : (
        <div className={styles['button__content']}>
          {icon && <span className={styles['button__icon']}>{icon}</span>}
          {children}
        </div>
      )}
    </button>
  )
}

const  Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonComponent);

export {Button, SizeButton, KindButton};
