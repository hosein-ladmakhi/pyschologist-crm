import { FC, useEffect, useState } from "react";
import ReservationHeader from "../ReservationHeader";
import { IOrder } from "@/types/order.type";
import { fetchOwnReservationOrdersApi } from "@/services/orders";
import ReserveCard from "@/ui/components/ReserveCard";

const Reservations: FC = () => {
  const [reservations, setReservations] = useState<IOrder[]>([]);

  useEffect(() => {
    fetchOwnReservationOrdersApi()
      .then((data) => {
        setReservations(data);
      })
      .catch(() => {
        console.log("ERROR IN RESERVATIONS");
      });
  }, []);

  return (
    <div>
      <ReservationHeader />
      <ul className="grid grid-cols-12 gap-3">
        {reservations.map((reserve) => (
          <div key={reserve.id} className="col-span-4">
            <ReserveCard handleOpenLocation={() => {}} reserve={reserve} showStatus />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
