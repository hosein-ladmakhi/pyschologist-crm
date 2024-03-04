'use client';

import './index.css';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Input from '@/ui/kits/Input';
import Button from '@/ui/kits/Button';
import { useForm } from 'react-hook-form';
import {
  IEditProfileDialogProps,
  TEditProfileFormValidation,
} from './index.type';
import { EDIT_PROFILE_DIALOG_ANIMATION } from './index.animation';
import { signOut } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { updateOwnProfileMutationApi } from '@/services/patient';
import { useLoggedInUser } from '@/hooks/useLoggedInUser';
import { useAuthSession } from '@/hooks/useAuthSession';
import { zodResolver } from '@hookform/resolvers/zod';
import { editProfileFormValidation } from './edit-profile.validation';

const EditProfileDialog: FC<IEditProfileDialogProps> = ({ onClose }) => {
  const session = useAuthSession();
  const user = useLoggedInUser();
  const router = useRouter();
  const { control, handleSubmit } = useForm<TEditProfileFormValidation>({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      phone: user?.phone,
      currentPassword: '',
      newPassword: '',
    },
    resolver: zodResolver(editProfileFormValidation),
  });

  const onSubmit = handleSubmit((data) => {
    updateOwnProfileMutationApi(data)
      .then((response) => {
        toast.success('اطلاعات کاربری شما با موفقیت ثبت گردید');
        session.update(response);
        onClose();
        if (data.newPassword) {
          signOut({ redirect: false });
          router.replace('/auth/patient/login');
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error('ویرایش حساب کاربری با شکست مواجعه شد');
      });
  });

  return (
    <motion.div {...EDIT_PROFILE_DIALOG_ANIMATION} className="edit-profile">
      <div className="edit-profile__content">
        <h1 className="edit-profile__title">ویرایش پروفایل کاربر</h1>
        <form className="profile-form" onSubmit={onSubmit}>
          <div className="profile-form__content">
            <div className="profile-form__item">
              <Input
                control={control}
                label="نام"
                name="firstName"
                helperText="نام شما در سایت نمایش داده میشود"
              />
            </div>
            <div className="profile-form__item">
              <Input
                control={control}
                label="نام خانوادگی"
                name="lastName"
                helperText="نام خانوادگی شما در سایت نمایش داده میشود"
              />
            </div>
            <div className="profile-form__item">
              <Input
                control={control}
                label="شماره تماس"
                name="phone"
                helperText="از شماره تماس شما برای پیگیری رزرو استفاده میگردد"
              />
            </div>
            <div className="profile-form__item">
              <Input
                control={control}
                label="گذرواژه جدید"
                name="newPassword"
                helperText="گذرواژه کلید ورود شما به سایت میباشد"
                type="password"
              />
            </div>
            <div className="profile-form__item">
              <Input
                control={control}
                label="گذرواژه فعلی"
                name="currentPassword"
                helperText="درصورتی که تمایل به تغییر گذرواژه دارید پر شود"
                type="password"
              />
            </div>
            <div className="profile-form__action">
              <Button type="submit" variant="main" className="w-full" size="sm">
                اعمال تغییرات
              </Button>
            </div>
            <div className="profile-form__action">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                }}
                variant="error"
                className="w-full"
                size="sm"
              >
                لغو تغییر
              </Button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default EditProfileDialog;
