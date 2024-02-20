import { InputHTMLAttributes } from 'react';

interface IBaseInput {
  label: string;
  placeholder?: string;
  helperText: string;
  additionalClass?: string;
  control: any;
  name: string;
}

export type TInputProps = IBaseInput & InputHTMLAttributes<HTMLInputElement>;
