'use client';

import { ChangeEvent, FC, useRef, useState } from 'react';
import { TImagePickerProps } from './index.type';
import Image from 'next/image';
import classNames from 'classnames';

const ImagePicker: FC<TImagePickerProps> = ({
  avatarClassName,
  imageClassName,
  alt,
  defaultSrc,
  picker = true,
  onChangeImage = () => {},
}) => {
  const [image, setImage] = useState<File>();

  const handleChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    onChangeImage(file);
    setImage(file);
  };

  return (
    <>
      <div className={classNames(avatarClassName, 'relative')}>
        <Image
          src={image ? URL.createObjectURL(image) : defaultSrc}
          fill
          alt={alt}
          className={imageClassName}
        />
        {picker && (
          <input
            className="absolute z-50 h-full w-full opacity-0"
            type="file"
            accept="image/*"
            onChange={handleChangeAvatar}
          />
        )}
      </div>
    </>
  );
};

export default ImagePicker;
