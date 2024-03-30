"use client";

import { FC, useEffect, useMemo, useState } from "react";
import { EOrderStatus, IOrder } from "@/types/order.type";
import { fetchOwnReservationOrdersApi } from "@/services/orders";
import ReserveCard from "@/ui/components/ReserveCard";
import { useOperationContext } from "../../../../_context/operation-context";
import Button from "@/ui/kits/Button";
import moment from "jalali-moment";
import Select from "@/ui/kits/Select";
import { useForm } from "react-hook-form";

const Reservations: FC = () => {
  const { handleCloseDashboardDialog, handleOpenSelectedReserveDetail } = useOperationContext();
  const [reservations, setReservations] = useState<IOrder[]>([]);
  const { control, watch } = useForm({ defaultValues: { list: "all" } });

  useEffect(() => {
    fetchOwnReservationOrdersApi()
      .then((data) => {
        setReservations(data);
      })
      .catch(() => {
        console.log("ERROR IN RESERVATIONS");
      });
  }, []);

  const activeTab = watch("list");
  const transformedReservations = useMemo(() => {
    switch (activeTab) {
      case "all":
        return reservations;
      case "active":
        return reservations.filter(
          (reserve) =>
            moment(reserve.date).isSameOrAfter(moment()) && reserve.status === EOrderStatus.Pending
        );
      case "disabled":
        return reservations.filter(
          (reserve) =>
            !moment(reserve.date).isSameOrAfter(moment()) || reserve.status !== EOrderStatus.Pending
        );
    }
  }, [activeTab, reservations]);

  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-lg font-bold mb-5">لیست رزرو های این کاربر</h1>
        <Select
          control={control}
          emptyPlaceholder="نحوه نمایش لیست رزرو ها"
          label=""
          name="list"
          additionalClasses="!w-[500px]"
          options={[
            {
              text: "نمایش تمامی رزرو ها",
              value: "all",
            },
            {
              text: "نمایش رزرو های فعال",
              value: "active",
            },
            {
              text: "نمایش رزرو های گذشته",
              value: "disabled",
            },
          ]}
        />
      </div>
      <ul className="grid grid-cols-12 gap-3">
        {transformedReservations?.map((reserve) => (
          <div key={reserve.id} className="col-span-4">
            <ReserveCard
              handleOpenLocation={handleOpenSelectedReserveDetail.bind(null, reserve)}
              reserve={reserve}
              showStatus
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
