'use client';

import './index.css';

import Select from '@/ui/kits/Select';
import Button from '@/ui/kits/Button';
import { FC, useEffect, useState } from 'react';
import { IReserveDialogProps } from './index.type';
import { useForm } from 'react-hook-form';
import { ITherapistSchedulesPerDay } from '@/types/therapist-schedule.type';
import moment from 'jalali-moment';

const days = [
  'شنبه',
  'یک شنبه',
  'دوشنبه',
  'سه شنبه',
  'چهارشنبه',
  'پنجشنبه',
  'جمعه',
];

const ReserveDialog: FC<IReserveDialogProps> = ({
  handleClose,
  schedules,
  therapistId,
  categories,
}) => {
  const { control, watch } = useForm();
  const [dates, setDates] = useState<string[]>([]);

  const dayOptions = [
    ...new Set(schedules.map((schedule) => schedule.day)),
  ].map((element) => ({ text: days[element], value: element }));

  const selectedDaySchedule: ITherapistSchedulesPerDay | undefined =
    schedules.find((schedule) => schedule.day === watch('day'));

  const typeOptions = [
    ...new Set(selectedDaySchedule?.items?.map((element) => element.type)),
  ].map((element) => ({ text: element, value: element }));

  const selectedScheduleOptions = [
    ...new Set(
      selectedDaySchedule?.items
        ?.filter((element) => element.type === watch('type'))
        ?.map((element) => `${element.startHour}_${element.endHour}`),
    ),
  ].map((element) => ({ text: element, value: element }));

  useEffect(() => {
    if (watch('time' && watch('day'))) {
      const time = watch('time');
      fetch(
        `http://localhost:4000/orders/reservation-date/${watch(
          'day',
        )}/${therapistId}/${time}`,
      )
        .then((res) => res.json())
        .then((res) => {
          setDates(res.dates);
        });
    }
  }, [watch('time'), therapistId, watch('day')]);

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
            name="type"
            control={control}
          />
          <Select
            additionalClasses="reserve-dialog__form-item"
            emptyPlaceholder="ساعت رزرو خود را انتخاب کنید"
            label="ساعت های موجود"
            options={selectedScheduleOptions}
            name="time"
            control={control}
          />
          <Select
            additionalClasses="reserve-dialog__form-item"
            emptyPlaceholder="تاریخ برگزاری رزرو را انتخاب کنید"
            label="تاریخ های موجود"
            options={
              dates?.map((date) => ({
                text: moment(date).format('jYYYY-jMM-jDD'),
                value: date,
              })) || []
            }
            name="date"
            control={control}
          />
          <Select
            name="categories"
            control={control}
            additionalClasses="reserve-dialog__form-item"
            emptyPlaceholder="به چه دلیل به این جلسه نیاز دارید"
            label="دلیل دریافت نوبت"
            options={categories.map((category) => ({
              text: category.faName,
              value: category.id,
            }))}
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
