'use client';

import './index.css';

import { FC } from 'react';
import { TButtonProps } from './index.type';
import classNames from 'classnames';
import Loading from '../Loading';

const Button: FC<TButtonProps> = ({
  children,
  shape = 'normal',
  size = 'normal',
  variant,
  disabled = false,
  loading = false,
  loadingText = '',
  isOutline = false,
  ...attr
}) => {
  const btnClass = classNames('btn', `btn-${shape}`, `btn-${size}`, {
    'btn-outline': isOutline,
    'btn-disabled': disabled || loading,
    [`btn-${variant}`]: variant && !disabled,
  });
  return (
    <button className={btnClass} {...attr}>
      {loading && <Loading ghost type="spinner" size={size} />}
      {loadingText || 'درحال بارگزاری'}
      {!loading && children}
    </button>
  );
};

export default Button;
