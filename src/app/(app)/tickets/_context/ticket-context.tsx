import { ITicket } from '@/types/ticket.type';
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

interface ITicketContext {
  selectedTicket?: ITicket;
  createTicketDialog?: boolean;
  viewTicketDialog?: boolean;
  handleSelectTicket: (ticket?: ITicket) => void;
  handleOpenCreate: () => void;
  handleCloseCreate: () => void;
  handleViewTicket: (ticket: ITicket) => void;
  handleCloseViewTicket: () => void;
}

const ticketContext = createContext<ITicketContext>({
  createTicketDialog: false,
  viewTicketDialog: false,
  handleCloseCreate: () => {},
  handleCloseViewTicket: () => {},
  handleOpenCreate: () => {},
  handleSelectTicket: () => {},
  handleViewTicket: () => {},
});

const Provider = ticketContext.Provider;

export const useTicketContext = () => useContext(ticketContext)!;

export const TicketContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedTicket, setSelectedTicket] = useState<ITicket>();
  const [createTicketDialog, setCreateTicketDialog] = useState<boolean>(false);
  const [viewTicketDialog, setViewTicketDialog] = useState<boolean>(false);

  const handleSelectTicket = (data?: ITicket) => {
    setSelectedTicket(data);
  };

  const handleCloseCreate = () => {
    setCreateTicketDialog(false);
  };

  const handleCloseViewTicket = () => {
    setViewTicketDialog(false);
    setSelectedTicket(undefined);
  };

  const handleOpenCreate = () => {
    setCreateTicketDialog(true);
  };

  const handleViewTicket = (ticket: ITicket) => {
    setViewTicketDialog(true);
    setSelectedTicket(ticket);
  };

  return (
    <Provider
      value={{
        handleSelectTicket,
        createTicketDialog,
        selectedTicket,
        viewTicketDialog,
        handleCloseCreate,
        handleCloseViewTicket,
        handleOpenCreate,
        handleViewTicket,
      }}
    >
      {children}
    </Provider>
  );
};
