'use client';

import { iranYekanFont } from '@/constants/font.constant';
import { FC, PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

const ToastifyProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        rtl
        stacked
        position="top-center"
        bodyClassName={iranYekanFont.className}
        hideProgressBar={true}
      />
    </>
  );
};

export default ToastifyProvider;
