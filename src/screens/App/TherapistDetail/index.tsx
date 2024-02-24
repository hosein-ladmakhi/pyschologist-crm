'use client';

import Button from '@/ui/kits/Button';
import Select from '@/ui/kits/Select';
import { Icon24Hours } from '@tabler/icons-react';
import Image from 'next/image';
import { Suspense, useState } from 'react';
import { categories } from './FAKE_DATA.constant';
import dynamic from 'next/dynamic';

const ReserveDialog = dynamic(() => import('./_components/ReserveDialog'));

const TherapistDetailScreen = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="container">
      <div className="flex justify-start flex-col items-center gap-2">
        <div className="h-28 w-28 relative">
          <Image
            src="https://file.drsaina.com/image/Profile/90c7c083-53d4-4ece-bf3c-9a035d57de48/160.jpg"
            alt="therapist"
            fill
            className="object-cover object-center rounded"
          />
        </div>
        <h1 className="text-lg font-bold mt-1">حسین لادمخی نژاد</h1>
        <Button
          onClick={() => setIsOpen(true)}
          variant="main"
          size="sm"
          className="w-full font-bold"
        >
          <Icon24Hours stroke={2} />
          رزرو جدید
        </Button>
      </div>
      <div className="mt-5">
        <h1 className="text-base font-bold">مدرک تحصیلی این پزشک</h1>
        <span className="text-sm">فوق لیسانس</span>
      </div>
      <div className="mt-5">
        <h1 className="text-base font-bold">جنسیت این پزشک</h1>
        <span className="text-sm">آقا</span>
      </div>
      <div className="mt-5">
        <h1 className="text-base font-bold">توضیحات این پزشک</h1>
        <p className="text-sm leading-6 mt-1">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="text-base font-bold">تخصص های این پزشک</h1>
        <div className="flex justify-start items-center flex-wrap gap-3 mt-3">
          {categories.content.map((category) => (
            <span
              className="text-xs bg-main/80 text-white px-2 py-1 rounded-full"
              key={category.id}
            >
              {category.faName}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-base font-bold">ساعت کاری این پزشک</h1>
        <div className="mt-2">
          <ul className="flex flex-nowrap w-full overflow-auto whitespace-nowrap gap-4 pb-5">
            {[
              'شنبه',
              'یک شنبه',
              'دوشنبه',
              'سه شنبه',
              'چهارشنبه',
              'پنجشنبه',
              'جمعه',
            ].map((day) => (
              <li
                className="text-sm first:bg-main first:text-white px-4 py-1 rounded"
                key={day}
              >
                {day}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-12 gap-4 mt-5">
            {[
              { startTime: '08:00', endTime: '10:00' },
              { startTime: '10:00', endTime: '12:00' },
              { startTime: '12:00', endTime: '14:00' },
              { startTime: '14:00', endTime: '16:00' },
              { startTime: '16:00', endTime: '18:00' },
              { startTime: '18:00', endTime: '20:00' },
              { startTime: '20:00', endTime: '22:00' },
              { startTime: '22:00', endTime: '24:00' },
            ].map((element) => (
              <div className="col-span-6 text-center border border-neutral/10 p-4 rounded">
                <h1 className="text-xs">ساعت شروع : {element.startTime}</h1>
                <h1 className="text-xs">ساعت پایان : {element.endTime}</h1>
                <h1 className="text-xs">نوع برگزاری : حضوری</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <Suspense fallback={<></>}>
          <ReserveDialog handleClose={() => setIsOpen(false)} />
        </Suspense>
      )}
    </div>
  );
};

export default TherapistDetailScreen;
