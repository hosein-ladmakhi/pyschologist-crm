'use client';

import './index.css';

import { FC } from 'react';
import TicketCard from '../TicketCard';
import { fetchOwnTicketsApi } from '@/services/tickets';

const TicketLists: FC = async () => {
  const tickets = await fetchOwnTicketsApi();
  return (
    <>
      <ul className="tickets-list">
        {tickets?.content?.map((ticket) => (
          <TicketCard ticket={ticket} key={ticket.id} />
        ))}
      </ul>

      {tickets.count === 0 && (
        <div className="tickets-empty">
          <p className="tickets-empty__text">تیکتی ساخته نشده است</p>
        </div>
      )}
    </>
  );
};

export default TicketLists;
