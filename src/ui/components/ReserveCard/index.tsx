import './index.css';

import Button from '@/ui/kits/Button';
import { FC } from 'react';
import { IReserveCardProps } from './index.type';
const ReserveCard: FC<IReserveCardProps> = ({
  onOpenLocationDialog,
  showStatus,
}) => {
  return (
    <li className="reserve-card">
      <div className="reserve-card__content">
        <span className="reserve-card__title">پزشک</span>
        <span>حسین لادمخی نژاد</span>
      </div>
      <div className="reserve-card__content">
        <span className="reserve-card__title">تاریخ</span>
        <span>1402-01-01</span>
      </div>
      <div className="reserve-card__content">
        <span className="reserve-card__title">ساعت</span>
        <span>08:00 تا 10:00</span>
      </div>
      <div className="reserve-card__content">
        <span className="reserve-card__title">روز</span>
        <span>یک شنبه</span>
      </div>
      <div className="reserve-card__content">
        <span className="reserve-card__title">نوع برگزاری</span>
        <span>حضوری</span>
      </div>
      {showStatus && (
        <div className="reserve-card__content">
          <span className="reserve-card__title">وضعیت رزرو</span>
          <span>کنسل شده</span>
        </div>
      )}
      <div className="reserve-card__content">
        <span className="reserve-card__title">زمینه</span>
        <span>افسردگی و زوج درمانی</span>
      </div>
      <Button
        className="w-full mt-5"
        size="xs"
        variant="main"
        isOutline
        onClick={onOpenLocationDialog}
      >
        نمایش مکان
      </Button>
    </li>
  );
};

export default ReserveCard;
