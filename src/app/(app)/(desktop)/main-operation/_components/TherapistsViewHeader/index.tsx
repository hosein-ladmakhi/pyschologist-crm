"use client";

import { FC, Suspense, useState } from "react";
import Button from "@/ui/kits/Button";
import { ITherapistsViewHeaderProps } from "./index.type";
import dynamic from "next/dynamic";

const AllTherapistsModal = dynamic(() => import("../AllTherapistsModal"));

const TherapistsViewHeader: FC<ITherapistsViewHeaderProps> = ({ content, count }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {isOpenModal && (
        <Suspense fallback={<></>}>
          <AllTherapistsModal handleClose={handleCloseModal} therapists={content} count={count} />
        </Suspense>
      )}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg">لیست تمامی پزشکان متخصص ({count})</h1>
        <Button onClick={handleOpenModal} variant="main" size="sm">
          نمایش کل پزشکان
        </Button>
      </div>
    </>
  );
};

export default TherapistsViewHeader;
