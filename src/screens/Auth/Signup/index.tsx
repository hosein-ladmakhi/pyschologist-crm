'use client';

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
    <div className="h-screen mx-auto flex justify-center items-start flex-col relative overflow-hidden">
      <div className="bg-main h-64 w-64 rounded-full absolute -top-32 -left-40"></div>
      <div className="w-10/12 mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-main via-main to-success text-transparent bg-clip-text">
          خوش آمدید
        </h1>
        <h1 className="text-2xl mt-4 text-main">ساخت حساب</h1>
        <form onSubmit={onSubmit} className="mt-10">
          <Input
            control={control}
            helperText="نام و نام خانوادگی ثبت شده در سایت"
            label="نام و نام خانوادگی"
            name="fullName"
            additionalClass="my-4"
          />
          <Input
            control={control}
            helperText="آدرس ایمیلی که در سایت ثبت شده است"
            label="آدرس ایمیل"
            name="email"
            additionalClass="my-4"
          />
          <Input
            additionalClass="my-4"
            control={control}
            label="گذرواژه"
            name="password"
            type="password"
            helperText="گذرواژه کلید ورود شما به سایت میباشد"
          />
          <Button type="submit" variant="main" className="w-full mt-10">
            ساخت حساب
          </Button>
        </form>
        <Link
          className="text-base my-10 block text-main underline"
          href="/auth/therapist/login"
        >
          ورود به حساب کاربری
        </Link>
      </div>
    </div>
  );
};

export default SignupScreen;
