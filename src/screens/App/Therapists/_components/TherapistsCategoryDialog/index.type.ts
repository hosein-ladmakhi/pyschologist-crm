import { ICategory } from '@/types/category.type';

export interface ITherapistsCategoryDialogProps {
  category: ICategory;
  handleClose: () => void;
  handleOpenFilter: () => void;
}
