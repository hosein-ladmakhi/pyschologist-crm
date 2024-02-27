'use client';

import './index.css';

import ReserveCard from '@/ui/components/ReserveCard';
import { AnimatePresence } from 'framer-motion';
import { FC, Suspense, useState } from 'react';
import { IReservationsListProps } from './index.type';
import dynamic from 'next/dynamic';
import { IOrder } from '@/types/order.type';

const ReserveLocationDialog = dynamic(() => import('../LocationDialog'));

const ReservationsList: FC<IReservationsListProps> = ({
  data,
  title,
  showStatus,
}) => {
  const [selectedReserve, setSelectedReserve] = useState<IOrder>();
  const [openLocationDetail, setOpenLocationDetail] = useState<boolean>(false);

  const handleOpenLocationDetail = (reserve: IOrder) => {
    setSelectedReserve(reserve);
    setOpenLocationDetail(true);
  };

  const handleCloseLocationDetail = () => {
    setOpenLocationDetail(false);
    setSelectedReserve(undefined);
  };

  return (
    <>
      <div className="reservations-list">
        <h1 className="reservations-list__title">{title}</h1>
        {data.length === 0 && (
          <p className="reservations-list__empty">رزرو موجود نیست</p>
        )}
        <ul className="reservations-list__list">
          {data.map((reserve) => (
            <ReserveCard
              showStatus={showStatus}
              handleOpenLocation={handleOpenLocationDetail}
              reserve={reserve}
              key={reserve.id}
            />
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {openLocationDetail && selectedReserve && (
          <Suspense fallback={<></>}>
            <ReserveLocationDialog
              address={selectedReserve.address}
              city={selectedReserve.city}
              room={selectedReserve.room}
              onClose={handleCloseLocationDetail}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
};

export default ReservationsList;
