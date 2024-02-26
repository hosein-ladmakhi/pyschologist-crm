import { FC } from 'react';
import Landing from './_components/Landing';
import TherapistsList from './_components/TherapistsList';
import CategoriesList from './_components/CategoriesList';
import { IHomeScreenProps } from './index.type';

const HomeScreen: FC<IHomeScreenProps> = async ({ categories, therapists }) => {
  return (
    <>
      <Landing />
      <TherapistsList therapists={therapists} />
      <CategoriesList categories={categories} />
    </>
  );
};

export default HomeScreen;
