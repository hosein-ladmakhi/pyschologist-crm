import zod from 'zod';
import { filterFormValidation } from './filter-form.validation';
export interface IFilterTherapistsDialogProps {}

export type TFilterFormValidation = zod.infer<typeof filterFormValidation>;
