'use client';

import { FC, Suspense, useState } from 'react';
import { ITherapistsScreenProps } from './index.type';
import dynamic from 'next/dynamic';
import { ICategory } from '@/types/category.type';
import { usePathname, useRouter } from 'next/navigation';

const FilterTherapistsDialog = dynamic(
  () =>
    import('../../../app/(app)/therapists/_components/FilterTherapistsDialog'),
);

const TherapistsCategoryDialog = dynamic(
  () =>
    import(
      '../../../app/(app)/therapists/_components/TherapistsCategoryDialog'
    ),
);

const TherapistCategorySlider = dynamic(
  () =>
    import('../../../app/(app)/therapists/_components/TherapistCategorySlider'),
);

const TherapistsScreen: FC<ITherapistsScreenProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<ICategory>();
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleOpenCategoryDetail = (category: ICategory) => {
    setIsOpenDetail(true);
    setSelectedCategory(category);
  };

  const handleCloseCategoryDetail = () => {
    setIsOpenDetail(false);
    router.push(pathname);
    setSelectedCategory(undefined);
  };

  const handleOpenFilter = () => {
    setIsOpenFilter(true);
  };

  const handleCloseFilter = (isResetURL?: boolean) => {
    setIsOpenFilter(false);
    if (isResetURL) router.push(pathname);
  };

  return (
    <div className="container">
      {categories.map((category) => (
        <TherapistCategorySlider
          key={category.id}
          category={category}
          handleOpenDialog={handleOpenCategoryDetail}
        />
      ))}

      {isOpenDetail && selectedCategory && (
        <Suspense fallback={<></>}>
          <TherapistsCategoryDialog
            category={selectedCategory}
            handleClose={handleCloseCategoryDetail}
            handleOpenFilter={handleOpenFilter}
          />
        </Suspense>
      )}

      {isOpenFilter && (
        <Suspense fallback={<></>}>
          <FilterTherapistsDialog handleClose={handleCloseFilter} />
        </Suspense>
      )}
    </div>
  );
};

export default TherapistsScreen;
