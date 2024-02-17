'use client';

import { FC } from 'react';
import { TLoadingProps } from './index.type';
import { ClipLoader } from 'react-spinners';
import { colorThemes } from '@/constants/color-theme.constant';

const loadingSize: Record<string, number> = {
  xs: 12,
  sm: 14,
  normal: 18,
  lg: 22,
  xl: 28,
  xxl: 34,
  xxxl: 38,
  xxxxl: 46,
};

const Loading: FC<TLoadingProps> = ({
  type = 'spinner',
  size = 'normal',
  variant = 'main',
  ghost,
}) => {
  const option = {
    size: loadingSize[size],
    color: ghost ? colorThemes['base-content'] : colorThemes[variant],
  };
  switch (type) {
    case 'spinner':
      return <ClipLoader {...option} loading speedMultiplier={1} />;
  }
};

export default Loading;
