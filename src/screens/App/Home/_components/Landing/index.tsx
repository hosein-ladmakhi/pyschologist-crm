'use client';

import './index.css';

import { IconSearch } from '@tabler/icons-react';
import { FC } from 'react';

const Landing: FC = () => {
  return (
    <div className="landing">
      <div className="container">
        <h1 className="landing__title">مشاوره پزشکی روانشناسی</h1>
        <p className="landing__subtitle">
          ما به شما برای داشتن زندگی بهتر و شاد تر کمک میکنیم , کافی است بما
          اعتماد کنید
        </p>
        <div className="searchbox">
          <input
            type="text"
            placeholder="جستجوی پزشک, تخصص, بیماری"
            className="searchbox__input"
          />
          <div className="searchbox__icon">
            <IconSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
