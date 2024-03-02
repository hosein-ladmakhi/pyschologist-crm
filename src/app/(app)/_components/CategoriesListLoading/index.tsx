'use client';

import './index.css';

import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const CategoriesListLoading: FC = () => {
  const loadingItem = () => (
    <div className="categories-list-loading__item">
      <Skeleton height={60} width={60} />
      <div className="w-full">
        <Skeleton height={60} containerClassName="flex-1" />
      </div>
    </div>
  );
  return (
    <div className="categories-list-loading">
      {loadingItem()}
      {loadingItem()}
      {loadingItem()}
      {loadingItem()}
    </div>
  );
};

export default CategoriesListLoading;
