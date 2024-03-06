import { ITherapist } from "@/types/therapist.type";

export interface IAllTherapistsModalProps {
  therapists: ITherapist[];
  count: number;
  handleClose: () => void;
}
