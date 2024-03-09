"use client";

import { FC } from "react";
import { useOperationContext } from "../../../../_context/operation-context";
import Dialog from "@/ui/kits/Dialog";
import EditProfile from "../EditProfile";
import Reservations from "../Reservations";

const DashboardDialog: FC = () => {
  const { isDashboardDialogOpen } = useOperationContext();
  return (
    <Dialog isOpen={isDashboardDialogOpen} cardClass="h-5/6">
      <div className="grid grid-cols-12 gap-7 w-full">
        <div className="lg:col-span-9 col-span-12 order-2 lg:order-1">
          <Reservations />
        </div>
        <div className="lg:col-span-3 col-span-12 order-1 lg:order-2">
          <EditProfile />
        </div>
      </div>
    </Dialog>
  );
};

export default DashboardDialog;
