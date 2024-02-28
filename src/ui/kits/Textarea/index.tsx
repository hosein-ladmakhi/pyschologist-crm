'use client';

import './index.css';

import { FC } from 'react';
import { TTextareaProps } from './index.type';
import classNames from 'classnames';
import { Controller } from 'react-hook-form';

const Textarea: FC<TTextareaProps> = ({
  rows = 4,
  label,
  helper,
  disabled = false,
  className = '',
  name,
  control,
  ...attr
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div
          className={classNames('textarea-group', className, {
            error: !!fieldState.error?.message,
            disabled,
          })}
        >
          <label className="label">{label}</label>
          <textarea
            {...attr}
            disabled={disabled}
            rows={rows}
            className="textarea"
            {...field}
          ></textarea>
          <span className="helper">{fieldState?.error?.message || helper}</span>
        </div>
      )}
    />
  );
};

export default Textarea;
