"use client";

import { ITherapist } from "@/types/therapist.type";
import { FC, PropsWithChildren, createContext, useContext, useState } from "react";

interface IOperationContext {
  selectedTherapistDetail?: ITherapist;
  handleSelectedTherapistDetailChange: (therapist?: ITherapist) => void;
}

const operationContext = createContext<IOperationContext>({
  handleSelectedTherapistDetailChange: () => {},
});

export const useOperationContext = () => useContext(operationContext);

const Provider = operationContext.Provider;

export const OperationContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedTherapistDetail, setSelectedTherapistDetail] = useState<ITherapist>();

  const handleSelectedTherapistDetailChange = (therapist?: ITherapist) => {
    setSelectedTherapistDetail(therapist);
  };

  return (
    <Provider value={{ handleSelectedTherapistDetailChange, selectedTherapistDetail }}>
      {children}
    </Provider>
  );
};
