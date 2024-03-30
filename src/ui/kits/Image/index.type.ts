import { ImageProps } from 'next/image';
import { ReactElement } from 'react';

export interface IImageProps extends ImageProps {
  notFoundLoader?: ReactElement<any>;
}
