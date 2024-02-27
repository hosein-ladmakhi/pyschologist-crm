import { ILocation } from '@/types/location.type';

export interface ILocationDialogProps {
  onClose: () => void;
  address: string;
  room: number;
  city: string;
}
