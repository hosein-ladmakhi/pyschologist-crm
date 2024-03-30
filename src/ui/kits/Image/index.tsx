"use client";

import { FC, cloneElement, useState } from "react";
import NextImage from "next/image";
import { IImageProps } from "./index.type";
import { colorThemes } from "@/constants/color-theme.constant";

const Image: FC<IImageProps> = ({ notFoundLoader, ...imgProps }) => {
  const [error, setError] = useState<boolean>(false);

  if (error && notFoundLoader)
    return (
      <div className="w-full h-full bg-main/10 rounded flex justify-center items-center">
        {cloneElement(notFoundLoader, { color: colorThemes.main })}
      </div>
    );

  return <NextImage {...imgProps} onError={() => setError(true)} />;
};

export default Image;
