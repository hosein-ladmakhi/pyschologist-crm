import { signupValidation } from "@/constants/signup-form.validation";
import zod from "zod";

export type TSignupFormValidation = zod.infer<typeof signupValidation>;

export interface IAuthDialogSignupFormProps {
  handleClose: () => void;
}
