'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import { Icon24Hours } from '@tabler/icons-react';
import Image from 'next/image';
import { FC } from 'react';
import { ITherapistInfoProps } from './index.type';
import { useSession } from 'next-auth/react';

const TherapistInfo: FC<ITherapistInfoProps> = ({
  handleOpenReserve,
  therapist,
}) => {
  const session = useSession();
  return (
    <div className="therapist-info">
      <div className="therapist-info__main">
        <div className="therapist-info__avatar">
          <Image
            src={`http://localhost:4000${therapist.image}`}
            alt="therapist"
            fill
            className="therapist-info__img"
          />
        </div>
        <h1 className="therapist-info__title">
          {therapist.firstName} {therapist.lastName}
        </h1>
        <Button
          onClick={handleOpenReserve}
          variant="main"
          size="sm"
          className="therapist-info__btn"
          disabled={session.status !== 'authenticated'}
        >
          <Icon24Hours stroke={2} />
          رزرو جدید
        </Button>
      </div>
      <div className="therapist-info__info">
        <h1 className="therapist-info__subtitle">مدرک تحصیلی این پزشک</h1>
        <span className="therapist-info__text">
          {therapist.degreeOfEducation}
        </span>
      </div>
      <div className="therapist-info__info">
        <h1 className="therapist-info__subtitle">جنسیت این پزشک</h1>
        <span className="therapist-info__text">{therapist.gender}</span>
      </div>
      <div className="therapist-info__info">
        <h1 className="therapist-info__subtitle">توضیحات این پزشک</h1>
        <p className="therapist-info__bio">{therapist.bio}</p>
      </div>
      <div className="therapist-info__info">
        <h1 className="therapist-info__subtitle">تخصص های این پزشک</h1>
        <div className="therapist-info__badges">
          {therapist.workingFields.map((category) => (
            <span className="therapist-info__badge" key={category.id}>
              {category.faName}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TherapistInfo;
