'use client';

import './index.css';

import { FC } from 'react';
import { TTextareaProps } from './index.type';
import classNames from 'classnames';

const Textarea: FC<TTextareaProps> = ({
  rows = 4,
  label,
  helper,
  error,
  disabled = false,
  ...attr
}) => {
  return (
    <div className={classNames('textarea-group', { error: !!error, disabled })}>
      <label className="label">{label}</label>
      <textarea
        {...attr}
        disabled={disabled}
        rows={rows}
        className="textarea"
      ></textarea>
      <span className="helper">{error || helper}</span>
    </div>
  );
};

export default Textarea;
