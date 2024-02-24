'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import { FC } from 'react';
import { ITicketDetailDialogProps } from './index.type';
import TicketCard from '../TicketCard';

const TICKETS_DATA = [
  'سلام چجوری میتونم در آزمون های روانشناسی شرکت بکنم ؟',
  'نحوه دریافت مدرک روانشناسی در پزشک من',
  'دلیل اینکه نمراتم اینقدر پایین شده چه چیزی میباشد',
  'میشه اکانت من رو باز کنید خواهش میکنم من توش کلی دیتا داشتم',
  'میتونم قسطی هم پرداخت کنم اطلاعات مختلف رو',
];

const TicketDetailDialog: FC<ITicketDetailDialogProps> = ({
  handleCloseDetail,
  handleOpenDetail,
}) => {
  return (
    <div className="ticket-detail">
      <div className="ticket-detail__card">
        <h1 className="ticket-detail__title">
          نحوه دریافت مدرک روانشناسی در پزشک من
        </h1>
        <div className="ticket-detail__content">
          <p className="ticket-detail__text">
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
          <div className="admin-card">
            <h1 className="admin-card__title">پاسخ ادمین : </h1>
            <p className="admin-card__text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className="related-ticket">
            <h1 className="related-ticket__title">
              پیام های ایجاد شده در این تیکت
            </h1>
            <ul className="related-ticket__list">
              {TICKETS_DATA.map((e) => (
                <TicketCard
                  handleOpenDetail={handleOpenDetail}
                  ticket={e}
                  key={e}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="ticket-detail__action">
          <div className="col-span-6">
            <Button variant="secondary" size="sm" className="w-full" isOutline>
              دانلود فایل پیوست
            </Button>
          </div>
          <div className="col-span-6">
            <Button
              onClick={handleCloseDetail}
              variant="error"
              size="sm"
              className="w-full"
            >
              بستن جزئیات
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailDialog;
