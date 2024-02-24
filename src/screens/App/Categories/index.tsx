'use client';

import { FC, Suspense, useState } from 'react';
import { ICategoriesScreenProps } from './index.type';
import CategoryCard from './_components/CategoryCard';
import dynamic from 'next/dynamic';

const CategoryDetailDialog = dynamic(
  () => import('./_components/CategoryDetailDialog'),
);

const CategoriesScreen: FC<ICategoriesScreenProps> = ({ categories }) => {
  const [categoryDetail, setCategoryDetail] = useState<boolean>(false);

  const onCategoryDetailChange = () => setCategoryDetail((prev) => !prev);

  return (
    <div className="container">
      {categories.map((category: any) => (
        <CategoryCard
          key={category.id}
          category={category}
          onOpenCategoryDetail={onCategoryDetailChange}
        />
      ))}

      {categoryDetail && (
        <Suspense fallback={<></>}>
          <CategoryDetailDialog
            category={categories[0]}
            onClose={onCategoryDetailChange}
          />
        </Suspense>
      )}
    </div>
  );
};

export default CategoriesScreen;
