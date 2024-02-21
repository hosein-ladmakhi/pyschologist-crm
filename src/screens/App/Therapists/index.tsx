'use client';

import { FC, useState } from 'react';
import { ITherapistsScreenProps } from './index.type';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactSlick from 'react-slick';
import Image from 'next/image';
import { IconCaretLeftFilled } from '@tabler/icons-react';
import Button from '@/ui/kits/Button';
import Input from '@/ui/kits/Input';
import { useForm } from 'react-hook-form';
import Select from '@/ui/kits/Select';

const TherapistsScreen: FC<ITherapistsScreenProps> = ({ categories }) => {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const { control } = useForm();

  return (
    <div className="container">
      {categories.map((category: any) => (
        <div key={category.id}>
          <div className="flex justify-between items-center">
            <h1 className="text-sm font-bold">{category.faName}</h1>
            <div
              onClick={() => setIsOpenDetail(true)}
              className="h-10 w-10 flex justify-center items-center"
            >
              <IconCaretLeftFilled size="20px" />
            </div>
          </div>
          <ReactSlick infinite={false} slidesToShow={3} slidesToScroll={3}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="p-5">
                <div className="flex justify-center items-center flex-col">
                  <div className="h-20 w-20 relative">
                    <Image
                      src="https://file.drsaina.com/image/Profile/90c7c083-53d4-4ece-bf3c-9a035d57de48/160.jpg"
                      alt="category-therapist"
                      fill
                      className="object-cover object-center rounded"
                    />
                  </div>
                  <h1 className="text-xs text-center mt-2">حسین لادمخی نژاد</h1>
                </div>
              </div>
            ))}
          </ReactSlick>
        </div>
      ))}

      {isOpenDetail && (
        <div className="fixed top-0 left-0 h-full w-full bg-neutral/50 flex justify-center items-end">
          <div className="w-full h-5/6 bg-white p-5 pb-0 flex flex-col justify-start items-start">
            <h1 className="text-sm font-bold">
              لیست پزشکان {categories[0].faName}
            </h1>

            <div className="grid grid-cols-12 gap-3 mt-5 overflow-auto w-full flex-1">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="col-span-4">
                  <div className="flex justify-center items-center flex-col">
                    <div className="h-20 w-20 relative">
                      <Image
                        src="https://file.drsaina.com/image/Profile/90c7c083-53d4-4ece-bf3c-9a035d57de48/160.jpg"
                        alt="category-therapist"
                        fill
                        className="object-cover object-center rounded"
                      />
                    </div>
                    <h1 className="text-xs mt-2 font-bold">حسین لادمخی نژاد</h1>
                  </div>
                </div>
              ))}
            </div>

            <div className="py-2 w-full">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-6">
                  <Button
                    onClick={() => setIsOpenFilter(true)}
                    variant="secondary"
                    className="w-full"
                    size="sm"
                  >
                    باز کردن فیلتر
                  </Button>
                </div>
                <div className="col-span-6">
                  <Button
                    onClick={() => setIsOpenDetail(false)}
                    className="w-full"
                    variant="error"
                    size="sm"
                  >
                    بستن جزئیات
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isOpenFilter && (
        <div className="fixed top-0 left-0 h-full w-full bg-neutral/50 flex justify-center items-end">
          <div className="w-full h-5/6 bg-white p-5 pb-0 flex flex-col justify-start items-start">
            <h1 className="text-sm font-bold">فیلتر پزشکان</h1>
            <form action="" className="w-full flex-1 mt-4 overflow-auto">
              <Input
                name="firstName"
                control={control}
                helperText=""
                label="نام"
                additionalClass="my-3"
              />
              <Input
                name="lastName"
                control={control}
                helperText=""
                label="نام خانوادگی"
                additionalClass="my-3"
              />
              <Select
                emptyPlaceholder="جنسیت پزشک"
                label="جنسیت"
                additionalClasses="my-3"
                options={[
                  {
                    text: 'پزشک آقا',
                    value: 1,
                  },
                  {
                    text: 'پزشک خانم',
                    value: 2,
                  },
                ]}
              />
              <Select
                emptyPlaceholder="مدرک تحصیلی پزشک"
                label="مدرک تحصیلی"
                additionalClasses="my-3"
                options={[
                  {
                    text: 'دیپلم',
                    value: 1,
                  },
                  {
                    text: 'فوق دیپلم',
                    value: 2,
                  },
                  {
                    text: 'لیسانس',
                    value: 3,
                  },
                  {
                    text: 'ارشد',
                    value: 4,
                  },
                  {
                    text: 'دکترا',
                    value: 4,
                  },
                ]}
              />
            </form>
            <div className="py-2 w-full grid grid-cols-12 gap-3">
              <div className="col-span-6">
                <Button
                  onClick={() => setIsOpenFilter(false)}
                  className="w-full"
                  variant="main"
                  size="sm"
                >
                  اعمال فیلتر
                </Button>
              </div>
              <div className="col-span-6">
                <Button
                  onClick={() => setIsOpenFilter(false)}
                  className="w-full"
                  variant="error"
                  size="sm"
                >
                  بستن فیلتر
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TherapistsScreen;
