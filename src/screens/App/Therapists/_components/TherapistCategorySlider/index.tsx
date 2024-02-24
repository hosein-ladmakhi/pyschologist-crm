'use client';

import './index.css';

import { FC } from 'react';
import { ITherapistCategorySliderProps } from './index.type';
import { IconCaretLeftFilled } from '@tabler/icons-react';

// slider css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactSlick from 'react-slick';

import TherapistCard from '../TherapistCard';

const TherapistCategorySlider: FC<ITherapistCategorySliderProps> = ({
  category,
  handleOpenDialog,
}) => {
  return (
    <div className="therapist-category-slider">
      <div className="card">
        <h1 className="card__title">{category.faName}</h1>
        <div onClick={handleOpenDialog} className="card__icon">
          <IconCaretLeftFilled size="20px" />
        </div>
      </div>
      <ReactSlick
        slide="ul"
        infinite={false}
        slidesToShow={3}
        slidesToScroll={3}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <TherapistCard size="md" key={i} isTitleBold={false} />
        ))}
      </ReactSlick>
    </div>
  );
};

export default TherapistCategorySlider;
