interface IBaseImagePicker {
  avatarClassName: string;
  imageClassName: string;
  alt: string;
  defaultSrc: string;
  picker?: boolean;
  onChangeImage?: (file?: File) => void;
}

export type TImagePickerProps = IBaseImagePicker;
