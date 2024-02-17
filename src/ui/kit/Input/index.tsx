'use client';
import './index.css';

import { FC } from 'react';
import { TInputProps } from './index.type';
import classNames from 'classnames';

const Input: FC<TInputProps> = ({
  error,
  label,
  placeholder,
  helperText,
  additionalClass = '',
  disabled,
  ...attr
}) => {
  const inputGroupClass = classNames('input-group', additionalClass, {
    error: !!error,
    disabled: !!disabled,
  });
  return (
    <div className={inputGroupClass}>
      <label className="label">{label}</label>
      <input
        disabled={disabled}
        className="input"
        placeholder={placeholder}
        {...attr}
      />
      <span className="helper">{error || helperText}</span>
    </div>
  );
};

export default Input;
