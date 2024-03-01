"use client";

import { FC, Suspense, useState } from "react";
import { ICategoriesScreenProps } from "./index.type";
import CategoryCard from "./_components/CategoryCard";
import dynamic from "next/dynamic";
import { ICategory } from "@/types/category.type";

const CategoryDetailDialog = dynamic(
	() => import("./_components/CategoryDetailDialog")
);

const CategoriesScreen: FC<ICategoriesScreenProps> = ({ categories }) => {
	const [selectedCategory, setSelectedCategory] = useState<ICategory>();

	const handleOpenCategory = (category: ICategory) => {
		setSelectedCategory(category);
	};

	const handleCloseCategory = () => {
		setSelectedCategory(undefined);
	};

	return (
		<div className="container">
			{categories.map((category) => (
				<CategoryCard
					key={category.id}
					category={category}
					handleOpenCategory={handleOpenCategory}
				/>
			))}

			{selectedCategory && (
				<Suspense fallback={<></>}>
					<CategoryDetailDialog
						category={selectedCategory}
						handleClose={handleCloseCategory}
					/>
				</Suspense>
			)}
		</div>
	);
};

export default CategoriesScreen;
