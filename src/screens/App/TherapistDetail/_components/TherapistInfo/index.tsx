'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import { Icon24Hours } from '@tabler/icons-react';
import Image from 'next/image';
import { FC } from 'react';
import { categories } from '../../FAKE_DATA.constant';
import { ITherapistInfoProps } from './index.type';

const TherapistInfo: FC<ITherapistInfoProps> = ({ handleOpenReserve }) => {
  return (
    <div className="therapist-info">
      <div className="therapist-info__main">
        <div className="therapist-info__avatar">
          <Image
            src="https://file.drsaina.com/image/Profile/90c7c083-53d4-4ece-bf3c-9a035d57de48/160.jpg"
            alt="therapist"
            fill
            className="therapist-info__img"
          />
        </div>
        <h1 className="therapist-info__title">حسین لادمخی نژاد</h1>
        <Button
          onClick={handleOpenReserve}
          variant="main"
          size="sm"
          className="therapist-info__btn"
        >
          <Icon24Hours stroke={2} />
          رزرو جدید
        </Button>
      </div>
      <div className="therapist-info__info">
        <h1 className="therapist-info__subtitle">مدرک تحصیلی این پزشک</h1>
        <span className="therapist-info__text">فوق لیسانس</span>
      </div>
      <div className="therapist-info__info">
        <h1 className="therapist-info__subtitle">جنسیت این پزشک</h1>
        <span className="therapist-info__text">آقا</span>
      </div>
      <div className="therapist-info__info">
        <h1 className="therapist-info__subtitle">توضیحات این پزشک</h1>
        <p className="therapist-info__bio">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <div className="therapist-info__info">
        <h1 className="therapist-info__subtitle">تخصص های این پزشک</h1>
        <div className="therapist-info__badges">
          {categories.content.map((category) => (
            <span className="therapist-info__badge" key={category.id}>
              {category.faName}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TherapistInfo;
