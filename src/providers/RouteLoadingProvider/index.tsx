'use client';

import { colorThemes } from '@/constants/color-theme.constant';
import { Next13ProgressBar } from 'next13-progressbar';
import { FC, PropsWithChildren } from 'react';

const RouteLoadingProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Next13ProgressBar
        height="4px"
        color={colorThemes.main}
        showOnShallow
        options={{ showSpinner: false }}
      />
      {children}
    </>
  );
};

export default RouteLoadingProvider;
