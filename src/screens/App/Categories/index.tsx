'use client';

import { FC, useState } from 'react';
import { ICategoriesScreenProps } from './index.type';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/ui/kits/Button';

const CategoriesScreen: FC<ICategoriesScreenProps> = ({ categories }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="container">
      {categories.map((category: any) => (
        <div onClick={() => setOpen(true)} key={category.id} className="my-5">
          <div className="flex justify-start items-center gap-3">
            <div className="h-14 w-14 relative bg-main/10 rounded">
              <Image
                fill
                alt={`icon-${category.enName}`}
                src={`http://localhost:4000/upload/${category.icon}`}
              />
            </div>
            <h1 className="text-sm font-bold leading-7">{category.faName}</h1>
          </div>
        </div>
      ))}

      {isOpen && (
        <div className="fixed bottom-0 left-0 w-full h-full bg-neutral/40 flex justify-center items-end">
          <div className="bg-white w-full h-5/6 p-5 pb-0 flex flex-col justify-start items-center">
            <div className="flex justify-start items-center gap-3 mb-5 w-full">
              <div className="h-14 w-14 relative bg-main/10 rounded">
                <Image
                  fill
                  alt={`icon-${categories[0].enName}`}
                  src={`http://localhost:4000/upload/${categories[0].icon}`}
                />
              </div>
              <h1 className="text-sm font-bold leading-7">
                {categories[0].faName}
              </h1>
            </div>
            <ul className="flex-1 overflow-auto">
              {Array.from({ length: 10 }).map((_, i) => (
                <li className="my-4" key={i}>
                  <Link
                    className="flex justify-start items-center gap-3"
                    href="/"
                  >
                    <div className="h-20 w-20 relative">
                      <Image
                        src="https://file.drsaina.com/image/Profile/90c7c083-53d4-4ece-bf3c-9a035d57de48/160.jpg"
                        alt="therapist-image"
                        fill
                        className="rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h1 className="text-sm font-bold">
                        دکتر سارا منافی افخم
                      </h1>
                      <p className="text-xs line-clamp-1">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                        و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                        متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                        پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                        سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                        دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                        طراحی اساسا مورد استفاده قرار گیرد.
                      </p>
                      <p className="text-xs text-neutral/60 mt-1">
                        تعداد مشاوره های موفق : 1523 جلسه
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="py-2 w-full">
              <Button
                variant="main"
                onClick={() => setOpen(false)}
                size="sm"
                className="w-full"
              >
                بستن منو
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesScreen;
