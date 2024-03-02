'use client';

import './index.css';

import Image from 'next/image';
import { FC } from 'react';
import { ICaregoryCardProps } from './index.type';

const CategoryCard: FC<ICaregoryCardProps> = ({
  category,
  handleOpenCategory,
}) => {
  return (
    <div
      onClick={handleOpenCategory.bind(null, category)}
      key={category.id}
      className="category-card"
    >
      <div className="category-card__content">
        <div className="category-card__image">
          <Image
            fill
            alt={`icon-${category.enName}`}
            src={`https://pyschologist-api.liara.run/upload/${category.icon}`}
          />
        </div>
        <h1 className="category-card__title">{category.faName}</h1>
      </div>
    </div>
  );
};

export default CategoryCard;
