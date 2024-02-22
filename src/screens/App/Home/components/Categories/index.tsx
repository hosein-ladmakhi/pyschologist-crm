'use client';

import { FC, Suspense } from 'react';
import { IHomeCategoriesProps } from './index.type';
import HomeSectionHeader from '../SectionHeader';
import HomeCategoryCard from '../CategoryCard';

const CategoriesArchive: FC<IHomeCategoriesProps> = ({ categories }) => {
  return (
    <Suspense fallback={<p>درحال لود ...</p>}>
      <div className="container">
        <HomeSectionHeader
          title="تخصص های موحود در پزشک من"
          content="بیش از 2500 تخصص در زمینه پزشکی موجود میباشد"
        />
        <ul>
          {categories.content.map((category: any) => (
            <HomeCategoryCard category={category} key={category.id} />
          ))}
        </ul>
      </div>
    </Suspense>
  );
};

export default CategoriesArchive;
