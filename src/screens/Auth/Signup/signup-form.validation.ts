import zod from "zod";

export const signupValidation = zod.object({
	firstName: zod
		.string({ required_error: "نام خود را وارد کنید" })
		.min(3, { message: "نام باید حداقل 3 کاراکتر باشد" }),
	lastName: zod
		.string({ required_error: "نام خانوادگی خود را وارد کنید" })
		.min(3, { message: "نام خانوادگی باید حداقل 3 کاراکتر باشد" }),
	phone: zod
		.string({ required_error: "شماره تماس خود را وارد کنید" })
		.length(11, { message: "شماره تماس شما فرمت درستی ندارد" }),
	password: zod
		.string({ required_error: "گذرواژه خود را وارد کنید" })
		.min(8, { message: "گذرواژه باید حداقل 8 کاراکتر باشد" }),
});
