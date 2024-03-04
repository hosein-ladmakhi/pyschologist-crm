import { ICategory } from '@/types/category.type';
import { ITherapistSchedulesPerDay } from '@/types/therapist-schedule.type';

export interface IReserveDialogProps {
  schedules: ITherapistSchedulesPerDay[];
  therapistId: number;
  categories: ICategory[];
}
