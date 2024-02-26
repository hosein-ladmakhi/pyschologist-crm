'use client';

import './index.css';

import { FC, useMemo } from 'react';
import { ITherapistsCategoryDialogProps } from './index.type';
import Button from '@/ui/kits/Button';
import TherapistCard from '../TherapistCard';
import { useSearchParams } from 'next/navigation';

const TherapistsCategoryDialog: FC<ITherapistsCategoryDialogProps> = ({
  category,
  handleClose,
  handleOpenFilter,
}) => {
  const searchParams = useSearchParams();
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const gender = searchParams.get('gender');
  const degreeOfEducation = searchParams.get('degreeOfEducation');

  const transformedTherapist = useMemo(() => {
    return category.therapists.filter((element) => {
      return (
        (!firstName || element.firstName === firstName) &&
        (!lastName || element.lastName === lastName) &&
        (!gender || element.gender === gender) &&
        (!degreeOfEducation || element.degreeOfEducation === degreeOfEducation)
      );
    });
  }, [firstName, lastName, gender, degreeOfEducation, category]);

  return (
    <div className="therapists-category-dialog">
      <div className="therapists-card">
        <h1 className="therapists-card__header">
          لیست پزشکان {category.faName}
        </h1>
        <div className="therapists-card__content">
          <ul className="therapists-card__list">
            {transformedTherapist.map((therapist) => (
              <TherapistCard key={therapist.id} therapist={therapist} />
            ))}
          </ul>
        </div>

        <div className="therapists-card__actions">
          <div className="therapists-card__action">
            <Button
              onClick={handleOpenFilter}
              variant="secondary"
              className="w-full"
              size="sm"
            >
              باز کردن فیلتر
            </Button>
          </div>
          <div className="therapists-card__action">
            <Button
              onClick={handleClose}
              className="w-full"
              variant="error"
              size="sm"
            >
              بستن جزئیات
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistsCategoryDialog;
