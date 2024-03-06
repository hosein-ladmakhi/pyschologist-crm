import { ICategory } from "@/types/category.type";

export interface IAllCategoriesModalProps {
  content: ICategory[];
  handleClose: () => void;
}
