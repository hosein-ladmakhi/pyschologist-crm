'use client';

import './index.css';

import { FC } from 'react';
import { TTableProps } from './index.type';
import classNames from 'classnames';
import Pagination from '../Pagination';

const Table: FC<TTableProps> = ({
  columns,
  rows,
  bordered = true,
  size = 'sm',
  variant = 'light',
  activePage,
  onChangePage = () => {},
  totalPage,
}) => {
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
                scope="col"
                key={column.name}
                className={classNames('item', column.additionalClass || '')}
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

      {activePage && totalPage && (
        <Pagination
          activePage={activePage}
          onChangePage={onChangePage}
          variant="primary"
          totalPage={totalPage}
          additionalClass="my-10"
        />
      )}
    </>
  );
};

export default Table;
