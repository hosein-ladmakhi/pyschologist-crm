'use client';

import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const TicketListsLoading: FC = () => {
  return (
    <>
      <Skeleton count={5} className="mt-5" height={100} />
    </>
  );
};

export default TicketListsLoading;
