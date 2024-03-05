import { fetchTherapistsOfCategoriesApi } from '@/services/categories';
import { FC } from 'react';
import CategoryCard from '../CategoryCard';

const CategoryLists: FC = async () => {
  const categories = await fetchTherapistsOfCategoriesApi();
  return (
    <>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </>
  );
};

export default CategoryLists;
