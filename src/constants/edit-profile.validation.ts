import zod from "zod";

export const editProfileFormValidation = zod
  .object({
    firstName: zod
      .string({ required_error: "نام خود را وارد کنید" })
      .min(3, { message: "نام کاربر باید حداقل شامل 3 کاراکتر باشد" }),
    lastName: zod
      .string({ required_error: "نام خانوادگی خود را وارد کنید" })
      .min(3, { message: "نام خانوادگی کاربر باید حداقل شامل 3 کاراکتر باشد" }),
    phone: zod
      .string({ required_error: "شماره تماس خود را وارد کنید" })
      .length(11, { message: "شماره تماس وارد  شده فرمت درستی ندارد" }),
    currentPassword: zod
      .string()
      .refine(
        (arg) => (arg.length === 0 ? true : arg.length >= 8),
        "رمز عبور فعلی باید حداقل 8 کاراکتر باشد"
      ),
    newPassword: zod
      .string()
      .refine(
        (arg) => (arg.length === 0 ? true : arg.length >= 8),
        "رمز عبور جدید باید حداقل 8 کاراکتر باشد"
      ),
  })
  .refine(
    (schema) => {
      return !(schema.newPassword && !schema.currentPassword);
    },
    {
      message: "مشکلی در رمز عبور یافت شده است",
      path: ["currentPassword"],
    }
  );
