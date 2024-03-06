"use client";

import Button from "@/ui/kits/Button";
import { FC } from "react";
import { ITherapistItemButtonProps } from "./index.type";
import { useOperationContext } from "../../_context/operation-context";

const TherapistItemButton: FC<ITherapistItemButtonProps> = ({ therapist }) => {
  const { handleSelectedTherapistDetailChange } = useOperationContext();

  return (
    <Button
      onClick={handleSelectedTherapistDetailChange.bind(null, therapist)}
      size="sm"
      shape="block"
      className="mt-4"
      variant="main"
    >
      جزئیات
    </Button>
  );
};

export default TherapistItemButton;
