'use client';

import Button from '@/ui/kits/Button';
import Input from '@/ui/kits/Input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';

const DashboardScreen = () => {
  const [isOpenLocation, setIsOpenLocation] = useState<boolean>(false);
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
  const { control } = useForm();

  return (
    <div className="container">
      <div className="p-5 border border-neutral/10 rounded">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-sm font-bold text-neutral/80">
              حسین لادمخی نژاد
            </h1>
            <p className="text-sm text-neutral/50 mt-1">09925087579</p>
          </div>
          <Button
            onClick={() => setIsOpenEdit(true)}
            variant="main"
            isOutline
            size="xs"
          >
            ویرایش حساب
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-base">رزرو های امروز</h1>
        <ul className="mt-5">
          {Array.from({ length: 3 }).map(() => (
            <li className="p-5 rounded border border-neutral/10 my-5">
              <div className="flex justify-between items-center text-sm my-2">
                <span className="font-bold">پزشک</span>
                <span>حسین لادمخی نژاد</span>
              </div>
              <div className="flex justify-between items-center text-sm my-2">
                <span className="font-bold">تاریخ</span>
                <span>1402-01-01</span>
              </div>
              <div className="flex justify-between items-center text-sm my-2">
                <span className="font-bold">ساعت</span>
                <span>08:00 تا 10:00</span>
              </div>
              <div className="flex justify-between items-center text-sm my-2">
                <span className="font-bold">روز</span>
                <span>یک شنبه</span>
              </div>
              <div className="flex justify-between items-center text-sm my-2">
                <span className="font-bold">نوع برگزاری</span>
                <span>حضوری</span>
              </div>
              <div className="flex justify-between items-center text-sm my-2">
                <span className="font-bold">زمینه</span>
                <span>افسردگی و زوج درمانی</span>
              </div>
              <Button
                className="w-full mt-5"
                size="xs"
                variant="main"
                isOutline
                onClick={() => setIsOpenLocation(true)}
              >
                نمایش مکان
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-base">رزرو های گذشته</h1>
        <ul className="mt-5">
          {Array.from({ length: 3 }).map(() => (
            <li className="p-5 rounded border border-neutral/10 my-5">
              <div className="flex justify-between items-center text-sm my-2">
                <span className="font-bold">پزشک</span>
                <span>حسین لادمخی نژاد</span>
              </div>
              <div className="flex justify-between items-center text-sm my-2">
                <span className="font-bold">تاریخ</span>
                <span>1402-01-01</span>
              </div>
              <div className="flex justify-between items-center text-sm my-2">
                <span className="font-bold">ساعت</span>
                <span>08:00 تا 10:00</span>
              </div>
              <div className="flex justify-between items-center text-sm my-2">
                <span className="font-bold">روز</span>
                <span>یک شنبه</span>
              </div>
              <div className="flex justify-between items-center text-sm my-2">
                <span className="font-bold">نوع برگزاری</span>
                <span>حضوری</span>
              </div>
              <div className="flex justify-between items-center text-sm my-2">
                <span className="font-bold">وضعیت</span>
                <span>کنسل شده</span>
              </div>
              <div className="flex justify-between items-center text-sm my-2">
                <span className="font-bold">زمینه</span>
                <span>افسردگی و زوج درمانی</span>
              </div>
              <Button
                className="w-full mt-5"
                size="xs"
                variant="main"
                isOutline
                onClick={() => setIsOpenLocation(true)}
              >
                نمایش مکان
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {isOpenLocation && (
        <div className="fixed top-0 left-0 h-full w-full bg-neutral/50 flex justify-center items-end">
          <div className="w-full bg-white p-5 flex flex-col justify-start items-start overflow-auto">
            <div className="my-2">
              <h1 className="text-base font-bold mb-1">شهر</h1>
              <p className="text-sm">تهران</p>
            </div>
            <div className="my-2">
              <h1 className="text-base font-bold mb-1">آدرس دقیق</h1>
              <p className="text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در
              </p>
            </div>
            <div className="my-2">
              <h1 className="text-base font-bold mb-1">اتاق</h1>
              <p className="text-sm">شماره 4</p>
            </div>
            <Button
              variant="error"
              className="w-full mt-5"
              onClick={() => setIsOpenLocation(false)}
              size="sm"
            >
              بستن آدرس
            </Button>
          </div>
        </div>
      )}

      <AnimatePresence>
        {isOpenEdit && (
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            exit={{ y: 1000 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 h-full w-full bg-neutral/50 flex justify-center items-end"
          >
            <div className="w-full bg-white p-5 flex flex-col justify-start items-start overflow-auto">
              <h1 className="font-bold text-base">ویرایش پروفایل کاربر</h1>
              <form className="w-full mt-4" action="">
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-12">
                    <Input
                      control={control}
                      label="نام"
                      name="firstName"
                      helperText="نام شما در سایت نمایش داده میشود"
                    />
                  </div>
                  <div className="col-span-12">
                    <Input
                      control={control}
                      label="نام خانوادگی"
                      name="lastName"
                      helperText="نام خانوادگی شما در سایت نمایش داده میشود"
                    />
                  </div>
                  <div className="col-span-12">
                    <Input
                      control={control}
                      label="شماره تماس"
                      name="phone"
                      helperText="از شماره تماس شما برای پیگیری رزرو استفاده میگردد"
                    />
                  </div>
                  <div className="col-span-12">
                    <Input
                      control={control}
                      label="گذرواژه جدید"
                      name="password"
                      helperText="گذرواژه کلید ورود شما به سایت میباشد"
                    />
                  </div>
                  <div className="col-span-12">
                    <Input
                      control={control}
                      label="گذرواژه فعلی"
                      name="currentPassword"
                      helperText="درصورتی که تمایل به تغییر گذرواژه دارید پر شود"
                    />
                  </div>
                  <div className="col-span-6">
                    <Button variant="main" className="w-full" size="sm">
                      اعمال تغییرات
                    </Button>
                  </div>
                  <div className="col-span-6">
                    <Button
                      onClick={() => setIsOpenEdit(false)}
                      variant="error"
                      className="w-full"
                      size="sm"
                    >
                      لغو تغییر
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardScreen;
