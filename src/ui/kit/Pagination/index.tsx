'use client';

import { FC } from 'react';
import './index.css';
import classNames from 'classnames';
import { TPaginationProps } from './index.type';

const Pagination: FC<TPaginationProps> = ({
  shape = 'round',
  size = 'normal',
  variant = 'main',
}) => {
  const classes = classNames('pagination', {
    [`pagination-${shape}`]: !!shape,
    [`pagination-${size}`]: !!size,
    [`pagination-${variant}`]: !!variant,
  });
  return (
    <ul className={classes}>
      {Array.from({ length: 10 }).map((_, index) => (
        <li className="item active">{index + 1}</li>
      ))}
    </ul>
  );
};

export default Pagination;
