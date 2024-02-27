import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import DashboardScreen from '@/screens/App/Dashboard';
import { getServerSession } from 'next-auth/next';
import { FC } from 'react';

export const dynamic = 'force-update';

const DashboardPage: FC = async () => {
  const session = (await getServerSession(authOptions)) as {
    accessToken: string;
  };
  const ordersResponse = await fetch(
    'http://localhost:4000/orders/patient/own',
    {
      headers: { Authorization: `Bearer ${session.accessToken}` },
    },
  );
  const orders = await ordersResponse.json();
  return <DashboardScreen reserves={orders} />;
};

export default DashboardPage;
