import { IBaseModel, IBaseUser } from "./general.type";

export interface IPatient extends IBaseModel, IBaseUser {}

export interface IUpdateOwnProfile {
	firstName?: string;
	lastName?: string;
	phone?: string;
	currentPassword?: string;
	newPassword?: string;
}
