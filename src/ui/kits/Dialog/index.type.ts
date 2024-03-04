import { PropsWithChildren } from "react";

interface IBaseDialog {
  loading?: boolean;
  isOpen?: boolean;
  cardClass?: string;
}

export type TDialogProps = IBaseDialog & PropsWithChildren;
