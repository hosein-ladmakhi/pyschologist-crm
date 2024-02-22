'use client';

import './index.css';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const HomeBestTherapistCard: FC = () => {
  return (
    <div className="best-therapist card">
      <div className="avatar-container">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQic9HKxc7De7FhFt6OLu3JGC-MRb_UpsuSdw&usqp=CAU"
          fill
          alt="avatar"
          className="avatar"
        />
      </div>
      <h1 className="title">حسین لادمخی تژاد</h1>
      <p className="bio">
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
      <p className="categories">
        <b>تخصص ها : </b>
        {['درمانگر', 'روانشناس', 'افسردگی', 'رواشناس فردی']
          .splice(0, 3)
          .map((text) => (
            <span className="category-item" key={text}>
              {text}
            </span>
          ))}
      </p>
      <Link href="/" className="detail-link">
        جزئیات
      </Link>
    </div>
  );
};

export default HomeBestTherapistCard;
