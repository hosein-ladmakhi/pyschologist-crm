'use client';

import './index.css';

import { FC } from 'react';
import { ITherapistsCategoryDialogProps } from './index.type';
import Button from '@/ui/kits/Button';
import TherapistCard from '../TherapistCard';

const TherapistsCategoryDialog: FC<ITherapistsCategoryDialogProps> = ({
  category,
  handleClose,
  handleOpenFilter,
}) => {
  return (
    <div className="therapists-category-dialog">
      <div className="therapists-card">
        <h1 className="therapists-card__header">
          لیست پزشکان {category.faName}
        </h1>

        <ul className="therapists-card__list">
          {Array.from({ length: 20 }).map((_, i) => (
            <TherapistCard key={i} />
          ))}
        </ul>

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
