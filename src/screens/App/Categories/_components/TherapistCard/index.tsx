'use client';

import './index.css';

import Link from 'next/link';
import { FC } from 'react';
import { ITherapistCardProps } from './index.type';
import Image from '@/ui/kits/Image';
import { IconUserBolt } from '@tabler/icons-react';
import { colorThemes } from '@/constants/color-theme.constant';

const NotFoundImage = () => {
  return (
    <div className="flex justify-center items-center w-full bg-main/10 absolute top-0 left-0 h-full rounded">
      <IconUserBolt size="35px" color={colorThemes.main} />
    </div>
  );
};

const TherapistCard: FC<ITherapistCardProps> = ({ therapist }) => {
  return (
    <li className="therapist-card">
      <Link
        className="therapist-card__content"
        href={`/therapists/${therapist.id}`}
      >
        <div className="therapist-card__avatar">
          <Image
            src={`http://localhost:4000${therapist.image}`}
            alt="therapist image"
            fill
            className="therapist-card__img"
            notFoundLoader={<NotFoundImage />}
          />
        </div>
        <div className="therapist-card__body">
          <h1 className="therapist-card__title">
            {therapist.firstName} {therapist.lastName}
          </h1>
          <p className="therapist-card__desc">{therapist.bio}</p>
          <p className="therapist-card__subdesc">
            تعداد مشاوره های موفق : {therapist.patientOrders?.length || 0} جلسه
          </p>
        </div>
      </Link>
    </li>
  );
};

export default TherapistCard;
