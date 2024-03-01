import { IBaseModel, TPaginatedData } from "./general.type";
import { IPatient } from "./patient.type";

export enum ETicketStatus {
	Open = "Open",
	Close = "Close",
	Report = "Report",
}

export interface ITicket extends IBaseModel {
	createdAt: Date;
	closeAt?: Date;
	title: string;
	content: string;
	attachments: string[];
	patient: IPatient;
	status: ETicketStatus;
	parent?: ITicket;
	childrens: ITicket[];
	answer?: string;
	answerAt?: Date;
}

export type TPaginatedTickets = TPaginatedData<ITicket>;

// export interface IUpdateTicketReqBody {
//   status?: ETicketStatus;
//   closeAt?: Date;
// }

// export interface IAnswerTicketReqBody {
//   answer: string;
// }
