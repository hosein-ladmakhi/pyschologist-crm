'use client';

import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const CategoryListsLoading: FC = () => {
  return (
    <>
      <Skeleton count={5} className="my-2" height={100} />
    </>
  );
};

export default CategoryListsLoading;
