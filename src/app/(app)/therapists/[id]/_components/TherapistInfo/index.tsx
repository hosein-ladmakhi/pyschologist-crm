'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import { Icon24Hours } from '@tabler/icons-react';
import Image from 'next/image';
import { FC } from 'react';
import { ITherapistInfoProps } from './index.type';
import {
  transformDegreeOfEducation,
  transformGender,
} from '@/utils/enum-transformer';
import { useIsAuthenticated } from '@/hooks/useIsAuthenticated';
import { useTherapistDetailContext } from '../../_context/therapist-detail-context';

const TherapistInfo: FC<ITherapistInfoProps> = ({ therapist }) => {
  const { handleOpenReserveDialog } = useTherapistDetailContext();
  const isAuthCurrentUser = useIsAuthenticated();
  return (
    <div className="therapist-info">
      <div className="therapist-info__main">
        <div className="therapist-info__avatar">
          <Image
            src={`https://pyschologist-api.liara.run${therapist.image}`}
            alt="therapist"
            fill
            className="therapist-info__img"
          />
        </div>
        <h1 className="therapist-info__title">
          {therapist.firstName} {therapist.lastName}
        </h1>
        <Button
          onClick={handleOpenReserveDialog}
          variant="main"
          size="sm"
          className="therapist-info__btn"
          disabled={!isAuthCurrentUser}
        >
          <Icon24Hours stroke={2} />
          رزرو جدید
        </Button>
      </div>
      <div className="therapist-info__info">
        <h1 className="therapist-info__subtitle">مدرک تحصیلی این پزشک</h1>
        <span className="therapist-info__text">
          {transformDegreeOfEducation(therapist.degreeOfEducation)}
        </span>
      </div>
      <div className="therapist-info__info">
        <h1 className="therapist-info__subtitle">جنسیت این پزشک</h1>
        <span className="therapist-info__text">
          {transformGender(therapist.gender)}
        </span>
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
