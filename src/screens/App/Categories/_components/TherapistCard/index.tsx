'use client';

import './index.css';

import Link from 'next/link';
import { FC } from 'react';
import { ITherapistCardProps } from './index.type';
import Image from '@/ui/kits/Image';

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
