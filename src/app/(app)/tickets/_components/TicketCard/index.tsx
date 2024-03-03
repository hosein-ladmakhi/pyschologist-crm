'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import { FC, useTransition } from 'react';
import { ITicketCardProps } from './index.type';
import { ETicketStatus } from '@/types/ticket.type';
import moment from 'jalali-moment';
import { IconTrash } from '@tabler/icons-react';
import { toast } from 'react-toastify';
import { useTicketContext } from '../../_context/ticket-context';
import { deleteTicketAction } from '../../actions';
import Loading from '@/ui/kits/Loading';

const TicketCard: FC<ITicketCardProps> = ({ ticket }) => {
  const { handleViewTicket } = useTicketContext();
  const [loading, handleTransition] = useTransition();

  const handleDeleteTicket = () => {
    handleTransition(() => {
      deleteTicketAction(ticket.id)
        .then((res) => {
          if (res) {
            toast.success('تیکت با موفقیت حذف گردید');
            console.log('deleted ...');
          } else {
            toast.error('حذف تیکت با شکست مواجعه شد');
          }
        })
        .catch(() => {
          toast.error('حذف تیکت با شکست مواجعه شد');
        });
    });
  };
  return (
    <li className="ticket-card">
      {loading && (
        <div className="ticket-card__loading">
          <Loading type="spinner" size="xxxxl" variant="main" />
        </div>
      )}
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
          onClick={handleViewTicket.bind(null, ticket)}
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
