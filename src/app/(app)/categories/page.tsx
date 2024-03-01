import CategoriesScreen from "@/screens/App/Categories";
import { fetchTherapistsOfCategoriesApi } from "@/services/categories";
import { FC } from "react";

const CategoriesPage: FC = async () => {
	const categories = await fetchTherapistsOfCategoriesApi();
	return <CategoriesScreen categories={categories} />;
};

export default CategoriesPage;
