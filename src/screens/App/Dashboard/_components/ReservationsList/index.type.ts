import { IOrder } from '@/types/order.type';

export interface IReservationsListProps {
  data: IOrder[];
  title: string;
  showStatus?: boolean;
}
