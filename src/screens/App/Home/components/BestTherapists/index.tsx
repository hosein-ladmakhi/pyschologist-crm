'use client';

import { FC } from 'react';
import HomeSectionHeader from '../SectionHeader';
import HomeBestTherapistCard from '../BestTherapistCard';

const HomeBestTherapists: FC = () => {
  return (
    <div className="container">
      <HomeSectionHeader
        content="بیش از 2500 پزشک آماده پاسخگویی به شما هستند"
        title="گفتگو و مشاوره با بهترین مختصصین"
      />
      <div className="grid grid-cols-12 gap-6 mt-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <HomeBestTherapistCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default HomeBestTherapists;
