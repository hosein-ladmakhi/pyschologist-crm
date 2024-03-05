'use client';

import { FC, PropsWithChildren } from 'react';
import { TherapistsContextProvider } from './_context/therapists-context';

const TherapistsLayout: FC<PropsWithChildren> = ({ children }) => {
  return <TherapistsContextProvider>{children}</TherapistsContextProvider>;
};

export default TherapistsLayout;
