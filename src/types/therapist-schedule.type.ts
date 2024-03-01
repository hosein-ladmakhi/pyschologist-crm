import { IBaseModel } from "./general.type";
import { ILocation } from "./location.type";
import { ITherapist } from "./therapist.type";

export enum ETherapistScheduleType {
	online = "online",
	onsite = "onsite",
	both = "both",
}

export interface ITherapistSchedules extends IBaseModel {
	therapist: ITherapist;
	day: number;
	startHour: string;
	endHour: string;
	location: ILocation;
	type: ETherapistScheduleType;
	room: number;
}

export interface ITherapistSchedulesPerDay {
	day: number;
	items: ITherapistSchedules[];
}
