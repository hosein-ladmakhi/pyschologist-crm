'use client';

import { FC, Suspense, useState } from 'react';
import Header from './_components/Header';
import TicketCard from './_components/TicketCard';
import dynamic from 'next/dynamic';
import { ITicketsScreenProps } from './index.type';
import { ITicket } from '@/types/ticket.type';

const TicketDetailDialog = dynamic(
  () => import('./_components/TicketDetailDialog'),
);

const CreateTicketDialog = dynamic(
  () => import('./_components/CreateTicketDialog'),
);

const TicketsScreen: FC<ITicketsScreenProps> = ({ tickets }) => {
  const [ticketDetailDialog, setTicketDetailDialog] = useState<boolean>(false);
  const [createTicketDialog, setCreateTicketDialog] = useState<boolean>(false);

  const [selectedTicket, setSelectedTicket] = useState<ITicket>();

  const handleOpenCreateTicket = () => setCreateTicketDialog(true);

  const handleCloseCreateTicket = () => setCreateTicketDialog(false);

  const handleOpenTicket = (ticket: ITicket) => {
    setSelectedTicket(ticket);
    setTicketDetailDialog(true);
  };

  const handleCloseTicket = () => {
    setSelectedTicket(undefined);
    setTicketDetailDialog(false);
  };

  return (
    <div className="container">
      <Header handleOpenDialog={handleOpenCreateTicket} />
      <ul className="mt-10">
        {tickets.map((ticket) => (
          <TicketCard
            handleOpenDetail={handleOpenTicket}
            ticket={ticket}
            key={ticket.id}
          />
        ))}
      </ul>

      {tickets.length === 0 && (
        <div className="bg-main/10 p-4 rounded">
          <p className="text-sm text-main">تیکتی ساخته نشده است</p>
        </div>
      )}

      {createTicketDialog && (
        <Suspense fallback={<></>}>
          <CreateTicketDialog handleCloseDialog={handleCloseCreateTicket} />
        </Suspense>
      )}

      {ticketDetailDialog && selectedTicket && (
        <Suspense fallback={<></>}>
          <TicketDetailDialog
            ticket={selectedTicket}
            handleCloseDetail={handleCloseTicket}
            handleOpenDetail={handleOpenTicket}
          />
        </Suspense>
      )}
    </div>
  );
};

export default TicketsScreen;
