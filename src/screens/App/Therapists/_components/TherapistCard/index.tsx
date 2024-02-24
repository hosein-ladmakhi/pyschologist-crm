'use client';

import './index.css';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ITherapistCardProps } from './index.type';
import classNames from 'classnames';

const TherapistCard: FC<ITherapistCardProps> = ({
  isTitleBold = true,
  size = 'sm',
}) => {
  return (
    <li className="therapist-card">
      <Link href="/therapists/1" className="therapist-card__link">
        <div className="therapist-card__avatar">
          <Image
            src="https://file.drsaina.com/image/Profile/90c7c083-53d4-4ece-bf3c-9a035d57de48/160.jpg"
            alt="category-therapist"
            fill
            className="therapist-card__img"
          />
        </div>
        <h1
          className={classNames('therapist-card__title', {
            'therapist-card__title--bold': isTitleBold,
            'therapist-card__title--normal': size === 'md',
          })}
        >
          حسین لادمخی نژاد
        </h1>
      </Link>
    </li>
  );
};

export default TherapistCard;
