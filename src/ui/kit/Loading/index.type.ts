import { TComponentSize, TComponentVariant } from '@/types/component.type';

type TLoadingType = 'spinner';

type TLoadingSize = TComponentSize | 'xxl' | 'xxxl' | 'xxxxl';

interface IBaseLoading {
  type: TLoadingType;
  size?: TLoadingSize;
  variant?: TComponentVariant;
  ghost?: boolean;
}

export type TLoadingProps = IBaseLoading;
