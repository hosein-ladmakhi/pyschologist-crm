import { Suspense } from 'react';
import CreateTicketDialog from './_components/CreateTicketDialog';
import Header from './_components/Header';
import TicketDetailDialog from './_components/TicketDetailDialog';
import TicketLists from './_components/TicketLists';
import TicketListsLoading from './_components/TicketListsLoading';

export const dynamic = 'force-dynamic';

const TicketsPage = () => {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={<TicketListsLoading />}>
        <TicketLists />
      </Suspense>
      <CreateTicketDialog />
      <TicketDetailDialog />
    </div>
  );
};

export default TicketsPage;
