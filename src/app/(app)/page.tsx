import HomeScreen from "@/screens/App/Home";
import { fetchTherapistsOfCategoriesApi } from "@/services/categories";
import { fetchTherapistsApi } from "@/services/therapists";

const HomePage = async () => {
	const categories = await fetchTherapistsOfCategoriesApi();
	const therapists = await fetchTherapistsApi();

	return (
		<HomeScreen categories={categories} therapists={therapists?.content} />
	);
};

export default HomePage;
