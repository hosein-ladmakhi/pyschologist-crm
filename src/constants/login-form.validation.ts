import zod from "zod";

export const loginValidation = zod.object({
  phone: zod
    .string({ required_error: "شماره تماس خود را وارد کنید" })
    .length(11, { message: "شماره تماس شما فرمت درستی ندارد" }),
  password: zod
    .string({ required_error: "گذرواژه خود را وارد کنید" })
    .min(8, { message: "گذرواژه باید حداقل 8 کاراکتر باشد" }),
});
