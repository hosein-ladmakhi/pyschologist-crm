import MainHeader from '@/ui/components/MainHeader';
import { FC, PropsWithChildren } from 'react';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default AppLayout;
