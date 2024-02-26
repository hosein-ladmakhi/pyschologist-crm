interface IBaseSelect {
  label: string;
  control: any;
  name: string;
  options: { text: string; value: any }[];
  emptyPlaceholder: string;
  additionalClasses?: string;
}

export type TSelectProps = IBaseSelect;
