import { fetchOwnReservationOrdersApi } from '@/services/orders';
import { FC } from 'react';
import ProfileCard from './_components/ProfileCard';
import ReservationsList from './_components/ReservationsList';

export const dynamic = 'force-dynamic';

const DashboardPage: FC = async () => {
  const orders = await fetchOwnReservationOrdersApi();

  return (
    <div className="container">
      <ProfileCard />
      <ReservationsList type="active" data={orders} title="رزرو های فعال" />
      <ReservationsList
        type="disabled"
        data={orders}
        title="رزرو های گذشته"
        showStatus
      />
    </div>
  );
};

export default DashboardPage;
