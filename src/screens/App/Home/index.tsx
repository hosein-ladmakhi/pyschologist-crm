import MainHeader from '@/ui/components/MainHeader';
import { FC } from 'react';
import HomeLanding from './components/HomeLanding';
import HomeBestTherapists from './components/HomeBestTherapists';
import HomeCategories from './components/HomeCategories';

const HomeScreen: FC = async () => {
  const categories = await fetch('http://localhost:4000/categories').then(
    (res) => res.json(),
  );
  return (
    <div>
      <MainHeader />
      <HomeLanding />
      <HomeBestTherapists />
      <HomeCategories categories={categories} />
    </div>
  );
};

export default HomeScreen;
