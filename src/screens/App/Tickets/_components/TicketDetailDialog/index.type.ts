import { ITicket } from '@/types/ticket.type';

export interface ITicketDetailDialogProps {
  handleCloseDetail: () => void;
  handleOpenDetail: (ticket: ITicket) => void;
  ticket: ITicket;
}
