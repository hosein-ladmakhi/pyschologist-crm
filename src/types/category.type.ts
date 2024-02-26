import { ITherapist } from './therapist.type';

export interface ICategory {
  id: number;
  faName: string;
  enName: string;
  therapists: ITherapist[];
  icon?: string;
}
