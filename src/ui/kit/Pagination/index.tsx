'use client';

import { FC } from 'react';
import './index.css';
import classNames from 'classnames';
import { TPaginationProps } from './index.type';

const Pagination: FC<TPaginationProps> = ({
  shape = 'round',
  size = 'sm',
  variant = 'main',
  totalPage,
  additionalClass = '',
  activePage,
  onChangePage,
}) => {
  const classes = classNames('pagination', additionalClass, {
    [`pagination-${shape}`]: !!shape,
    [`pagination-${size}`]: !!size,
    [`pagination-${variant}`]: !!variant,
  });
  return (
    <ul className={classes}>
      {Array.from({ length: totalPage }).map((_, index) => {
        const pageIndex = index + 1;
        const isActivePage = pageIndex === activePage;
        return (
          <li
            onClick={onChangePage.bind(null, pageIndex)}
            key={index}
            className={classNames('item', { active: isActivePage })}
          >
            {pageIndex}
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
