import zod from 'zod';
import { editProfileFormValidation } from './edit-profile.validation';
export interface IEditProfileDialogProps {
  onClose: () => void;
}

export type TEditProfileFormValidation = zod.infer<
  typeof editProfileFormValidation
>;
