import TicketsScreen from '@/screens/App/Tickets';
import { fetchOwnTicketsApi } from '@/services/tickets';

const TicketsPage = async () => {
  const tickets = await fetchOwnTicketsApi();
  return <TicketsScreen tickets={tickets?.content} />;
};

export default TicketsPage;
