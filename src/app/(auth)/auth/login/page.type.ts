import zod from "zod";
import { loginValidation } from "../../../../constants/login-form.validation";

export type TLoginFormValidation = zod.infer<typeof loginValidation>;
