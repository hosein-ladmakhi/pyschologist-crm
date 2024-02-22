import { FC } from 'react';
import { IHomeCategoryCardProps } from './index.type';
import Link from 'next/link';
import Image from 'next/image';

const HomeCategoryCard: FC<IHomeCategoryCardProps> = ({ category }) => {
  return (
    <li className="my-5">
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
  );
};

export default HomeCategoryCard;
