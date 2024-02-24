'use client';

import './index.css';

import ReserveCard from '@/ui/components/ReserveCard';
import { AnimatePresence } from 'framer-motion';
import { FC, Suspense, useState } from 'react';
import { IReservationsListProps } from './index.type';
import dynamic from 'next/dynamic';

const ReserveLocationDialog = dynamic(() => import('../LocationDialog'));

const ReservationsList: FC<IReservationsListProps> = ({
  data,
  title,
  showStatus,
}) => {
  const [locationDetailDialog, setLocationDetailDialog] =
    useState<boolean>(false);

  const onLocationDetailDialogChange = () => {
    setLocationDetailDialog((prev) => !prev);
  };

  return (
    <>
      <div className="reservations-list">
        <h1 className="reservations-list__title">{title}</h1>
        <ul className="reservations-list__list">
          {data.map(() => (
            <ReserveCard
              showStatus={showStatus}
              onOpenLocationDialog={onLocationDetailDialogChange}
            />
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {locationDetailDialog && (
          <Suspense fallback={<></>}>
            <ReserveLocationDialog onClose={onLocationDetailDialogChange} />
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
};

export default ReservationsList;
