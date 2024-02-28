import { FC } from 'react';
import MinimalTherapistCard from './_components/MinimalTherapistCard';
import VerticalTherapistCard from './_components/VerticalTherapistCard';
import HorizontalTherapistCard from './_components/HorizontalTherapistCard';
import { ITherapistCard } from './index.type';

const TherapistCard: FC<ITherapistCard> = ({ therapist, variant }) => {
  switch (variant) {
    case 'horizonal':
      return <HorizontalTherapistCard therapist={therapist} />;
    case 'minial':
      return <MinimalTherapistCard therapist={therapist} />;
    case 'vertical':
      return <VerticalTherapistCard therapist={therapist} />;
  }
};

export default TherapistCard;
