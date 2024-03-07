import { ITherapist } from "@/types/therapist.type";

export interface IAllTherapistsListProps {
  data: ITherapist[];
  handleClose: () => void;
}
