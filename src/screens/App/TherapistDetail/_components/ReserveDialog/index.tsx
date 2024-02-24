'use client';

import Select from '@/ui/kits/Select';
import {
  categories,
  dateOptions,
  dayOptions,
  timeOptions,
  typeOptions,
} from '../../FAKE_DATA.constant';
import Button from '@/ui/kits/Button';
import { FC } from 'react';
import { IReserveDialogProps } from './index.type';

const ReserveDialog: FC<IReserveDialogProps> = ({ handleClose }) => {
  return (
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
            <Button onClick={handleClose} variant="error" className="w-full">
              لغو درخواست
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveDialog;
