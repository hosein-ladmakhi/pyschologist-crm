import MainHeader from '@/ui/components/MainHeader';
import { FC } from 'react';
import HomeLanding from './components/HomeLanding';

const HomeScreen: FC = () => {
  return (
    <div>
      <MainHeader />
      <HomeLanding />
    </div>
  );
};

export default HomeScreen;
