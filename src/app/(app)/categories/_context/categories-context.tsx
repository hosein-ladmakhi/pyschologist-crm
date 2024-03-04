import { ICategory } from '@/types/category.type';
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

interface ICategoriesContext {
  isOpenCategoryDetail: boolean;
  selectedCategory?: ICategory;
  handleOpenCategoryDetail: (category: ICategory) => void;
  handleCloseCategoryDetail: () => void;
}

const categoriesContext = createContext<ICategoriesContext>({
  isOpenCategoryDetail: false,
  handleCloseCategoryDetail: () => {},
  handleOpenCategoryDetail: () => {},
});

const Provider = categoriesContext.Provider;

export const useCategoriesContext = () => useContext(categoriesContext);

export const CategoriesContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isOpenCategoryDetail, setIsOpenCategoryDetail] =
    useState<boolean>(false);

  const [selectedCategory, setSelectedCategory] = useState<ICategory>();

  const handleOpenCategoryDetail = (category: ICategory) => {
    if (!isOpenCategoryDetail) {
      setSelectedCategory(category);
      setIsOpenCategoryDetail(true);
    }
  };

  const handleCloseCategoryDetail = () => {
    setSelectedCategory(undefined);
    setIsOpenCategoryDetail(false);
  };

  return (
    <Provider
      value={{
        handleCloseCategoryDetail,
        handleOpenCategoryDetail,
        isOpenCategoryDetail,
        selectedCategory,
      }}
    >
      {children}
    </Provider>
  );
};
