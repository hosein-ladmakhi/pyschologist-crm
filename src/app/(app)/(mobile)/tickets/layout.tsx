"use client";

import { FC, PropsWithChildren } from "react";
import { TicketContextProvider } from "./_context/ticket-context";

const TicketsLayout: FC<PropsWithChildren> = ({ children }) => {
  return <TicketContextProvider>{children}</TicketContextProvider>;
};

export default TicketsLayout;
