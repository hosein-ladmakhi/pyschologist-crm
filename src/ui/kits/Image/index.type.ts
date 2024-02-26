import { ImageProps } from 'next/image';
import { ReactNode } from 'react';

export interface IImageProps extends ImageProps {
  notFoundLoader?: ReactNode;
}
