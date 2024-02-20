import zod from 'zod';

export const signupValidation = zod.object({
  fullName: zod
    .string({ required_error: 'نام و نام خانوادگی خود را وارد کنید' })
    .min(3, { message: 'نام و نام خانوادگی باید حداقل 3 کاراکتر باشد' }),
  email: zod
    .string({ required_error: 'آدرس ایمیل خود را وارد کنید' })
    .email({ message: 'آدرس ایمیل شما فرمت درستی ندارد' }),
  password: zod
    .string({ required_error: 'گذرواژه خود را وارد کنید' })
    .min(8, { message: 'گذرواژه باید حداقل 8 کاراکتر باشد' }),
});
