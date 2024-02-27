'use client';

import './index.css';

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
import { useForm } from 'react-hook-form';

const ReserveDialog: FC<IReserveDialogProps> = ({ handleClose }) => {
  const { control } = useForm();
  return (
    <div className="reserve-dialog">
      <div className="reserve-dialog__card">
        <form className="reserve-dialog__form" action="">
          <Select
            name="day"
            control={control}
            emptyPlaceholder="روز رزرو را انتخاب کنید"
            label="روز های هفته"
            options={dayOptions}
            additionalClasses="reserve-dialog__form-item"
          />
          <Select
            additionalClasses="reserve-dialog__form-item"
            emptyPlaceholder="شیوه برگزاری جلسات را انتخاب کنید"
            label="شیوه برگزاری"
            options={typeOptions}
            name="day"
            control={control}
          />
          <Select
            additionalClasses="reserve-dialog__form-item"
            emptyPlaceholder="ساعت رزرو خود را انتخاب کنید"
            label="ساعت های موجود"
            options={timeOptions}
            name="day"
            control={control}
          />
          <Select
            additionalClasses="reserve-dialog__form-item"
            emptyPlaceholder="تاریخ برگزاری رزرو را انتخاب کنید"
            label="تاریخ های موجود"
            options={dateOptions}
            name="day"
            control={control}
          />
          <Select
            name="day"
            control={control}
            additionalClasses="reserve-dialog__form-item"
            emptyPlaceholder="به چه دلیل به این جلسه نیاز دارید"
            label="دلیل دریافت نوبت"
            options={[...categories.content, ...categories.content].map(
              (category) => ({
                text: category.faName,
                value: category.id,
              }),
            )}
          />
        </form>
        <div className="reserve-dialog__actions">
          <div className="reserve-dialog__action">
            <Button variant="main" className="reserve-dialog__btn">
              درخواست رزرو
            </Button>
          </div>
          <div className="reserve-dialog__action">
            <Button
              onClick={handleClose}
              variant="error"
              className="reserve-dialog__btn"
            >
              لغو درخواست
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveDialog;
