"use client";

import Dialog from "@/ui/kits/Dialog";
import { IconX } from "@tabler/icons-react";
import { FC } from "react";
import { IReservationDetailDialogProps } from "./index.type";
import { DAYS } from "@/constants/days.constant";
import { transformScheduleType } from "@/utils/enum-transformer";
import jalaliMoment from "jalali-moment";
import { useOperationContext } from "../../../../_context/operation-context";

const ReservationDetailDialog: FC<IReservationDetailDialogProps> = () => {
  const { selectedReserveDetail: reserve, handleCloseSelectedReserveDetail } =
    useOperationContext();

  if (!reserve) return <></>;
  return (
    <Dialog isOpen cardClass="!w-[600px]">
      <div className="flex justify-between items-center w-full mb-5 border-b border-neutral/10 pb-5">
        <h1 className="font-bold text-lg">جزئیات رزرو</h1>
        <div className="cursor-pointer" onClick={handleCloseSelectedReserveDetail}>
          <IconX />
        </div>
      </div>
      <div className="mb-4">
        <h1 className="text-base font-bold">تاریخ برگزاری رزرو</h1>
        <p className="text-base leading-7 text-neutral mt-1">
          {DAYS[reserve.day]} {transformScheduleType(reserve.type)} ساعت {reserve.startHour} تا{" "}
          {reserve.endHour} در تاریخ{" "}
          <span className="rtl">{jalaliMoment(reserve.date).format("jD-jM-jYYYY")}</span>
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-base font-bold">پزشک</h1>
        <p className="text-base leading-7 text-neutral mt-1">
          {reserve.therapist.firstName} {reserve.therapist.lastName}
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-base font-bold">زمینه رزرو</h1>
        <p className="text-base leading-7 text-neutral mt-1">
          {reserve.categories.map((category) => category.faName).join(" , ")}
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-base font-bold">آدرس رزرو</h1>
        <p className="text-base leading-7 text-neutral mt-1">
          شهر {reserve.city} - {reserve.address} - اتاق {reserve.room}
        </p>
      </div>
    </Dialog>
  );
};

export default ReservationDetailDialog;
