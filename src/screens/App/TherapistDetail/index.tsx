'use client';

import { FC, Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import TherapistScheduleTabs from './_components/TherapistScheduleTabs';
import TherapistInfo from './_components/TherapistInfo';
import { ITherapistDetailScreenProps } from './index.type';

const ReserveDialog = dynamic(() => import('./_components/ReserveDialog'));

const TherapistDetailScreen: FC<ITherapistDetailScreenProps> = ({
  therapist,
  schedules,
}) => {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);

  const handleOpenDetail = () => {
    setIsOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setIsOpenDetail(false);
  };

  return (
    <div className="container">
      <TherapistInfo
        therapist={therapist}
        handleOpenReserve={handleOpenDetail}
      />
      <TherapistScheduleTabs therapist={therapist} schedules={schedules} />
      {isOpenDetail && (
        <Suspense fallback={<></>}>
          <ReserveDialog
            therapistId={therapist.id}
            schedules={schedules}
            handleClose={handleCloseDetail}
            categories={therapist.workingFields}
          />
        </Suspense>
      )}
    </div>
  );
};

export default TherapistDetailScreen;
