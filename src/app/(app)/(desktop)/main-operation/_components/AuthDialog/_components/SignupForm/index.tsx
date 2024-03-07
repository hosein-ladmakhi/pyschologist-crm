"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { signupValidation } from "@/constants/signup-form.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/ui/kits/Input";
import Button from "@/ui/kits/Button";
import { IAuthDialogSignupFormProps, TSignupFormValidation } from "./index.type";
import { useSignup } from "@/hooks/useSignup";

const AuthDialogSignupForm: FC<IAuthDialogSignupFormProps> = ({ handleClose }) => {
  const { control, handleSubmit, reset } = useForm<TSignupFormValidation>({
    resolver: zodResolver(signupValidation),
  });
  const { handleSignup, loading } = useSignup();

  const onSubmit = handleSubmit((data) => {
    handleSignup(data, reset).then((res) => {
      if (res) {
        handleClose();
      }
    });
  });

  return (
    <form onSubmit={onSubmit} className="w-9/12 mx-auto my-7">
      <Input
        control={control}
        name="firstName"
        label="نام کاربر"
        helperText="نام کاربر که در سایت نمایش داده میشود"
        className="my-5"
      />
      <Input
        control={control}
        name="lastName"
        label="نام خانوادگی کاربر"
        helperText="نام خانوادگی کاربر که در سایت نمایش داده میشود"
        className="my-5"
      />
      <Input
        control={control}
        name="phone"
        label="شماره تماس"
        helperText="شماره تماسی که از قبل در سایت ایجاد کردید"
        className="my-5"
      />
      <Input
        control={control}
        name="password"
        label="گذرواژه"
        helperText="گذرواژه شما باید 8 رقم باشد"
        className="my-5"
        type="password"
      />
      <Button loading={loading} variant="main" shape="block" size="sm" className="!mt-10">
        ساخت حساب کاربری
      </Button>
    </form>
  );
};

export default AuthDialogSignupForm;
