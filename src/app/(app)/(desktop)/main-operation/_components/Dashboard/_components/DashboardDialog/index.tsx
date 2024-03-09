"use client";

import { FC } from "react";
import { useOperationContext } from "../../../../_context/operation-context";
import Dialog from "@/ui/kits/Dialog";
import EditProfile from "../EditProfile";
import Reservations from "../Reservations";

const DashboardDialog: FC = () => {
  const { handleCloseDashboardDialog, isDashboardDialogOpen } = useOperationContext();
  console.log(123, isDashboardDialogOpen);
  return (
    <Dialog
      isOpen={isDashboardDialogOpen}
      // isOpen
      cardClass="h-4/6"
    >
      <div className="grid grid-cols-12 gap-7 w-full">
        <div className="col-span-9">
          <Reservations />
        </div>
        <div className="col-span-3">
          <EditProfile />
        </div>
      </div>
    </Dialog>
  );
};

export default DashboardDialog;