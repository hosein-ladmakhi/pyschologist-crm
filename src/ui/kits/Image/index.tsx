"use client";

import { FC, useState } from "react";
import NextImage from "next/image";
import { IImageProps } from "./index.type";

const Image: FC<IImageProps> = ({ notFoundLoader, ...imgProps }) => {
  const [error, setError] = useState<boolean>(false);

  if (error && notFoundLoader)
    return (
      <div className="w-full h-full bg-main/10 rounded flex justify-center items-center">
        {notFoundLoader}
      </div>
    );

  return <NextImage {...imgProps} onError={() => setError(true)} />;
};

export default Image;
