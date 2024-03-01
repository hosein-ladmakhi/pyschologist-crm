import TherapistsScreen from "@/screens/App/Therapists";
import { fetchTherapistsOfCategoriesApi } from "@/services/categories";

export const dynamic = "force-dynamic";

const TherapistsPage = async ({}: {}) => {
	const categories = await fetchTherapistsOfCategoriesApi();
	return <TherapistsScreen categories={categories} />;
};

export default TherapistsPage;
