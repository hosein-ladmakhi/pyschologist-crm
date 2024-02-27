'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import Input from '@/ui/kits/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { loginValidation } from './login-form.validation';
import { TLoginFormValidation } from './index.type';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';

const LoginScreen = () => {
  const params = useParams() as { type: string };
  const router = useRouter();
  const { control, handleSubmit } = useForm<TLoginFormValidation>({
    resolver: zodResolver(loginValidation),
  });
  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn('credentials', {
      ...data,
      type: params.type,
      redirect: false,
    });

    if (res?.ok) {
      toast.success('ورود شما با موفقیت انجام شد');
      router.push('/');
    } else {
      toast.error('ورود شما با شکست مواجعه شد');
    }
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
