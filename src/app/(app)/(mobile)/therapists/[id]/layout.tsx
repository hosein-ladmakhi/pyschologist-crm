'use client';

import { FC, PropsWithChildren } from 'react';
import { TherapistDetailContextProvider } from './_context/therapist-detail-context';

const TherapistDetailLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TherapistDetailContextProvider>{children}</TherapistDetailContextProvider>
  );
};

export default TherapistDetailLayout;
