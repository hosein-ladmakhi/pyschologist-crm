import { IPatient } from './patient.type';

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

export type TSelectOption = {
  text: string;
  value: any;
};

export interface INextAuthSession {
  status: 'authenticated' | 'unauthenticated' | 'loading';
  update: (user: Partial<IPatient>) => void;
  data: {
    accessToken: string;
    expires: string;
    user: IPatient;
  };
}
