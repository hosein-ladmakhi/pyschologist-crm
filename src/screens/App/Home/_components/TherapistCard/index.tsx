'use client';

import './index.css';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ITherapistCardProps } from './index.type';

const TherapistCard: FC<ITherapistCardProps> = ({ therapist }) => {
  return (
    <div className="best-therapist">
      <div className="best-therapist__avatar">
        <Image
          src={`http://localhost:4000${therapist.image}`}
          fill
          alt="avatar"
          className="best-therapist__image"
        />
      </div>
      <h1 className="best-therapist__title">
        {therapist.firstName} {therapist.lastName}
      </h1>
      <p className="best-therapist__bio">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
      <p className="best-therapist__categories">
        <b>تخصص ها : </b>
        {['درمانگر', 'روانشناس', 'افسردگی', 'رواشناس فردی']
          .splice(0, 3)
          .map((text) => (
            <span className="best-therapist__item" key={text}>
              {text}
            </span>
          ))}
      </p>
      <Link
        href={`/therapists/${therapist.id}`}
        className="best-therapist__link"
      >
        جزئیات
      </Link>
    </div>
  );
};

export default TherapistCard;
