import CategoriesScreen from '@/screens/App/Categories';
import { FC } from 'react';

const CategoriesPage: FC = async () => {
  const categoriesResponse = await fetch(
    `http://localhost:4000/categories/therapists`,
  );
  const categories = await categoriesResponse.json();
  return <CategoriesScreen categories={categories} />;
};

export default CategoriesPage;
