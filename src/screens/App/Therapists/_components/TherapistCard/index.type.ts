import { ITherapist } from '@/types/therapist.type';

export interface ITherapistCardProps {
  size?: 'sm' | 'md';
  isTitleBold?: boolean;
  therapist: ITherapist;
}
