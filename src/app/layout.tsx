import './global.css';

import { FC, PropsWithChildren } from 'react';
import { iranYekanFont } from '@/constants/font.constant';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body className={iranYekanFont.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
