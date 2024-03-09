"use client";

import Image from "@/ui/kits/Image";
import { IconUser, IconX } from "@tabler/icons-react";
import { FC } from "react";
import TherapistItemButton from "../TherapistItemButton";
import { EGender } from "@/types/therapist.type";
import { colorThemes } from "@/constants/color-theme.constant";
import { IAllTherapistsListProps } from "./index.type";

const NotFoundTherapistImage = () => {
  return (
    <div className="w-full h-full bg-main/10 rounded flex justify-center items-center">
      <IconUser size="45px" color={colorThemes.main} />
    </div>
  );
};

const AllTherapistsList: FC<IAllTherapistsListProps> = ({ data, handleClose }) => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl font-bold">لیست پزشکان و متخصصان این سایت</h1>
        <div className="cursor-pointer" onClick={handleClose}>
          <IconX size="25px" />
        </div>
      </div>

      <div className="w-full grid grid-cols-12 gap-7 mt-10">
        {data.map((therapist) => (
          <div className="lg:col-span-4 col-span-12 md:col-span-6" key={therapist.id}>
            <div className="flex justify-start items-center gap-5">
              <div className="h-24 w-24 relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${therapist.image}`}
                  notFoundLoader={<NotFoundTherapistImage />}
                  fill
                  alt={therapist.firstName}
                  className="rounded object-cover object-center"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-base font-bold">
                  {therapist.gender === EGender.male ? "آقای  دکتر" : "خانوم دکتر"}{" "}
                  {therapist.firstName} {therapist.lastName}
                </h1>
                <p className="text-sm mt-1 line-clamp-2">{therapist.bio}</p>
                <TherapistItemButton therapist={therapist} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllTherapistsList;
