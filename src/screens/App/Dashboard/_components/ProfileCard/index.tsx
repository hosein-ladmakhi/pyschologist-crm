'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import { FC, Suspense, useState } from 'react';
import { IEditProfileCardProps } from './index.type';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { IPatient } from '@/types/patient.model';

const EditProfileDialog = dynamic(() => import('../EditProfileDialog'));

const ProfileCard: FC<IEditProfileCardProps> = ({}) => {
  const [editProfileDialog, setEditProfileDialog] = useState<boolean>(false);
  const session = useSession();
  const user = session?.data?.user as IPatient;
  const onEditProfileDialogChange = () => {
    setEditProfileDialog((prev) => !prev);
  };

  return (
    <>
      <div className="profile-card">
        <div className="profile-card__content">
          <div>
            <h1 className="profile-card__username">
              {user?.firstName} {user?.lastName}
            </h1>
            <p className="profile-card__phone">{user?.phone}</p>
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
