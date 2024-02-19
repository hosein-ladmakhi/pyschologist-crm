import { TComponentSize, TComponentVariant } from '@/types/component.type';

type TPaginationShape = 'sqaure' | 'circle' | 'round';

interface IBasePagination {
  variant?: TComponentVariant;
  size?: TComponentSize;
  shape?: TPaginationShape;
}

export type TPaginationProps = IBasePagination;
