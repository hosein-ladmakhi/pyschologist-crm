import Image from 'next/image';
import Link from 'next/link';
import { FC, Suspense } from 'react';
import { IHomeCategoriesProps } from './index.type';

const HomeCategories: FC<IHomeCategoriesProps> = ({ categories }) => {
  return (
    <Suspense fallback={<p>درحال لود ...</p>}>
      <div className="container">
        <h1 className="text-base font-bold">تخصص های موحود در پزشک من</h1>
        <p className="text-sm mt-1">
          بیش از 2500 تخصص در زمینه پزشکی موجود میباشد
        </p>
        <ul>
          {categories.content.map((category: any) => (
            <li key={category.id} className="my-5">
              <Link href="/" className="flex justify-start items-center gap-2">
                <div className="relative h-14 w-14 bg-main/10 rounded">
                  <Image
                    alt="icon"
                    src={`http://localhost:4000/upload/${category.icon}`}
                    fill
                  />
                </div>
                <div>
                  <h1 className="text-xs font-bold">{category.faName}</h1>
                  <p className="text-xs mt-1">تعداد پزشکان متخصص : 252 نفر</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
};

export default HomeCategories;
