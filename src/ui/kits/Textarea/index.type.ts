import { TextareaHTMLAttributes } from 'react';

interface IBaseTextarea {
  rows?: number;
  label: string;
  helper: string;
  control: any;
  name: string;
}

export type TTextareaProps = IBaseTextarea &
  TextareaHTMLAttributes<HTMLTextAreaElement>;
