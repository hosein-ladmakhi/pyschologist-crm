'use client';

import { FC } from 'react';
import { ITherapistsScreenProps } from './index.type';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactSlick from 'react-slick';
import Image from 'next/image';

const TherapistsScreen: FC<ITherapistsScreenProps> = ({ categories }) => {
  return (
    <div className="container">
      {categories.map((category: any) => (
        <div key={category.id}>
          <h1 className="text-sm font-bold">{category.faName}</h1>
          <ReactSlick infinite={false} slidesToShow={3} slidesToScroll={3}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="p-5">
                <div className="flex justify-center items-center flex-col">
                  <div className="h-20 w-20 relative">
                    <Image
                      src="https://file.drsaina.com/image/Profile/90c7c083-53d4-4ece-bf3c-9a035d57de48/160.jpg"
                      alt="category-therapist"
                      fill
                      className="object-cover object-center rounded"
                    />
                  </div>
                  <h1 className="text-xs text-center mt-2">حسین لادمخی نژاد</h1>
                </div>
              </div>
            ))}
          </ReactSlick>
        </div>
      ))}
    </div>
  );
};

export default TherapistsScreen;
