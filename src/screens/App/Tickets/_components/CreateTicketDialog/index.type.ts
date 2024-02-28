import zod from 'zod';
import { createTicketFormValidation } from './create-ticket-form.validation';
export interface ICreateTicketDialogProps {
  handleCloseDialog: () => void;
}

export type TCreateTicketFormValidation = zod.infer<
  typeof createTicketFormValidation
>;
