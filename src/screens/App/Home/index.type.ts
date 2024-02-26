import { ICategory } from '@/types/category.type';
import { ITherapist } from '@/types/therapist.type';

export interface IHomeScreenProps {
  categories: ICategory[];
  therapists: ITherapist[];
}
