import zod from "zod";
import { editProfileFormValidation } from "../../../../../../constants/edit-profile.validation";
export interface IEditProfileDialogProps {
  onClose: () => void;
}

export type TEditProfileFormValidation = zod.infer<typeof editProfileFormValidation>;
