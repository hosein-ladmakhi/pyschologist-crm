import { TextareaHTMLAttributes } from 'react';

interface IBaseTextarea {
  rows?: number;
  label: string;
  helper: string;
  error?: string;
}

export type TTextareaProps = IBaseTextarea &
  TextareaHTMLAttributes<HTMLTextAreaElement>;
