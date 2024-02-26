import { ICategory } from '@/types/category.type';

export interface ITherapistCategorySliderProps {
  category: ICategory;
  handleOpenDialog: (category: ICategory) => void;
}
