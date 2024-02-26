import { ITherapistSchedulesPerDay } from '@/types/therapist-schedule.type';
import { ITherapist } from '@/types/therapist.type';

export interface ITherapistDetailScreenProps {
  therapist: ITherapist;
  schedules: ITherapistSchedulesPerDay[];
}
