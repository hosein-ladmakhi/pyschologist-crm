import { httpGet } from "@/lib/httpClient";
import { ICategory } from "@/types/category.type";

// HTTP GET
export const fetchTherapistsOfCategoriesApi = () =>
	httpGet<ICategory[]>("/categories/therapists");
