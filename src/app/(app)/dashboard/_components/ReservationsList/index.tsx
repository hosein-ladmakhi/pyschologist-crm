'use client';

import './index.css';

import ReserveCard from '@/ui/components/ReserveCard';
import { AnimatePresence } from 'framer-motion';
import { FC, Suspense, useMemo, useState } from 'react';
import { IReservationsListProps } from './index.type';
import dynamic from 'next/dynamic';
import { EOrderStatus, IOrder } from '@/types/order.type';
import moment from 'jalali-moment';

const ReserveLocationDialog = dynamic(() => import('../LocationDialog'));

const ReservationsList: FC<IReservationsListProps> = ({
  data,
  title,
  showStatus,
  type,
}) => {
  const [selectedReserve, setSelectedReserve] = useState<IOrder>();
  const [openLocationDetail, setOpenLocationDetail] = useState<boolean>(false);

  const transformedData = useMemo(() => {
    return type === 'active'
      ? data?.filter(
          (reserve) =>
            moment(reserve.date).isSameOrAfter(moment().format('YYYY-MM-DD')) &&
            reserve.status === EOrderStatus.Pending,
        )
      : data?.filter(
          (reserve) =>
            moment(reserve.date).isBefore(moment().format('YYYY-MM-DD')) ||
            reserve.status !== EOrderStatus.Pending,
        );
  }, [type, data]);

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
        {transformedData.length === 0 && (
          <p className="reservations-list__empty">رزرو موجود نیست</p>
        )}
        <ul className="reservations-list__list">
          {transformedData.map((reserve) => (
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
              handleClose={handleCloseLocationDetail}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
};

export default ReservationsList;
