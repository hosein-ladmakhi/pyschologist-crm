'use client';

import './index.css';

import { FC } from 'react';
import HomeHeader from '../HomeHeader';
import { ITherapistsListProps } from './index.type';
import TherapistCard from '@/ui/components/TherapistCard';

const TherapistsList: FC<ITherapistsListProps> = ({ therapists }) => {
  return (
    <div className="best-therapists">
      <HomeHeader
        content="بیش از 2500 پزشک آماده پاسخگویی به شما هستند"
        title="گفتگو و مشاوره با بهترین مختصصین"
      />
      <div className="best-therapists__list">
        {therapists.map((therapist) => (
          <TherapistCard
            therapist={therapist}
            variant="vertical"
            key={therapist.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TherapistsList;
