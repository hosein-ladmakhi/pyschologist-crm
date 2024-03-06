import { ITherapist } from "@/types/therapist.type";

export interface ICategoryDetailModalProps {
  handleClose: () => void;
  therapists: ITherapist[];
}
