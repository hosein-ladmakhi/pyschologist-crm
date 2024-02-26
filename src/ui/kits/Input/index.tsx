'use client';
import './index.css';

import { FC } from 'react';
import { TInputProps } from './index.type';
import classNames from 'classnames';
import { Controller } from 'react-hook-form';

const Input: FC<TInputProps> = ({
  label,
  placeholder,
  helperText,
  disabled,
  control,
  name,
  className = '',
  ...attr
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const error = fieldState.error?.message;
        const inputGroupClass = classNames('input-group', className, {
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
              {...field}
            />
            <span className="helper">{error || helperText}</span>
          </div>
        );
      }}
    />
  );
};

export default Input;
