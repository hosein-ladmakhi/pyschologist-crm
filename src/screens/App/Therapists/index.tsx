'use client';

import { FC, Suspense, useState } from 'react';
import { ITherapistsScreenProps } from './index.type';
import dynamic from 'next/dynamic';

const FilterTherapistsDialog = dynamic(
  () => import('./_components/FilterTherapistsDialog'),
);

const TherapistsCategoryDialog = dynamic(
  () => import('./_components/TherapistsCategoryDialog'),
);

const TherapistCategorySlider = dynamic(
  () => import('./_components/TherapistCategorySlider'),
);

const TherapistsScreen: FC<ITherapistsScreenProps> = ({ categories }) => {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

  return (
    <div className="container">
      {categories.map((category: any) => (
        <TherapistCategorySlider
          key={category.id}
          category={category}
          handleOpenDialog={() => setIsOpenDetail(true)}
        />
      ))}

      {isOpenDetail && (
        <Suspense fallback={<></>}>
          <TherapistsCategoryDialog
            category={categories[0]}
            handleClose={() => setIsOpenDetail(false)}
            handleOpenFilter={() => setIsOpenFilter(true)}
          />
        </Suspense>
      )}

      {isOpenFilter && (
        <Suspense fallback={<></>}>
          <FilterTherapistsDialog handleClose={() => setIsOpenFilter(false)} />
        </Suspense>
      )}
    </div>
  );
};

export default TherapistsScreen;
