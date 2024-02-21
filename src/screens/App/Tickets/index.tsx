'use client';

import Button from '@/ui/kits/Button';
import Input from '@/ui/kits/Input';
import Textarea from '@/ui/kits/Textarea';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const TicketsScreen = () => {
  const [isOpenCreate, setIsOpenCreate] = useState<boolean>(false);
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const { control } = useForm();

  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h1 className="text-base font-bold">تیکت های من</h1>
        <Button
          onClick={() => setIsOpenCreate(true)}
          variant="main"
          isOutline
          size="sm"
        >
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
              <Button
                onClick={() => setIsOpenDetail(true)}
                variant="main"
                size="xs"
              >
                نمایش جزئیات تیکت
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {isOpenCreate && (
        <div className="fixed top-0 left-0 h-full w-full bg-neutral/50 flex justify-center items-end">
          <div className="w-full h-5/6 bg-white p-5 pb-0 flex flex-col justify-start items-start overflow-auto">
            <h1 className="font-bold text-base">ثبت رزرو جدید</h1>
            <form action="" className="w-full">
              <Input
                control={control}
                helperText="موضوع تیکت خود را مشخص کنید"
                label="موضوع"
                name="title"
                additionalClass="my-4"
              />
              <Textarea
                helper="توضیحاتی از تیکت خود را در این قسمت وارد کنید تا کمک بهتری شود"
                label="توضیحات"
                className="my-4"
              />
              <Button size="sm" variant="primary" className="w-full my-4">
                افزودن فایل
              </Button>
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-6">
                  <Button size="sm" variant="main" className="w-full">
                    ثبت تیکت
                  </Button>
                </div>
                <div className="col-span-6">
                  <Button
                    onClick={() => setIsOpenCreate(false)}
                    size="sm"
                    variant="error"
                    className="w-full"
                  >
                    بازگشت
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {isOpenDetail && (
        <div className="fixed top-0 left-0 h-full w-full bg-neutral/50 flex justify-center items-end">
          <div className="w-full h-5/6 bg-white p-5 pb-0 flex flex-col justify-start items-start overflow-auto">
            <h1 className="font-bold text-base pb-2">
              نحوه دریافت مدرک روانشناسی در پزشک من
            </h1>
            <div className="flex-1 overflow-auto">
              <p className="text-sm leading-7">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <div className="mt-3 bg-main/10 p-5 text-sm">
                <h1 className="font-bold">پاسخ ادمین : </h1>
                <p className="mt-2 leading-7">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>
              <div className="mt-5">
                <h1 className="text-sm font-bold">
                  پیام های ایجاد شده در این تیکت
                </h1>
                <ul className="mt-5">
                  {[
                    'سلام چجوری میتونم در آزمون های روانشناسی شرکت بکنم ؟',
                    'نحوه دریافت مدرک روانشناسی در پزشک من',
                    'دلیل اینکه نمراتم اینقدر پایین شده چه چیزی میباشد',
                    'میشه اکانت من رو باز کنید خواهش میکنم من توش کلی دیتا داشتم',
                    'میتونم قسطی هم پرداخت کنم اطلاعات مختلف رو',
                  ].map((e) => (
                    <li
                      className="p-4 border my-5 rounded border-neutral/10"
                      key={e}
                    >
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
                        <Button
                          onClick={() => setIsOpenDetail(true)}
                          variant="main"
                          size="xs"
                        >
                          نمایش جزئیات تیکت
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="py-2 w-full grid grid-cols-12 gap-3">
              <div className="col-span-6">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full"
                  isOutline
                >
                  دانلود فایل پیوست
                </Button>
              </div>
              <div className="col-span-6">
                <Button
                  onClick={() => setIsOpenDetail(false)}
                  variant="error"
                  size="sm"
                  className="w-full"
                >
                  بستن جزئیات
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketsScreen;
