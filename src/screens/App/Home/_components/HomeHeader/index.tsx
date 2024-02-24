'use client';

import './index.css';

import { FC } from 'react';
import { IHomeSectionHeaderProps } from './index.type';

const HomeHeader: FC<IHomeSectionHeaderProps> = ({ content, title }) => {
  return (
    <div className="home-header">
      <h1 className="home-header__title">{title}</h1>
      <p className="home-header__content">{content}</p>
    </div>
  );
};

export default HomeHeader;
