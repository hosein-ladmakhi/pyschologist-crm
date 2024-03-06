"use client";

import Dialog from "@/ui/kits/Dialog";
import { FC } from "react";
import { ICategoryDetailModalProps } from "./index.type";
import AllTherapistsList from "../AllTherapistsList";

const CategoryDetailModal: FC<ICategoryDetailModalProps> = ({ handleClose, therapists }) => {
  return (
    <Dialog isOpen cardClass="h-5/6 overflow-auto">
      <AllTherapistsList data={therapists} handleClose={handleClose} />
    </Dialog>
  );
};

export default CategoryDetailModal;
