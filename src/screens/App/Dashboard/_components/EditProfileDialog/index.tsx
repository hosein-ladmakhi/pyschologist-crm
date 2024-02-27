'use client';

import './index.css';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Input from '@/ui/kits/Input';
import Button from '@/ui/kits/Button';
import { useForm } from 'react-hook-form';
import { IEditProfileDialogProps } from './index.type';
import { EDIT_PROFILE_DIALOG_ANIMATION } from './index.animation';
import { useSession } from 'next-auth/react';
import { IPatient } from '@/types/patient.model';

const EditProfileDialog: FC<IEditProfileDialogProps> = ({ onClose }) => {
  const session = useSession();
  const user = session?.data?.user as IPatient;
  const { control } = useForm({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      phone: user?.phone,
    },
  });

  return (
    <motion.div {...EDIT_PROFILE_DIALOG_ANIMATION} className="edit-profile">
      <div className="edit-profile__content">
        <h1 className="edit-profile__title">ویرایش پروفایل کاربر</h1>
        <form className="profile-form" action="">
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
                name="password"
                helperText="گذرواژه کلید ورود شما به سایت میباشد"
              />
            </div>
            <div className="profile-form__item">
              <Input
                control={control}
                label="گذرواژه فعلی"
                name="currentPassword"
                helperText="درصورتی که تمایل به تغییر گذرواژه دارید پر شود"
              />
            </div>
            <div className="profile-form__action">
              <Button variant="main" className="w-full" size="sm">
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
