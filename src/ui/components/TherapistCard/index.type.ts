import { ITherapist } from '@/types/therapist.type';

type ITherapistCardVariant = 'horizonal' | 'minial' | 'vertical';

export interface ITherapistCard {
  therapist: ITherapist;
  variant: ITherapistCardVariant;
}
