import zod from "zod";
import { signupValidation } from "./signup-form.validation";

export type TSignupFormValidation = zod.infer<typeof signupValidation>;
