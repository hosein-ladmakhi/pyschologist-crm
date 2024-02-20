interface IBaseSelect {
  label: string;
  options: { text: string; value: any }[];
  emptyPlaceholder: string;
  error?: string;
  additionalClasses?: string;
}

export type TSelectProps = IBaseSelect;
