"use client";

import Button from "@/ui/kits/Button";
import { FC } from "react";
import { useOperationContext } from "../../../../_context/operation-context";

const ReservationHeader: FC = () => {
  const { handleCloseDashboardDialog } = useOperationContext();
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-lg font-bold mb-5">لیست رزرو های این کاربر</h1>
      <div className="flex justify-center items-center gap-3">
        <Button size="sm" variant="main" isOutline>
          نمایش تمامی رزرو ها
        </Button>
        <Button size="sm" variant="main" isOutline>
          نمایش رزرو های فعال
        </Button>
        <Button size="sm" variant="main" isOutline>
          نمایش رزرو های گذشته
        </Button>
        <Button size="sm" variant="error" onClick={handleCloseDashboardDialog} isOutline>
          بستن
        </Button>
      </div>
    </div>
  );
};

export default ReservationHeader;
