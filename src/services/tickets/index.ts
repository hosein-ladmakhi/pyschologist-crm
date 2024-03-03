import { httpDelete, httpGet, httpPost } from '@/lib/httpClient';
import { ITicket, TPaginatedTickets } from '@/types/ticket.type';

// HTTP GET

export const fetchOwnTicketsApi = () =>
  httpGet<TPaginatedTickets>('/tickets/own', {
    next: { tags: ['tickets'] },
  });

export const downloadTicketAttachmentsApi = (id: number) =>
  httpGet<Buffer>(`/tickets/download/attachment/${id}`);

// HTTP POST

export const createTicketMutationApi = (data: FormData) =>
  httpPost<ITicket, FormData>('/tickets', data);

// HTTP DELETE

export const deleteTicketMutationApi = (id: number) =>
  httpDelete<ITicket>(`/tickets/${id}`);
