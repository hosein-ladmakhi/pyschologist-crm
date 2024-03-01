export type TailwindColorTheme = Record<string, string>;

export interface IBaseModel {
	id: number;
}

export interface IBaseUser {
	firstName: string;
	lastName: string;
	phone: string;
}

export type TPaginatedData<DatasourceType> = {
	content: DatasourceType[];
	count: number;
};
