'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import Input from '@/ui/kits/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { signupValidation } from './signup-form.validation';
import { TSignupFormValidation } from './index.type';

const SignupScreen = () => {
  const { control, handleSubmit } = useForm<TSignupFormValidation>({
    resolver: zodResolver(signupValidation),
  });

  const onSubmit = handleSubmit(() => {});

  return (
    <div className="signup">
      <div className="signup__picture"></div>
      <div className="signup__card">
        <h1 className="signup__title">خوش آمدید</h1>
        <h1 className="signup__subtitle">ساخت حساب</h1>
        <form onSubmit={onSubmit} className="signup__form">
          <Input
            control={control}
            helperText="نام و نام خانوادگی ثبت شده در سایت"
            label="نام و نام خانوادگی"
            name="fullName"
            additionalClass="signup__form-item"
          />
          <Input
            control={control}
            helperText="آدرس ایمیلی که در سایت ثبت شده است"
            label="آدرس ایمیل"
            name="email"
            additionalClass="signup__form-item"
          />
          <Input
            additionalClass="signup__form-item"
            control={control}
            label="گذرواژه"
            name="password"
            type="password"
            helperText="گذرواژه کلید ورود شما به سایت میباشد"
          />
          <Button type="submit" variant="main" className="signup__form-btn">
            ساخت حساب
          </Button>
        </form>
        <Link className="signup__link" href="/auth/therapist/login">
          ورود به حساب کاربری
        </Link>
      </div>
    </div>
  );
};

export default SignupScreen;
