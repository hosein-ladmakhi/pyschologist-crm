"use client";

import "./page.css";

import Button from "@/ui/kits/Button";
import Input from "@/ui/kits/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { TSignupFormValidation } from "./page.type";
import { useSignup } from "@/hooks/useSignup";
import { signupValidation } from "@/constants/signup-form.validation";

const SignupPage = () => {
  const { handleSignup, loading } = useSignup();
  const { control, handleSubmit, reset } = useForm<TSignupFormValidation>({
    resolver: zodResolver(signupValidation),
  });

  const onSubmit = handleSubmit((data) => {
    handleSignup(data, reset, "/");
  });

  return (
    <div className="signup">
      <div className="signup__picture"></div>
      <div className="signup__card">
        <h1 className="signup__title">خوش آمدید</h1>
        <h1 className="signup__subtitle">ساخت حساب</h1>
        <form onSubmit={onSubmit} className="signup__form">
          <Input
            control={control}
            helperText="نام ثبت شده در سایت"
            label="نام"
            name="firstName"
            className="signup__form-item"
          />
          <Input
            control={control}
            helperText="نام خانوادگی ثبت شده در سایت"
            label="نام خانوادگی"
            name="lastName"
            className="signup__form-item"
          />
          <Input
            control={control}
            helperText="شماره تماسی که میتوانید وارد حساب بشوید"
            label="شماره تماس"
            name="phone"
            className="signup__form-item"
          />
          <Input
            className="signup__form-item"
            control={control}
            label="گذرواژه"
            name="password"
            type="password"
            helperText="گذرواژه کلید ورود شما به سایت میباشد"
          />
          <Button loading={loading} type="submit" variant="main" className="signup__form-btn">
            ساخت حساب
          </Button>
        </form>
        <Link className="signup__link" href="/auth/login">
          ورود به حساب کاربری
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
