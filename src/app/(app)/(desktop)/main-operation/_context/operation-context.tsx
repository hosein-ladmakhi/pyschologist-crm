"use client";

import { IOrder } from "@/types/order.type";
import { ITherapist } from "@/types/therapist.type";
import { FC, PropsWithChildren, createContext, useContext, useState } from "react";

interface IOperationContext {
  // DATA
  selectedTherapistDetail?: ITherapist;
  isDashboardDialogOpen?: boolean;
  isAuthDialogOpen?: boolean;
  selectedReserveDetail?: IOrder;

  // FUNCTIONS
  handleSelectedTherapistDetailChange: (therapist?: ITherapist) => void;
  handleOpenAuthDialog: () => void;
  handleCloseAuthDialog: () => void;
  handleOpenDashboardDialog: () => void;
  handleCloseDashboardDialog: () => void;
  handleOpenSelectedReserveDetail: (reserve: IOrder) => void;
  handleCloseSelectedReserveDetail: () => void;
}

const operationContext = createContext<IOperationContext>({
  handleSelectedTherapistDetailChange: () => {},
  handleCloseAuthDialog: () => {},
  handleOpenAuthDialog: () => {},
  handleCloseDashboardDialog: () => {},
  handleOpenDashboardDialog: () => {},
  handleCloseSelectedReserveDetail: () => {},
  handleOpenSelectedReserveDetail: (reserve: IOrder) => {},
});

export const useOperationContext = () => useContext(operationContext);

const Provider = operationContext.Provider;

export const OperationContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedTherapistDetail, setSelectedTherapistDetail] = useState<ITherapist>();
  const [isAuthDialogOpen, setAuthDialogOpen] = useState<boolean>(false);
  const [isDashboardDialogOpen, setDashboardDialogOpen] = useState<boolean>(false);
  const [selectedReserveDetail, setSelectedReserveDetail] = useState<IOrder>();

  const handleCloseSelectedReserveDetail = () => {
    setSelectedReserveDetail(undefined);
  };

  const handleOpenSelectedReserveDetail = (reserve: IOrder) => {
    setSelectedReserveDetail(reserve);
  };

  const handleSelectedTherapistDetailChange = (therapist?: ITherapist) => {
    setSelectedTherapistDetail(therapist);
  };

  const handleOpenAuthDialog = () => {
    setAuthDialogOpen(true);
  };

  const handleCloseAuthDialog = () => {
    setAuthDialogOpen(false);
  };

  const handleOpenDashboardDialog = () => {
    setDashboardDialogOpen(true);
  };

  const handleCloseDashboardDialog = () => {
    setDashboardDialogOpen(false);
  };

  return (
    <Provider
      value={{
        handleSelectedTherapistDetailChange,
        selectedTherapistDetail,
        isAuthDialogOpen,
        handleCloseAuthDialog,
        handleOpenAuthDialog,
        handleCloseDashboardDialog,
        handleOpenDashboardDialog,
        isDashboardDialogOpen,
        handleCloseSelectedReserveDetail,
        handleOpenSelectedReserveDetail,
        selectedReserveDetail,
      }}
    >
      {children}
    </Provider>
  );
};
