import { TComponentSize, TComponentVariant } from '@/types/component.type';

type TPaginationShape = 'sqaure' | 'circle' | 'round';

interface IBasePagination {
  variant?: TComponentVariant;
  size?: TComponentSize;
  shape?: TPaginationShape;
  totalPage: number;
  additionalClass?: string;
  activePage: number;
  onChangePage: (page: number) => void;
}

export type TPaginationProps = IBasePagination;
