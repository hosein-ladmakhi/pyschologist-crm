'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import { FC } from 'react';
import { ICategoryDetailDialogProps } from './index.type';
import TherapistCard from '../TherapistCard';
import CategoryCard from '../CategoryCard';

const CategoryDetailDialog: FC<ICategoryDetailDialogProps> = ({
  category,
  onClose,
}) => {
  return (
    <div className="category-detail">
      <div className="category-detail__content">
        <CategoryCard category={category} onOpenCategoryDetail={() => {}} />
        <ul className="category-detail__list">
          {Array.from({ length: 10 }).map((_, i) => (
            <TherapistCard key={i} />
          ))}
        </ul>
        <div className="category-detail__actions">
          <Button
            variant="error"
            onClick={onClose}
            size="sm"
            className="w-full"
          >
            بستن جزئیات
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailDialog;
