"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidation } from "@/constants/login-form.validation";
import Input from "@/ui/kits/Input";
import Button from "@/ui/kits/Button";
import { IAuthDialogLoginFormProps, TLoginFormValidation } from "./index.type";
import { useLogin } from "@/hooks/useLogin";

const AuthDialogLoginForm: FC<IAuthDialogLoginFormProps> = ({ handleClose }) => {
  const { control, handleSubmit, reset } = useForm<TLoginFormValidation>({
    resolver: zodResolver(loginValidation),
  });
  const { handleLogin, loading } = useLogin();

  const onSubmit = handleSubmit((data) => {
    handleLogin(data, reset).then((res) => {
      if (res) {
        handleClose();
      }
    });
  });

  return (
    <form onSubmit={onSubmit} className="lg:w-9/12 w-full mx-auto my-7">
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
      <Button
        type="submit"
        loading={loading}
        variant="main"
        shape="block"
        size="sm"
        className="!mt-10"
      >
        ورود به حساب
      </Button>
    </form>
  );
};

export default AuthDialogLoginForm;
