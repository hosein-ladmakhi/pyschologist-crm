import './global.css';

import { FC, PropsWithChildren } from 'react';
import { iranYekanFont } from '@/constants/font.constant';
import RouteLoadingProvider from '@/providers/RouteLoadingProvider';
import 'react-toastify/dist/ReactToastify.css';
import ToastifyProvider from '@/providers/ToastifyProvider';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body className={iranYekanFont.className}>
        <RouteLoadingProvider>
          <ToastifyProvider>{children}</ToastifyProvider>
        </RouteLoadingProvider>
      </body>
    </html>
  );
};

export default RootLayout;
