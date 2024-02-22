'use client';

import './index.css';

import { IconSearch } from '@tabler/icons-react';
import { FC } from 'react';

const HomeLanding: FC = () => {
  return (
    <div className="home-landing">
      <div className="container">
        <h1 className="title">مشاوره پزشکی روانشناسی</h1>
        <p className="subtitle">
          ما به شما برای داشتن زندگی بهتر و شاد تر کمک میکنیم , کافی است بما
          اعتماد کنید
        </p>
        <div className="input-container">
          <input
            type="text"
            placeholder="جستجوی پزشک, تخصص, بیماری"
            className="input"
          />
          <div className="icon">
            <IconSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
