'use client';

import { Suspense, useState } from 'react';
import Header from './_components/Header';
import TicketCard from './_components/TicketCard';
import dynamic from 'next/dynamic';

const TicketDetailDialog = dynamic(
  () => import('./_components/TicketDetailDialog'),
);

const CreateTicketDialog = dynamic(
  () => import('./_components/CreateTicketDialog'),
);

const TICKETS_DATA = [
  'سلام چجوری میتونم در آزمون های روانشناسی شرکت بکنم ؟',
  'نحوه دریافت مدرک روانشناسی در پزشک من',
  'دلیل اینکه نمراتم اینقدر پایین شده چه چیزی میباشد',
  'میشه اکانت من رو باز کنید خواهش میکنم من توش کلی دیتا داشتم',
  'میتونم قسطی هم پرداخت کنم اطلاعات مختلف رو',
];

const TicketsScreen = () => {
  const [ticketDetailDialog, setTicketDetailDialog] = useState<boolean>(false);
  const [createTicketDialog, setCreateTicketDialog] = useState<boolean>(false);

  const handleOpenCreateTicket = () => setCreateTicketDialog(true);
  const handleCloseCreateTicket = () => setCreateTicketDialog(false);

  const handleOpenDetailTicket = () => setTicketDetailDialog(true);
  const handleCloseDetailTicket = () => setTicketDetailDialog(false);

  return (
    <div className="container">
      <Header handleOpenDialog={handleOpenCreateTicket} />
      <ul className="mt-10">
        {TICKETS_DATA.map((e) => (
          <TicketCard
            handleOpenDetail={handleOpenDetailTicket}
            ticket={e}
            key={e}
          />
        ))}
      </ul>

      {createTicketDialog && (
        <Suspense fallback={<></>}>
          <CreateTicketDialog handleCloseDialog={handleCloseCreateTicket} />
        </Suspense>
      )}

      {ticketDetailDialog && (
        <Suspense fallback={<></>}>
          <TicketDetailDialog
            handleCloseDetail={handleCloseDetailTicket}
            handleOpenDetail={handleOpenDetailTicket}
          />
        </Suspense>
      )}
    </div>
  );
};

export default TicketsScreen;
