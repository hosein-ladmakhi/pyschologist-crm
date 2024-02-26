'use client';

import './index.css';

import Link from 'next/link';
import { FC } from 'react';
import { ITherapistCardProps } from './index.type';
import classNames from 'classnames';
import Image from '@/ui/kits/Image';
import { IconUser, IconUserBolt } from '@tabler/icons-react';
import { colorThemes } from '@/constants/color-theme.constant';

const NotFoundImage = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-main/10 rounded flex justify-center items-center">
      <IconUserBolt size="35px" color={colorThemes.main} />
    </div>
  );
};

const TherapistCard: FC<ITherapistCardProps> = ({
  isTitleBold = true,
  size = 'sm',
  therapist,
}) => {
  return (
    <li className="therapist-card">
      <Link
        href={`/therapists/${therapist.id}`}
        className="therapist-card__link"
      >
        <div className="therapist-card__avatar">
          <Image
            src={`http://localhost:4000${therapist.image}`}
            alt="category-therapist"
            fill
            className="therapist-card__img"
            notFoundLoader={<NotFoundImage />}
          />
        </div>
        <h1
          className={classNames('therapist-card__title', {
            'therapist-card__title--bold': isTitleBold,
            'therapist-card__title--normal': size === 'md',
          })}
        >
          {therapist.firstName} {therapist.lastName}
        </h1>
      </Link>
    </li>
  );
};

export default TherapistCard;
