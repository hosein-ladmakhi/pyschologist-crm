import zod from "zod";

export const createTicketFormValidation = zod.object({
  title: zod
    .string({ required_error: "موضوع تیکت را وارد کنید" })
    .min(3, "موضوع تیکت باید حداقل 3 کاراکتر باشد"),

  content: zod
    .string({ required_error: "محتوای تیکت را وارد کنید" })
    .min(3, "محتوای تیکت باید حداقل 3 کاراکتر باشد"),
});
