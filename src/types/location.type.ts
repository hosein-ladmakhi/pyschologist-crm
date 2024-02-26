import { ITherapistSchedules } from './therapist-schedule.type';

export interface ILocation {
  id: number;
  city: string;
  address: string;
  therapistSchedules?: ITherapistSchedules[];
}
