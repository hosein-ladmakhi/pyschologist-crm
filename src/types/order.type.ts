import { IDocumentation } from "./documentation.type";
import { IBaseModel } from "./general.type";
import { IPatient } from "./patient.type";
import { ETherapistScheduleType } from "./therapist-schedule.type";
import { ITherapist } from "./therapist.type";

export enum EOrderStatus {
	Done = "Done",
	Cancel = "Cancel",
	Pending = "Pending",
}

export interface IOrder extends IBaseModel {
	documentation: IDocumentation[];
	patient: IPatient;
	therapist: ITherapist;
	day: number;
	city: string;
	address: string;
	date: Date;
	room: number;
	categories: { enName: string; faName: string }[];
	type: ETherapistScheduleType;
	startHour: string;
	endHour: string;
	status: EOrderStatus;
}

export interface IReadyReservationOrdersResponse {
	dates: string[];
}

export interface ISaveOwnOrderRequestBody {
	patient: number;
	therapist: number;
	day: number;
	location: number;
	date: string;
	room: number;
	categories: number[];
	type: ETherapistScheduleType;
	startHour: string;
	endHour: string;
}
