import { ITherapist } from '@/types/therapist.type';

export interface ITherapistInfoProps {
  handleOpenReserve: () => void;
  therapist: ITherapist;
}