"use client";

import Button from "@/ui/kits/Button";
import { FC, Suspense, useState } from "react";
import { ICategoriesViewHeaderProps } from "./index.type";
import AllCategoriesModal from "../AllCategoriesModal";

const CategoriesViewHeader: FC<ICategoriesViewHeaderProps> = ({ content, count }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg">لیست تمامی زمینه های تخصصی ({count})</h1>
        <Button onClick={handleOpenModal} variant="main" size="sm">
          نمایش زمینه ها
        </Button>
      </div>
      {isOpenModal && (
        <Suspense fallback={<></>}>
          <AllCategoriesModal handleClose={handleCloseModal} content={content} />
        </Suspense>
      )}
    </>
  );
};

export default CategoriesViewHeader;
