import { ICategory } from '@/types/category.type';
import { ITherapistSchedulesPerDay } from '@/types/therapist-schedule.type';
import zod from 'zod';
import { saveReserveFormValidation } from './save-reserve.validation';

export interface IReserveDialogProps {
  schedules: ITherapistSchedulesPerDay[];
  therapistId: number;
  categories: ICategory[];
}

export type TSaveReserveFormValidation = zod.infer<
  typeof saveReserveFormValidation
>;
