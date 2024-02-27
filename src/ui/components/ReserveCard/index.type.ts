import { IOrder } from '@/types/order.type';

export interface IReserveCardProps {
  handleOpenLocation: (reserve: IOrder) => void;
  showStatus?: boolean;
  reserve: IOrder;
}
