import { ICategory } from '@/types/category.type';
import { usePathname, useRouter } from 'next/navigation';
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

interface ITherapistContext {
  selectedCategory?: ICategory;
  isOpenDetail?: boolean;
  isOpenFilter?: boolean;

  handleSelectedCategory: (category: ICategory) => void;
  handleOpenDetail: (category?: ICategory) => void;
  handleCloseDetail: () => void;
  handleOpenFilter: () => void;
  handleCloseFilter: (isResetURL?: boolean) => void;
}

const therapistsContext = createContext<ITherapistContext>({
  isOpenDetail: false,
  isOpenFilter: false,
  handleCloseDetail: () => {},
  handleCloseFilter: (isResetURL?: boolean) => {},
  handleOpenDetail: (category: ICategory) => {},
  handleOpenFilter: () => {},
  handleSelectedCategory: () => {},
});

const Provider = therapistsContext.Provider;

export const useTherapistsContext = () => useContext(therapistsContext)!;

export const TherapistsContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<ICategory>();
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

  const handleOpenDetail = (category: ICategory) => {
    setIsOpenDetail(true);
    setSelectedCategory(category);
  };

  const handleCloseDetail = () => {
    setIsOpenDetail(false);
    setSelectedCategory(undefined);
  };

  const handleOpenFilter = () => {
    setIsOpenFilter(true);
  };

  const handleCloseFilter = (isResetURL?: boolean) => {
    setIsOpenFilter(false);
    if (isResetURL) {
      router.push(pathname);
    }
  };

  const handleSelectedCategory = (category: ICategory) => {
    setSelectedCategory(category);
  };

  return (
    <Provider
      value={{
        handleCloseDetail,
        handleOpenDetail,
        handleOpenFilter,
        handleSelectedCategory,
        handleCloseFilter,
        isOpenDetail,
        isOpenFilter,
        selectedCategory,
      }}
    >
      {children}
    </Provider>
  );
};
