import zod from "zod";
import { signupValidation } from "../../../../constants/signup-form.validation";

export type TSignupFormValidation = zod.infer<typeof signupValidation>;
