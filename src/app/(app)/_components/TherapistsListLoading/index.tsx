'use client';

import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const TherapistsListLoading: FC = () => {
  return (
    <div className="mt-5">
      <div className="text-center my-3">
        <Skeleton className="my-2" height={80} width={80} />
        <Skeleton className="my-2" height={100} />
      </div>
    </div>
  );
};

export default TherapistsListLoading;
