import { TComponentSize } from '@/types/component.type';

export interface IColumn {
  label: string;
  width?: number;
  name: string;
}

export type TColumns = IColumn[];

export type TRows = Record<string, any>[];

type TTableVariant = 'light' | 'dark';

interface IBaseTable {
  rows: TRows;
  columns: TColumns;
  bordered?: boolean;
  size?: TComponentSize;
  variant?: TTableVariant;
}

export type TTableProps = IBaseTable;
