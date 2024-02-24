'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import { FC } from 'react';
import { ILocationDialogProps } from './index.type';
import { motion } from 'framer-motion';
import { RESERVE_LOCATION_DIALOG_ANIMATION } from './index.animation';

const LocationDialog: FC<ILocationDialogProps> = ({ onClose }) => {
  return (
    <motion.div
      {...RESERVE_LOCATION_DIALOG_ANIMATION}
      className="reserve-location"
    >
      <div className="reserve-location__content">
        <div className="reserve-location__item">
          <h1 className="reserve-location__title">شهر</h1>
          <p className="reserve-location__desc">تهران</p>
        </div>
        <div className="reserve-location__item">
          <h1 className="reserve-location__title">آدرس دقیق</h1>
          <p className="reserve-location__desc">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
          </p>
        </div>
        <div className="reserve-location__item">
          <h1 className="reserve-location__title">اتاق</h1>
          <p className="reserve-location__desc">شماره 4</p>
        </div>
        <Button
          variant="error"
          className="w-full mt-5"
          onClick={onClose}
          size="sm"
        >
          بستن آدرس
        </Button>
      </div>
    </motion.div>
  );
};

export default LocationDialog;