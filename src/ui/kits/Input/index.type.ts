import { InputHTMLAttributes } from 'react';

interface IBaseInput {
  label: string;
  placeholder?: string;
  helperText: string;
  control: any;
  name: string;
}

export type TInputProps = IBaseInput & InputHTMLAttributes<HTMLInputElement>;
