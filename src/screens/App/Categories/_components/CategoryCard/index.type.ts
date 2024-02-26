import { ICategory } from '@/types/category.type';

export interface ICaregoryCardProps {
  category: ICategory;
  handleOpenCategory: (category: ICategory) => void;
}
