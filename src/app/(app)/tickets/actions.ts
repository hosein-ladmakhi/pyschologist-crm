'use server';

import {
  createTicketMutationApi,
  deleteTicketMutationApi,
} from '@/services/tickets';
import { revalidateTag } from 'next/cache';

export const createTicketAction = async (data: FormData) => {
  try {
    await createTicketMutationApi(data);
    revalidateTag('tickets');
    return true;
  } catch (error) {
    console.log('ERROR IN CREATE TICKET', error);
    return false;
  }
};

export const deleteTicketAction = async (id: number) => {
  try {
    await deleteTicketMutationApi(id);
    revalidateTag('tickets');
    return true;
  } catch (error) {
    console.log('ERROR IN DELETE TICKET', error);
    return false;
  }
};
