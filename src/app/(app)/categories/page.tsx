import { FC, Suspense } from 'react';
import CategoryLists from './_components/CategoryLists';
import CategoryDetailDialog from './_components/CategoryDetailDialog';
import CategoryListsLoading from './_components/CategoryListsLoading';

const CategoriesPage: FC = async () => {
  return (
    <div className="container">
      <Suspense fallback={<CategoryListsLoading />}>
        <CategoryLists />
      </Suspense>
      <CategoryDetailDialog />
    </div>
  );
};

export default CategoriesPage;
