"use client";

import "./page.css";

import Button from "@/ui/kits/Button";
import Input from "@/ui/kits/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { TLoginFormValidation } from "./page.type";
import { useLogin } from "@/hooks/useLogin";
import { loginValidation } from "@/constants/login-form.validation";

const LoginPage = () => {
  const { handleLogin, loading } = useLogin();
  const { control, handleSubmit, reset } = useForm<TLoginFormValidation>({
    resolver: zodResolver(loginValidation),
  });
  const onSubmit = handleSubmit((data) => {
    handleLogin(data, reset, "/");
  });

  return (
    <div className="login">
      <div className="login__picture"></div>
      <div className="login__picture-bottom"></div>
      <div className="login__card">
        <h1 className="login__title">خوش آمدید</h1>
        <h1 className="login__subtitle">ورود به حساب</h1>
        <form onSubmit={onSubmit} className="login__form">
          <Input
            control={control}
            helperText="شماره تماسی که در سایت ثبت شده است"
            label="شماره تماس"
            name="phone"
            className="login__form-item"
            tabIndex={1}
          />
          <Input
            className="login__form-item"
            control={control}
            helperText="گذرواژه کلید ورود شما به سایت میباشد"
            label="گذرواژه"
            name="password"
            type="password"
            tabIndex={2}
          />
          <Button loading={loading} type="submit" variant="main" className="login__form-btn">
            ورود به حساب کاربری
          </Button>
        </form>
        <Link className="login__link" href="/auth/signup">
          ساخت حساب کاربری جدید
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
