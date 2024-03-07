"use client";

import { FC, useEffect, useMemo, useState } from "react";
import { EOrderStatus, IOrder } from "@/types/order.type";
import { fetchOwnReservationOrdersApi } from "@/services/orders";
import ReserveCard from "@/ui/components/ReserveCard";
import { useOperationContext } from "../../../../_context/operation-context";
import Button from "@/ui/kits/Button";
import moment from "jalali-moment";

const Reservations: FC = () => {
  const { handleCloseDashboardDialog } = useOperationContext();
  const [reservations, setReservations] = useState<IOrder[]>([]);
  const [activeTab, setActiveTab] = useState<"all" | "disabled" | "active">("all");

  const handleChangeTab = (tab: "all" | "disabled" | "active") => {
    setActiveTab(tab);
  };

  useEffect(() => {
    fetchOwnReservationOrdersApi()
      .then((data) => {
        setReservations(data);
      })
      .catch(() => {
        console.log("ERROR IN RESERVATIONS");
      });
  }, []);

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
        <div className="flex justify-center items-center gap-3">
          <Button onClick={handleChangeTab.bind(null, "all")} size="sm" variant="main" isOutline>
            نمایش تمامی رزرو ها
          </Button>
          <Button onClick={handleChangeTab.bind(null, "active")} size="sm" variant="main" isOutline>
            نمایش رزرو های فعال
          </Button>
          <Button
            onClick={handleChangeTab.bind(null, "disabled")}
            size="sm"
            variant="main"
            isOutline
          >
            نمایش رزرو های گذشته
          </Button>
          <Button size="sm" variant="error" onClick={handleCloseDashboardDialog} isOutline>
            بستن
          </Button>
        </div>
      </div>
      <ul className="grid grid-cols-12 gap-3">
        {transformedReservations.map((reserve) => (
          <div key={reserve.id} className="col-span-4">
            <ReserveCard handleOpenLocation={() => {}} reserve={reserve} showStatus />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
