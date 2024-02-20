'use client';

import { IconSearch } from '@tabler/icons-react';
import { FC } from 'react';

const HomeLanding: FC = () => {
  return (
    <div className="h-80 w-full bg-main flex justify-center items-center">
      <div className="container">
        <h1 className="text-white text-xl font-bold text-center">
          مشاوره پزشکی روانشناسی
        </h1>
        <p className="text-white text-base text-center mt-2">
          ما به شما برای داشتن زندگی بهتر و شاد تر کمک میکنیم , کافی است بما
          اعتماد کنید
        </p>
        <div className="h-12 w-full bg-white flex justify-between items-center px-1 gap-2 rounded-full mt-10">
          <input
            type="text"
            placeholder="جستجوی پزشک, تخصص, بیماری"
            className="flex-1 h-full rounded-full text-sm px-2"
          />
          <div className="h-10 w-10 flex justify-center items-center bg-main/20 rounded-full text-main">
            <IconSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
