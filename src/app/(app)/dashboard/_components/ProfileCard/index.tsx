"use client";

import "./index.css";

import Button from "@/ui/kits/Button";
import { FC, Suspense, useState } from "react";
import { IEditProfileCardProps } from "./index.type";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useLoggedInUser } from "@/hooks/useLoggedInUser";

const EditProfileDialog = dynamic(() => import("../EditProfileDialog"));

const ProfileCard: FC<IEditProfileCardProps> = ({}) => {
  const [editProfileDialog, setEditProfileDialog] = useState<boolean>(false);
  const user = useLoggedInUser();

  const handleOpenEditProfile = () => {
    setEditProfileDialog(true);
  };

  const handleCloseEditProfile = () => {
    setEditProfileDialog(false);
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
          <Button onClick={handleOpenEditProfile} variant="main" isOutline size="xs">
            ویرایش حساب
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {editProfileDialog && (
          <Suspense fallback={<></>}>
            <EditProfileDialog onClose={handleCloseEditProfile} />
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileCard;
