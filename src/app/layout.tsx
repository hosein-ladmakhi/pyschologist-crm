import './global.css';

import { FC, PropsWithChildren } from 'react';
import { iranYekanFont } from '@/constants/font.constant';
import { Next13ProgressBar } from 'next13-progressbar';
import RouteLoadingProvider from '@/providers/RouteLoadingProvider';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body className={iranYekanFont.className}>
        <RouteLoadingProvider>{children}</RouteLoadingProvider>
      </body>
    </html>
  );
};

export default RootLayout;
