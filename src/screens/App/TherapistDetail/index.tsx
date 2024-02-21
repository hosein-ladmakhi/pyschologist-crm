'use client';

import Button from '@/ui/kits/Button';
import Select from '@/ui/kits/Select';
import { Icon24Hours } from '@tabler/icons-react';
import Image from 'next/image';
import { useState } from 'react';

const dayOptions = [
  {
    text: 'شنبه',
    value: 1,
  },
  {
    text: 'یکشنبه',
    value: 2,
  },
  {
    text: 'دوشنبه',
    value: 3,
  },
  {
    text: 'سه شنبه',
    value: 4,
  },
  {
    text: 'چهارشنبه',
    value: 5,
  },
  {
    text: 'پنجشنبه',
    value: 6,
  },
  {
    text: 'جمعه',
    value: 7,
  },
];

const typeOptions = [
  {
    text: 'شیوه حضوری',
    value: 1,
  },
  {
    text: 'شیوه آنلاین',
    value: 2,
  },
];

const timeOptions = [
  {
    text: ' 08:00 تا 10:00',
    value: '08:00_10:00',
  },
  {
    text: ' 10:00 تا 12:00',
    value: '10:00_12:00',
  },
  {
    text: ' 12:00 تا 14:00',
    value: '12:00_14:00',
  },
  {
    text: ' 14:00 تا 16:00',
    value: '14:00_16:00',
  },
  {
    text: ' 16:00 تا 18:00',
    value: '16:00_18:00',
  },
  {
    text: ' 18:00 تا 20:00',
    value: '18:00_20:00',
  },
];

const dateOptions = [
  {
    text: '1403/01/01',
    value: '1403/01/01',
  },
  {
    text: '1403/01/02',
    value: '1403/01/02',
  },
  {
    text: '1403/01/03',
    value: '1403/01/03',
  },
  {
    text: '1403/01/04',
    value: '1403/01/04',
  },
  {
    text: '1403/01/05',
    value: '1403/01/05',
  },
  {
    text: '1403/01/06',
    value: '1403/01/06',
  },
  {
    text: '1403/01/07',
    value: '1403/01/07',
  },
  {
    text: '1403/01/08',
    value: '1403/01/08',
  },
  {
    text: '1403/01/09',
    value: '1403/01/09',
  },
  {
    text: '1403/01/10',
    value: '1403/01/10',
  },
  {
    text: '1403/01/11',
    value: '1403/01/11',
  },
  {
    text: '1403/01/12',
    value: '1403/01/12',
  },
  {
    text: '1403/01/13',
    value: '1403/01/13',
  },
  {
    text: '1403/01/14',
    value: '1403/01/14',
  },
  {
    text: '1403/01/15',
    value: '1403/01/15',
  },
  {
    text: '1403/01/16',
    value: '1403/01/16',
  },
  {
    text: '1403/01/17',
    value: '1403/01/17',
  },
];

const categories = {
  content: [
    {
      id: 18,
      faName: 'متخصص خون و آنکولوژی (سرطان)',
      enName: 'Hematologist and oncologist (cancer)',
      icon: '1708153998835-2001898.svg',
    },
    {
      id: 17,
      faName: 'متخصص بیماری های عفونی',
      enName: 'infectious disease specialist',
      icon: '1708154068254-2086171.svg',
    },
    {
      id: 16,
      faName: 'کلینیک ایمونولوژی و آلرژی (آسم و آلرژی)',
      enName: 'Immunology and Allergy Clinic (Asthma and Allergy)',
      icon: '1708154086521-2017092.svg',
    },
    {
      id: 15,
      faName: 'پزشک عمومی',
      enName: 'General practitioner',
      icon: '1708154105840-2089347.svg',
    },
    {
      id: 14,
      faName: 'متخصص و جراح گوش و حلق و بینی',
      enName: 'Ear, nose and throat specialist and surgeon',
      icon: '1708154148210-2091300.svg',
    },
    {
      id: 13,
      faName: 'جراح مغز و اعصاب',
      enName: 'Neurosurgeon',
      icon: '1708154166991-2041669.svg',
    },
    {
      id: 12,
      faName: 'کلینیک تغذیه و رژیم درمانی',
      enName: 'Nutrition and diet therapy clinic',
      icon: '1708154187617-2089136.svg',
    },
    {
      id: 11,
      faName: 'کلینیک گوارش و کبد',
      enName: 'Gastroenterology and Liver Clinic',
      icon: '1708154257413-2073863.svg',
    },
    {
      id: 10,
      faName: 'کلینیک غدد، رشد و متابولیسم',
      enName: 'Endocrine, Growth and Metabolism Clinic',
      icon: '1708154279941-2027666.svg',
    },
    {
      id: 9,
      faName: 'متخصص و جراح کلیه و مجاری ادراری (ارولوژی)',
      enName: 'Kidney and urinary tract specialist and surgeon (urology)',
      icon: '1708154304156-2033585.svg',
    },
  ],
  count: 18,
};

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
        <div className="fixed top-0 left-0 h-full w-full bg-neutral/50 flex justify-center items-end">
          <div className="w-full h-5/6 bg-white p-5 pb-0 flex flex-col justify-start items-start overflow-auto">
            <form className="w-full" action="">
              <Select
                emptyPlaceholder="روز رزرو را انتخاب کنید"
                label="روز های هفته"
                options={dayOptions}
                additionalClasses="mb-4"
              />
              <Select
                additionalClasses="mb-4"
                emptyPlaceholder="شیوه برگزاری جلسات را انتخاب کنید"
                label="شیوه برگزاری"
                options={typeOptions}
              />
              <Select
                additionalClasses="mb-4"
                emptyPlaceholder="ساعت رزرو خود را انتخاب کنید"
                label="ساعت های موجود"
                options={timeOptions}
              />
              <Select
                additionalClasses="mb-4"
                emptyPlaceholder="تاریخ برگزاری رزرو را انتخاب کنید"
                label="تاریخ های موجود"
                options={dateOptions}
              />
              <Select
                additionalClasses="mb-4"
                emptyPlaceholder="به چه دلیل به این جلسه نیاز دارید"
                label="دلیل دریافت نوبت"
                options={[...categories.content, ...categories.content].map(
                  (category) => ({
                    text: category.faName,
                    value: category.id,
                  }),
                )}
              />
              <Button variant="main" className="w-full !hidden">
                درخواست رزرو
              </Button>
            </form>
            <div className="grid grid-cols-12 gap-3 w-full">
              <div className="col-span-6">
                <Button variant="main" className="w-full">
                  درخواست رزرو
                </Button>
              </div>
              <div className="col-span-6">
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="error"
                  className="w-full"
                >
                  لغو درخواست
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TherapistDetailScreen;
