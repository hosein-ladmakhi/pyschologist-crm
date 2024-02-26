import { ICategory } from './category.type';
import { IBaseModel, IBaseUser } from './general.type';
import { ITherapistSchedules } from './therapist-schedule.type';

export enum EDegtreeOfEducation {
  diploma = 'diploma',
  associate = 'associate',
  bachelor = 'bachelor',
  master = 'master',
  doctorate = 'doctorate',
}

export enum EGender {
  male = 'male',
  female = 'female',
  unknown = 'unknown',
}

export interface ITherapist extends IBaseModel, IBaseUser {
  phone2: string;
  bio: string;
  address: string;
  degreeOfEducation: EDegtreeOfEducation;
  gender: EGender;
  image: string;
  workingFields: ICategory[];
  schedules: ITherapistSchedules[];
  patientOrders?: any[];
}
