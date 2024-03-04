'use client';

import './page.css';

import Button from '@/ui/kits/Button';
import Input from '@/ui/kits/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { loginValidation } from './login-form.validation';
import { TLoginFormValidation } from './page.type';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { control, handleSubmit, reset } = useForm<TLoginFormValidation>({
    resolver: zodResolver(loginValidation),
  });
  const onSubmit = handleSubmit((data) => {
    setLoading(true);
    signIn('credentials', {
      ...data,
      redirect: false,
    })
      .then((res) => {
        if (res?.ok) {
          toast.success('ورود شما با موفقیت انجام شد');
          router.push('/');
          reset();
        } else {
          toast.error('ورود شما با شکست مواجعه شد');
        }
      })
      .catch(() => {
        toast.error('ورود شما با شکست مواجعه شد');
      })
      .finally(() => {
        setLoading(false);
      });
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
          <Button
            loading={loading}
            type="submit"
            variant="main"
            className="login__form-btn"
          >
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
