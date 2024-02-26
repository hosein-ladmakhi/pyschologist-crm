import zod from 'zod';

export const loginValidation = zod.object({
  email: zod
    .string({ required_error: 'آدرس ایمیل خود را وارد کنید' })
    .email({ message: 'آدرس ایمیل شما فرمت درستی ندارد' }),
  password: zod
    .string({ required_error: 'گذرواژه خود را وارد کنید' })
    .min(8, { message: 'گذرواژه باید حداقل 8 کاراکتر باشد' }),
});
