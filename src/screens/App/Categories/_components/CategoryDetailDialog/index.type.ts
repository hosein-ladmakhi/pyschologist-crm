import { ICategory } from '@/types/category.type';

export interface ICategoryDetailDialogProps {
  category: ICategory;
  onClose: () => void;
}
