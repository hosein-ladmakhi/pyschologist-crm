'use client';

import Button from '@/ui/kit/Button';
import Input from '@/ui/kit/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import zod from 'zod';

const loginValidation = zod.object({
  email: zod
    .string({ required_error: 'آدرس ایمیل خود را وارد کنید' })
    .email({ message: 'آدرس ایمیل شما فرمت درستی ندارد' }),
  password: zod
    .string({ required_error: 'گذرواژه خود را وارد کنید' })
    .min(8, { message: 'گذرواژه باید حداقل 8 کاراکتر باشد' }),
});

const LoginPage = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginValidation),
  });
  const onSubmit = handleSubmit(() => {});

  return (
    <div className="h-screen mx-auto flex justify-center items-start flex-col relative overflow-hidden">
      <div className="bg-main h-64 w-64 rounded-full absolute -top-32 -left-28"></div>
      <div className="bg-main h-40 w-full rounded-full absolute -bottom-32 -right-28"></div>
      <div className="w-10/12 mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-main via-main to-success text-transparent bg-clip-text">
          خوش آمدید
        </h1>
        <h1 className="text-2xl mt-4 text-main">ورود به حساب</h1>
        <form onSubmit={onSubmit} className="mt-10">
          <Input
            control={control}
            helperText=""
            label="آدرس ایمیل"
            name="email"
            additionalClass="my-4"
          />
          <Input
            additionalClass="my-4"
            control={control}
            helperText=""
            label="گذرواژه"
            name="password"
            type="password"
          />
          <Button type="submit" variant="main" className="w-full mt-10">
            ورود به حساب کاربری
          </Button>
        </form>
        <Link
          className="text-base my-10 block text-main underline"
          href="/auth/therapist/signup"
        >
          ساخت حساب کاربری جدید
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
