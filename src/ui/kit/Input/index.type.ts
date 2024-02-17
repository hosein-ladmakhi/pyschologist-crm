import { InputHTMLAttributes } from 'react';

interface IBaseInput {
  label: string;
  error?: string;
  placeholder?: string;
  helperText: string;
  additionalClass?: string;
}

export type TInputProps = IBaseInput & InputHTMLAttributes<HTMLInputElement>;
