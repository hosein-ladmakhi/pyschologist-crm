'use client';

import './index.css';

import { FC, Suspense } from 'react';
import { IHomeCategoriesProps } from './index.type';
import HomeHeader from '../HomeHeader';
import CategoryCard from '../CategoryCard';

const CategoriesList: FC<IHomeCategoriesProps> = ({ categories }) => {
  return (
    <Suspense fallback={<p>درحال لود ...</p>}>
      <div className="categories-list">
        <HomeHeader
          title="تخصص های موحود در پزشک من"
          content="بیش از 2500 تخصص در زمینه پزشکی موجود میباشد"
        />
        <ul>
          {categories.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </ul>
      </div>
    </Suspense>
  );
};

export default CategoriesList;
