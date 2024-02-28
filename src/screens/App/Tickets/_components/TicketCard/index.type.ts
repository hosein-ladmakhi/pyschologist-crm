import { ITicket } from '@/types/ticket.type';

export interface ITicketCardProps {
  ticket: ITicket;
  handleOpenDetail: (ticket: ITicket) => void;
}
