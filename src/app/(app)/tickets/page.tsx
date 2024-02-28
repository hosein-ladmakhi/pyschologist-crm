import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import TicketsScreen from '@/screens/App/Tickets';
import { getServerSession } from 'next-auth';

const TicketsPage = async () => {
  const session = (await getServerSession(authOptions)) as {
    accessToken: string;
  };
  const ticketsResponse = await fetch('http://localhost:4000/tickets/own', {
    headers: { Authorization: `Bearer ${session.accessToken}` },
  });
  const tickets = await ticketsResponse.json();
  return <TicketsScreen tickets={tickets?.content} />;
};

export default TicketsPage;
