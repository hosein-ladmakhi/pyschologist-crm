'use client';

import { FC } from 'react';
import ProfileCard from '../../../app/(app)/dashboard/_components/ProfileCard';
import ReservationsList from '../../../app/(app)/dashboard/_components/ReservationsList';
import { IDashboardScreenProps } from './index.type';
import moment from 'moment';
import { EOrderStatus } from '@/types/order.type';

const DashboardScreen: FC<IDashboardScreenProps> = ({ reserves }) => {
  const activeReserves = reserves.filter(
    (reserve) =>
      moment(reserve.date).isSameOrAfter(moment().format('YYYY-MM-DD')) &&
      reserve.status === EOrderStatus.Pending,
  );

  const disabledReserves = reserves.filter(
    (reserve) =>
      moment(reserve.date).isBefore(moment().format('YYYY-MM-DD')) ||
      reserve.status !== EOrderStatus.Pending,
  );

  return (
    <div className="container">
      <ProfileCard />
      <ReservationsList data={activeReserves} title="رزرو های فعال" />
      <ReservationsList
        data={disabledReserves}
        title="رزرو های گذشته"
        showStatus
      />
    </div>
  );
};

export default DashboardScreen;
