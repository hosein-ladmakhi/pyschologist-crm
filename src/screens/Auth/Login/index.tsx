'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import Input from '@/ui/kits/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { loginValidation } from './login-form.validation';
import { TLoginFormValidation } from './index.type';

const LoginScreen = () => {
  const { control, handleSubmit } = useForm<TLoginFormValidation>({
    resolver: zodResolver(loginValidation),
  });
  const onSubmit = handleSubmit(() => {});

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
            helperText="آدرس ایمیلی که در سایت ثبت شده است"
            label="آدرس ایمیل"
            name="email"
            additionalClass="login__form-item"
          />
          <Input
            additionalClass="login__form-item"
            control={control}
            helperText="گذرواژه کلید ورود شما به سایت میباشد"
            label="گذرواژه"
            name="password"
            type="password"
          />
          <Button type="submit" variant="main" className="login__form-btn">
            ورود به حساب کاربری
          </Button>
        </form>
        <Link className="login__link" href="/auth/therapist/signup">
          ساخت حساب کاربری جدید
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
