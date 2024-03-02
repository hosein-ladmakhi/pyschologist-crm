import CreateTicketDialog from './_components/CreateTicketDialog';
import Header from './_components/Header';
import TicketDetailDialog from './_components/TicketDetailDialog';
import TicketLists from './_components/TicketLists';

const TicketsPage = async () => {
  return (
    <div className="container">
      <Header />
      <TicketLists />
      <CreateTicketDialog />
      <TicketDetailDialog />
    </div>
  );
};

export default TicketsPage;
