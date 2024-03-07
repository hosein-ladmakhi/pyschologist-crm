import { loginValidation } from "@/constants/login-form.validation";
import zod from "zod";

export type TLoginFormValidation = zod.infer<typeof loginValidation>;

export interface IAuthDialogLoginFormProps {
  handleClose: () => void;
}
