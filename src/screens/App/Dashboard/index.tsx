'use client';

import Button from '@/ui/kits/Button';

const DashboardScreen = () => {
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
          <Button variant="main" isOutline size="xs">
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
                <span className="font-bold">زمینه</span>
                <span>افسردگی و زوج درمانی</span>
              </div>
              <Button
                className="w-full mt-5"
                size="xs"
                variant="main"
                isOutline
              >
                نمایش مکان
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-base">رزرو های کنسل شده</h1>
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
              >
                نمایش مکان
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardScreen;
