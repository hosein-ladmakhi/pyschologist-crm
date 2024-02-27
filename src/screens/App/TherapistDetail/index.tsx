'use client';

import { FC, Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import TherapistSchedule from './_components/TherapistSchedule';
import TherapistInfo from './_components/TherapistInfo';
import { ITherapistDetailScreenProps } from './index.type';

const ReserveDialog = dynamic(() => import('./_components/ReserveDialog'));

const TherapistDetailScreen: FC<ITherapistDetailScreenProps> = ({
  therapist,
  schedules,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="container">
      <TherapistInfo
        therapist={therapist}
        handleOpenReserve={() => setIsOpen(true)}
      />
      <TherapistSchedule therapist={therapist} schedules={schedules} />
      {isOpen && (
        <Suspense fallback={<></>}>
          <ReserveDialog
            therapistId={therapist.id}
            schedules={schedules}
            handleClose={() => setIsOpen(false)}
            categories={therapist.workingFields}
          />
        </Suspense>
      )}
    </div>
  );
};

export default TherapistDetailScreen;
