import { TSelectOption } from '@/types/general.type';

interface IBaseSelect {
  label: string;
  control: any;
  name: string;
  options: TSelectOption[];
  emptyPlaceholder: string;
  additionalClasses?: string;
}

export type TSelectProps = IBaseSelect;
