import './index.css';

import { FC } from 'react';
import { ITherapistsListProps } from './index.type';
import TherapistCard from '@/ui/components/TherapistCard';
import { fetchTherapistsApi } from '@/services/therapists';

const TherapistsList: FC<ITherapistsListProps> = async () => {
  const therapists = await fetchTherapistsApi();
  return (
    <div className="best-therapist-list">
      {therapists?.content?.map((therapist) => (
        <TherapistCard
          therapist={therapist}
          variant="vertical"
          key={therapist.id}
        />
      ))}
    </div>
  );
};

export default TherapistsList;
