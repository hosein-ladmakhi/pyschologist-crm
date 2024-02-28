'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import Input from '@/ui/kits/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { signupValidation } from './signup-form.validation';
import { TSignupFormValidation } from './index.type';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';

const SignupScreen = () => {
  const { control, handleSubmit } = useForm<TSignupFormValidation>({
    resolver: zodResolver(signupValidation),
  });
  const params = useParams() as { type: string };

  const onSubmit = handleSubmit((data) => {
    fetch(`http://localhost:4000/auth/signup/${params.type}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        toast.success('ثبت نام شما با موفقیت انجام گردید');
      })
      .catch(() => {
        toast.error('ثبت نام شما انجام نشد دوباره تلاش کنید');
      });
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
          <Button type="submit" variant="main" className="signup__form-btn">
            ساخت حساب
          </Button>
        </form>
        <Link className="signup__link" href={`/auth/${params.type}/login`}>
          ورود به حساب کاربری
        </Link>
      </div>
    </div>
  );
};

export default SignupScreen;
