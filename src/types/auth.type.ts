import { IPatient } from "./patient.type";

export interface ILoginRequestBody {
	phone: string;
	password: string;
}

export interface ILoginResponse {
	token: string;
	user: IPatient;
}

export interface ISignupRequestBody {
	firstName: string;
	lastName: string;
	phone: string;
	password: string;
}

export interface ISignupResponse {
	token: string;
}
