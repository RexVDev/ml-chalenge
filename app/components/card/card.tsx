import {
  AllHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode
} from 'react';
import clsx from 'clsx';

import { OmitClassNameAndStyle, Values } from '../types';

import styles from './card.module.scss';

const CardTypes = {
  primary: 'primary',
  secondary: 'secondary',
  ghost: 'ghost',
} as const;

type CardType = Values<typeof CardTypes>;

type CardProps = OmitClassNameAndStyle<
AllHTMLAttributes<HTMLDivElement>
> & {
  id?: string;
  type?: CardType;
  padded?: boolean;
  paddedL?: boolean;
  paddedXL?: boolean;
  borderS?: boolean;
  widthFluid?: boolean;
  title?: ReactNode;
}

function CardComponent(
  {
    children,
    padded = true,
    paddedL,
    paddedXL,
    borderS,
    widthFluid = false,
    title,
    id,
    type = CardTypes.primary,
  }: CardProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
  <div
    id={id}
    ref={ref}
    className={clsx(styles.card, {
      [styles['card--padded']]: padded,
      [styles['card--padded-large']]: paddedL,
      [styles['card--padded-xlarge']]: paddedXL,
      [styles['card--border-small']]: borderS,
      [styles['card--width-fluid']]: widthFluid,
      [styles['card-primary']]: type === CardTypes.primary,
      [styles['card-secondary']]: type === CardTypes.secondary,
      [styles['card-ghost']]: type === CardTypes.ghost,
    })}
  >
    { title ? (
      <header className={styles['card__title']}>
        {title}
      </header>
    ): null }
    {children}
  </div>)
}

const Card = forwardRef<HTMLDivElement, CardProps>(CardComponent)

export {Card, CardTypes};
