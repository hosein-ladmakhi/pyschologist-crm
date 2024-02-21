'use client';

import Button from '@/ui/kits/Button';

const TicketsScreen = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h1 className="text-base font-bold">تیکت های من</h1>
        <Button variant="main" isOutline size="sm">
          ثبت تیکت جدید
        </Button>
      </div>

      <ul className="mt-10">
        {[
          'سلام چجوری میتونم در آزمون های روانشناسی شرکت بکنم ؟',
          'نحوه دریافت مدرک روانشناسی در پزشک من',
          'دلیل اینکه نمراتم اینقدر پایین شده چه چیزی میباشد',
          'میشه اکانت من رو باز کنید خواهش میکنم من توش کلی دیتا داشتم',
          'میتونم قسطی هم پرداخت کنم اطلاعات مختلف رو',
        ].map((e) => (
          <li className="p-4 border my-5 rounded border-neutral/10" key={e}>
            <h1 className="text-sm leading-6 mb-2 font-bold">{e}</h1>
            <div className="flex flex-wrap justify-start items-center gap-3 mt-5">
              <span className="flex justify-center items-center h-5 px-3 text-xs bg-main/10 text-main rounded-full">
                20 روز پیش
              </span>
              <span className="flex justify-center items-center h-5 px-3 text-xs bg-main/10 text-main rounded-full">
                تیکت در وضعیت باز میباشد
              </span>
              <span className="flex justify-center items-center h-5 px-3 text-xs bg-main/10 text-main rounded-full">
                پاسخ داده شده
              </span>
            </div>
            <div className="flex justify-end items-center mt-3">
              <Button variant="main" size="xs">
                نمایش جزئیات تیکت
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketsScreen;
