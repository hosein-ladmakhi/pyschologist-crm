import TherapistsScreen from '@/screens/App/Therapists';

export const dynamic = 'force-dynamic';

const TherapistsPage = async ({}: {}) => {
  const categoriesResponse = await fetch(
    `http://localhost:4000/categories/therapists`,
  );
  const categories = await categoriesResponse.json();
  return <TherapistsScreen categories={categories} />;
};

export default TherapistsPage;
