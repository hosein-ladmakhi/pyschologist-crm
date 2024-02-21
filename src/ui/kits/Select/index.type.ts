interface IBaseSelect {
  label: string;
  options: { text: string; value: any }[];
  emptyPlaceholder: string;
  error?: string;
  additionalClasses?: string;
  multiSelect?: boolean;
}

export type TSelectProps = IBaseSelect;
