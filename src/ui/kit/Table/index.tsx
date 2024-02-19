'use client';

import './index.css';

import { FC } from 'react';
import { TTableProps } from './index.type';
import classNames from 'classnames';

const Table: FC<TTableProps> = ({
  columns,
  rows,
  bordered = true,
  size = 'sm',
  variant = 'light',
}) => {
  console.log(variant);
  const classes = classNames('table', `text-${size}`, {
    bordered,
    'without-bordered': !bordered,
    [variant]: variant,
  });
  return (
    <>
      <table className={classes}>
        <thead>
          <tr className="group">
            {columns.map((column) => (
              <th
                key={column.name}
                className={`item ${
                  column.width ? `w-[${column.width}px]` : ''
                }`}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="group">
              {columns.map((column) => (
                <td key={`${column.name}`} className="item">
                  {row[column.name]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
