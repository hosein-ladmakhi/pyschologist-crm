import './index.css';

import { FC } from 'react';
import { IHomeCategoriesProps } from './index.type';
import CategoryCard from '../CategoryCard';
import { fetchTherapistsOfCategoriesApi } from '@/services/categories';

const CategoriesList: FC<IHomeCategoriesProps> = async () => {
  const categories = await fetchTherapistsOfCategoriesApi();
  return (
    <ul>
      {categories?.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </ul>
  );
};

export default CategoriesList;
