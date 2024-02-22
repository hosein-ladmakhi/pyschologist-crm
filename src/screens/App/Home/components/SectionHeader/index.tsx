import { FC } from 'react';
import { IHomeSectionHeaderProps } from './index.type';

const HomeSectionHeader: FC<IHomeSectionHeaderProps> = ({ content, title }) => {
  return (
    <>
      <h1 className="text-base font-bold">{title}</h1>
      <p className="text-sm mt-1">{content}</p>
    </>
  );
};

export default HomeSectionHeader;
