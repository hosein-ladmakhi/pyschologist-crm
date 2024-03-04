'use server';

import { saveOwnReservationOrderMutationApi } from '@/services/orders';
import { ISaveOwnOrderRequestBody } from '@/types/order.type';
import { revalidatePath } from 'next/cache';

export const reserveOrderAction = async (data: ISaveOwnOrderRequestBody) => {
  try {
    await saveOwnReservationOrderMutationApi(data);
    revalidatePath('/dashboard');
    return true;
  } catch (error) {
    return false;
  }
};
