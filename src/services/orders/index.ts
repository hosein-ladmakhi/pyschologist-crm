import { httpGet, httpPost } from "@/lib/httpClient";
import {
  IOrder,
  IReadyReservationOrdersResponse,
  ISaveOwnOrderRequestBody,
} from "@/types/order.type";

// HTTP GET
export const fetchOwnReservationOrdersApi = () => httpGet<IOrder[]>("/orders/patient/own");

export const fetchReadyReservationScheduleApi = (day: number, therapistId: number, time: string) =>
  httpGet<IReadyReservationOrdersResponse>(
    `/orders/reservation-date/${day}/${therapistId}/${time}`
  );

// HTTP POST
export const saveOwnReservationOrderMutationApi = (data: ISaveOwnOrderRequestBody) =>
  httpPost<IOrder, ISaveOwnOrderRequestBody>("/orders", data);
