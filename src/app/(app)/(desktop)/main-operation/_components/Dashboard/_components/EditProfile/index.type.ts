import zod from "zod";
import { editProfileFormValidation } from "@/constants/edit-profile.validation";

export type TEditProfileFormValidation = zod.infer<typeof editProfileFormValidation>;
