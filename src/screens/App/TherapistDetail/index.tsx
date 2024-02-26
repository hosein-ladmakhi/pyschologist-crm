'use client';

import { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import TherapistSchedule from './_components/TherapistSchedule';
import TherapistInfo from './_components/TherapistInfo';

const ReserveDialog = dynamic(() => import('./_components/ReserveDialog'));

const TherapistDetailScreen = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="container">
      <TherapistInfo handleOpenReserve={() => setIsOpen(true)} />
      <TherapistSchedule />
      {isOpen && (
        <Suspense fallback={<></>}>
          <ReserveDialog handleClose={() => setIsOpen(false)} />
        </Suspense>
      )}
    </div>
  );
};

export default TherapistDetailScreen;
