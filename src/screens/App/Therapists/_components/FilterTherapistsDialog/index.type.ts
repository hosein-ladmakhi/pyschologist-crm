import zod from 'zod';
import { filterFormValidation } from './filter-form.validation';
export interface IFilterTherapistsDialogProps {
  handleClose: (isResetURL?: boolean) => void;
}

export type TFilterFormValidation = zod.infer<typeof filterFormValidation>;
