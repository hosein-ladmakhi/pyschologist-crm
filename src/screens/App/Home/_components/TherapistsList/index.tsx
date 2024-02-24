'use client';

import './index.css';

import { FC } from 'react';
import HomeHeader from '../HomeHeader';
import TherapistCard from '../TherapistCard';

const TherapistsList: FC = () => {
  return (
    <div className="best-therapists">
      <HomeHeader
        content="بیش از 2500 پزشک آماده پاسخگویی به شما هستند"
        title="گفتگو و مشاوره با بهترین مختصصین"
      />
      <div className="best-therapists__list">
        {Array.from({ length: 10 }).map((_, i) => (
          <TherapistCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default TherapistsList;
