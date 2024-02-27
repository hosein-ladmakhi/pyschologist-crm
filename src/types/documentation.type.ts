import { IOrder } from './order.type';

export interface IDocumentation {
  id: number;
  file: string;
  order: IOrder;
}
