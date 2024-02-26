'use client';

import './index.css';

import { FC } from 'react';
import { ICategoryCardProps } from './index.type';
import Link from 'next/link';
import Image from 'next/image';

const CategoryCard: FC<ICategoryCardProps> = ({ category }) => {
  return (
    <li className="category-card">
      <Link href="/" className="category-card__link">
        <div className="category-card__avatar">
          <Image
            alt="icon"
            src={`http://localhost:4000/upload/${category.icon}`}
            fill
          />
        </div>
        <div>
          <h1 className="category-card__title">{category.faName}</h1>
          <p className="category-card__desc">
            تعداد پزشکان متخصص : {category.therapists.length} نفر
          </p>
        </div>
      </Link>
    </li>
  );
};

export default CategoryCard;
