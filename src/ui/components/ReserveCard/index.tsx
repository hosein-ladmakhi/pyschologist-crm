import './index.css';

import Button from '@/ui/kits/Button';
import { FC } from 'react';
import { IReserveCardProps } from './index.type';
import { EGender } from '@/types/therapist.type';

const days = [
  'شنبه',
  'یک شنبه',
  'دوشنبه',
  'سه شنبه',
  'چهارشنبه',
  'پنجشنبه',
  'جمعه',
];

import jalaliMoment from 'jalali-moment';

const ReserveCard: FC<IReserveCardProps> = ({
  showStatus,
  reserve,
  handleOpenLocation,
}) => {
  return (
    <li className="reserve-card">
      <div className="reserve-card__content">
        <span className="reserve-card__title">پزشک</span>
        <span>
          {reserve?.therapist?.gender === EGender.female ? 'خانم' : 'آقا'}{' '}
          {reserve?.therapist?.firstName} {reserve?.therapist?.lastName}
        </span>
      </div>
      <div className="reserve-card__content">
        <span className="reserve-card__title">تاریخ</span>
        <span>{jalaliMoment(reserve.date).format('jYYYY-jMM-jDD')}</span>
      </div>
      <div className="reserve-card__content">
        <span className="reserve-card__title">ساعت</span>
        <span>
          {reserve.startHour} تا {reserve.endHour}
        </span>
      </div>
      <div className="reserve-card__content">
        <span className="reserve-card__title">روز</span>
        <span>{days[reserve?.day]}</span>
      </div>
      <div className="reserve-card__content">
        <span className="reserve-card__title">نوع برگزاری</span>
        <span>{reserve?.type}</span>
      </div>
      {showStatus && (
        <div className="reserve-card__content">
          <span className="reserve-card__title">وضعیت رزرو</span>
          <span>{reserve?.status}</span>
        </div>
      )}
      <div className="reserve-card__content">
        <span className="reserve-card__title">زمینه</span>
        <span>
          {reserve?.categories?.map((category) => category.faName).join(' , ')}
        </span>
      </div>
      <Button
        className="w-full mt-5"
        size="xs"
        variant="main"
        isOutline
        onClick={handleOpenLocation.bind(null, reserve)}
      >
        نمایش مکان
      </Button>
    </li>
  );
};

export default ReserveCard;
