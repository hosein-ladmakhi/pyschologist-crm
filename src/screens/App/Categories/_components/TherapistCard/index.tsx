'use client';

import './index.css';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const TherapistCard: FC = () => {
  return (
    <li className="therapist-card">
      <Link className="therapist-card__content" href="/">
        <div className="therapist-card__avatar">
          <Image
            src="https://file.drsaina.com/image/Profile/90c7c083-53d4-4ece-bf3c-9a035d57de48/160.jpg"
            alt="therapist image"
            fill
            className="therapist-card__img"
          />
        </div>
        <div className="therapist-card__body">
          <h1 className="therapist-card__title">دکتر سارا منافی افخم</h1>
          <p className="therapist-card__desc">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <p className="therapist-card__subdesc">
            تعداد مشاوره های موفق : 1523 جلسه
          </p>
        </div>
      </Link>
    </li>
  );
};

export default TherapistCard;
