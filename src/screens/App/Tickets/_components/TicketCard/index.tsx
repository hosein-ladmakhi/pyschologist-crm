'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import { FC } from 'react';
import { ITicketCardProps } from './index.type';

const TicketCard: FC<ITicketCardProps> = ({ ticket, handleOpenDetail }) => {
  return (
    <li className="ticket-card">
      <h1 className="ticket-card__title">{ticket}</h1>
      <div className="ticket-card__content">
        <span className="ticket-card__badge">20 روز پیش</span>
        <span className="ticket-card__badge">تیکت در وضعیت باز میباشد</span>
        <span className="ticket-card__badge">پاسخ داده شده</span>
      </div>
      <div className="ticket-card__btn">
        <Button onClick={handleOpenDetail} variant="main" size="xs">
          نمایش جزئیات تیکت
        </Button>
      </div>
    </li>
  );
};

export default TicketCard;
