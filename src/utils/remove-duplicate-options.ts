import { TSelectOption } from '@/types/general.type';

export const removeDuplicateOptions = (data: TSelectOption[] = []) =>
  data.reduce((result: TSelectOption[], option: TSelectOption) => {
    if (!result.find((r) => r.value === option.value)) result.push(option);
    return result;
  }, []);
