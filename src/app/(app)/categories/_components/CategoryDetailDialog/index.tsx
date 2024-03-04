"use client";

import "./index.css";

import Button from "@/ui/kits/Button";
import { FC } from "react";
import { ICategoryDetailDialogProps } from "./index.type";
import CategoryCard from "../CategoryCard";
import TherapistCard from "@/ui/components/TherapistCard";
import { useCategoriesContext } from "../../_context/categories-context";
import Dialog from "@/ui/kits/Dialog";

const CategoryDetailDialog: FC<ICategoryDetailDialogProps> = ({}) => {
  const {
    selectedCategory: category,
    isOpenCategoryDetail,
    handleCloseCategoryDetail,
  } = useCategoriesContext();
  if (!category || !isOpenCategoryDetail) return <></>;
  return (
    <Dialog isOpen={category && isOpenCategoryDetail} cardClass="h-5/6 !overflow-hidden">
      <div className="category-detail">
        <CategoryCard category={category} />
        <ul className="category-detail__list">
          {category.therapists.map((therapist) => (
            <TherapistCard therapist={therapist} key={therapist.id} variant="horizonal" />
          ))}
        </ul>
        <div className="category-detail__actions">
          <Button variant="error" onClick={handleCloseCategoryDetail} size="sm" className="w-full">
            بستن جزئیات
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default CategoryDetailDialog;
