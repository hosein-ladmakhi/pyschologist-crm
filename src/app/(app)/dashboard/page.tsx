import DashboardScreen from "@/screens/App/Dashboard";
import { fetchOwnReservationOrdersApi } from "@/services/orders";
import { FC } from "react";

export const dynamic = "force-update";

const DashboardPage: FC = async () => {
	const orders = await fetchOwnReservationOrdersApi();
	return <DashboardScreen reserves={orders} />;
};

export default DashboardPage;
