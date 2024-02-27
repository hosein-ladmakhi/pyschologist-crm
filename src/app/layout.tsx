import './global.css';

import { FC, PropsWithChildren } from 'react';
import { iranYekanFont } from '@/constants/font.constant';
import RouteLoadingProvider from '@/providers/RouteLoadingProvider';
import 'react-toastify/dist/ReactToastify.css';
import ToastifyProvider from '@/providers/ToastifyProvider';
import SessionProvider from '@/providers/SessionProvider';
import { getServerSession } from 'next-auth';

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession();
  return (
    <html lang="fa" dir="rtl">
      <body className={iranYekanFont.className}>
        <RouteLoadingProvider>
          <ToastifyProvider>
            <SessionProvider session={session}>{children}</SessionProvider>
          </ToastifyProvider>
        </RouteLoadingProvider>
      </body>
    </html>
  );
};

export default RootLayout;
