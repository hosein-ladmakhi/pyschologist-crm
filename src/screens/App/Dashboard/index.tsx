'use client';

import ProfileCard from './_components/ProfileCard';
import ReservationsList from './_components/ReservationsList';

const DashboardScreen = () => {
  return (
    <div className="container">
      <ProfileCard />

      <ReservationsList
        data={Array.from({ length: 3 })}
        title="رزرو های امروز"
      />

      <ReservationsList
        data={Array.from({ length: 5 })}
        title="رزرو های گذشته"
        showStatus
      />
    </div>
  );
};

export default DashboardScreen;
