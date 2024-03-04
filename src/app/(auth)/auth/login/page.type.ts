import zod from 'zod';
import { loginValidation } from './login-form.validation';

export type TLoginFormValidation = zod.infer<typeof loginValidation>;
