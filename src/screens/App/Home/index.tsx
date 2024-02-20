import MainHeader from '@/ui/components/MainHeader';
import { FC } from 'react';
import HomeLanding from './components/HomeLanding';
import HomeBestTherapists from './components/HomeBestTherapists';
import HomeCategories from './components/HomeCategories';
import { headers } from 'next/headers';

const HomeScreen: FC = async () => {
  const url = headers().get('x-url') || 'http://localhost:3000';
  const categories = await fetch(`${url}/api/categories`).then((res) =>
    res.json(),
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
