"use client";

import "./index.css";

import Button from "@/ui/kits/Button";
import { FC } from "react";
import { ILocationDialogProps } from "./index.type";
import Dialog from "@/ui/kits/Dialog";

const LocationDialog: FC<ILocationDialogProps> = ({ handleClose, address, city, room }) => {
  // {...RESERVE_LOCATION_DIALOG_ANIMATION}
  return (
    <Dialog isOpen>
      <div className="reserve-location">
        <div className="reserve-location__item">
          <h1 className="reserve-location__title">شهر</h1>
          <p className="reserve-location__desc">{city}</p>
        </div>
        <div className="reserve-location__item">
          <h1 className="reserve-location__title">آدرس دقیق</h1>
          <p className="reserve-location__desc">{address}</p>
        </div>
        <div className="reserve-location__item">
          <h1 className="reserve-location__title">اتاق</h1>
          <p className="reserve-location__desc">شماره {room}</p>
        </div>
        <Button variant="error" className="w-full mt-5" onClick={handleClose} size="sm">
          بستن آدرس
        </Button>
      </div>
    </Dialog>
  );
};

export default LocationDialog;
