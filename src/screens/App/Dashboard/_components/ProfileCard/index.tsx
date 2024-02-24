'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import { FC, Suspense, useState } from 'react';
import { IEditProfileCardProps } from './index.type';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const EditProfileDialog = dynamic(() => import('../EditProfileDialog'));

const ProfileCard: FC<IEditProfileCardProps> = ({}) => {
  const [editProfileDialog, setEditProfileDialog] = useState<boolean>(false);
  const onEditProfileDialogChange = () => {
    setEditProfileDialog((prev) => !prev);
  };

  return (
    <>
      <div className="profile-card">
        <div className="profile-card__content">
          <div>
            <h1 className="profile-card__username">حسین لادمخی نژاد</h1>
            <p className="profile-card__phone">09925087579</p>
          </div>
          <Button
            onClick={onEditProfileDialogChange}
            variant="main"
            isOutline
            size="xs"
          >
            ویرایش حساب
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {editProfileDialog && (
          <Suspense fallback={<></>}>
            <EditProfileDialog onClose={onEditProfileDialogChange} />
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileCard;
