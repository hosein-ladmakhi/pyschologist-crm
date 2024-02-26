import { ITherapistSchedulesPerDay } from '@/types/therapist-schedule.type';
import { ITherapist } from '@/types/therapist.type';

export interface ITherapistScheduleProps {
  therapist: ITherapist;
  schedules: ITherapistSchedulesPerDay[];
}
