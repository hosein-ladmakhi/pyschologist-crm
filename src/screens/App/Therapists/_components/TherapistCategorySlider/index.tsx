'use client';

import './index.css';

import { FC } from 'react';
import { ITherapistCategorySliderProps } from './index.type';
import { IconCaretLeftFilled } from '@tabler/icons-react';

// slider css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactSlick from 'react-slick';
import TherapistCard from '@/ui/components/TherapistCard';

const TherapistCategorySlider: FC<ITherapistCategorySliderProps> = ({
  category,
  handleOpenDialog,
}) => {
  return (
    <div className="therapist-category-slider">
      <div className="card">
        <h1 className="card__title">{category.faName}</h1>
        <div
          onClick={handleOpenDialog.bind(null, category)}
          className="card__icon"
        >
          <IconCaretLeftFilled size="20px" />
        </div>
      </div>
      {category.therapists.length > 0 ? (
        <ReactSlick
          slide="ul"
          infinite={false}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay
        >
          {category.therapists.map((therapist) => (
            <TherapistCard
              therapist={therapist}
              key={therapist.id}
              variant="minial"
            />
          ))}
        </ReactSlick>
      ) : (
        <div>
          <p className="text-sm">پزشکی یافت نشد</p>
        </div>
      )}
    </div>
  );
};

export default TherapistCategorySlider;
