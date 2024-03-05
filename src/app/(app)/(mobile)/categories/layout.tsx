'use client';

import { FC, PropsWithChildren } from 'react';
import { CategoriesContextProvider } from './_context/categories-context';

const CategoriesLayout: FC<PropsWithChildren> = ({ children }) => {
  return <CategoriesContextProvider>{children}</CategoriesContextProvider>;
};

export default CategoriesLayout;
