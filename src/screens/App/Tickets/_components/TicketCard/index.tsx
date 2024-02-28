'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import { FC } from 'react';
import { ITicketCardProps } from './index.type';
import { ETicketStatus } from '@/types/ticket.type';
import moment from 'jalali-moment';
import { IconDotsVertical, IconPencil, IconTrash } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

const TicketCard: FC<ITicketCardProps> = ({ ticket, handleOpenDetail }) => {
  const session = useSession();
  const loggedInUser = session?.data as any;

  const handleDeleteTicket = () => {
    fetch(`http://localhost:4000/tickets/${ticket.id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${loggedInUser?.accessToken}` },
    })
      .then((res) => res.json())
      .then(() => {
        toast.success('تیکت با موفقیت حذف گردید');
        console.log('deleted ...');
      })
      .catch(() => {
        toast.error('حذف تیکت با شکست مواجعه شد');
      });
  };
  return (
    <li className="ticket-card">
      <div className="ticket-card__header">
        <h1 className="ticket-card__title">{ticket.title}</h1>
        <div className="ticket-card__actions">
          <div
            className="ticket-card__action ticket-card__action--delete"
            onClick={handleDeleteTicket}
          >
            <IconTrash size="20px" />
          </div>
        </div>
      </div>
      <div className="ticket-card__content">
        <span className="ticket-card__badge">
          {moment(ticket.createdAt).utc(true).locale('fa').fromNow()}
        </span>
        <span className="ticket-card__badge">
          {ticket.status === ETicketStatus.Open
            ? 'تیکت در وضعیت باز میباشد'
            : 'تیکت در وضعیت بسته میباشد'}
        </span>
        <span className="ticket-card__badge">
          {ticket.answerAt ? 'تیکت پاسخ داده شده' : 'تیکت پاسخ داده نشده'}
        </span>
      </div>
      <div className="ticket-card__btn">
        <Button
          onClick={handleOpenDetail.bind(null, ticket)}
          variant="main"
          size="xs"
        >
          نمایش جزئیات تیکت
        </Button>
      </div>
    </li>
  );
};

export default TicketCard;
