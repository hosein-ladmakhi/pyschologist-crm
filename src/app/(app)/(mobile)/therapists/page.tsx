import { fetchTherapistsOfCategoriesApi } from '@/services/categories';
import FilterTherapistsDialog from './_components/FilterTherapistsDialog';
import TherapistsCategoryDialog from './_components/TherapistsCategoryDialog';
import TherapistCategorySlider from './_components/TherapistCategorySlider';

export const dynamic = 'force-dynamic';

const TherapistsPage = async ({}: {}) => {
  const categories = await fetchTherapistsOfCategoriesApi();

  return (
    <div className="container">
      {categories.map((category) => (
        <TherapistCategorySlider key={category.id} category={category} />
      ))}
      <TherapistsCategoryDialog />
      <FilterTherapistsDialog />
    </div>
  );
};

export default TherapistsPage;
