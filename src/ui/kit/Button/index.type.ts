import { TComponentSize, TComponentVariant } from '@/types/component.type';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export type TButtonShape = 'icon' | 'block' | 'normal' | 'full-rounded';

interface IBaseButton {
  size?: TComponentSize;
  shape?: TButtonShape;
  variant: TComponentVariant;
  isOutline?: boolean;
  loading?: boolean;
  loadingText?: string;
}

export type TButtonProps = IBaseButton &
  PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;
