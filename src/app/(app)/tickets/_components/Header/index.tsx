'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import { FC } from 'react';
import { IHeaderProps } from './index.type';
import { useTicketContext } from '../../_context/ticket-context';

const Header: FC<IHeaderProps> = () => {
  const { handleOpenCreate } = useTicketContext();
  return (
    <div className="tickets-header">
      <h1 className="tickets-header__title">تیکت های من</h1>
      <Button onClick={handleOpenCreate} variant="main" isOutline size="sm">
        ثبت تیکت جدید
      </Button>
    </div>
  );
};

export default Header;
