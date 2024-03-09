"use client";

import { useLoggedInUser } from "@/hooks/useLoggedInUser";
import Button from "@/ui/kits/Button";
import Image from "next/image";
import { FC } from "react";
import { useOperationContext } from "../../_context/operation-context";
import { toast } from "react-toastify";
import { signOut } from "next-auth/react";

const Header: FC = () => {
  const loggedInUser = useLoggedInUser();
  const { handleOpenAuthDialog, handleOpenDashboardDialog } = useOperationContext();

  const handleOpenDashboardDlg = () => {
    if (!loggedInUser?.id) {
      toast.error("برای ورود به داشبورد ابتدا باید احراز هویت را انجام دهید");
    } else {
      handleOpenDashboardDialog();
    }
  };

  const handleExit = () => {
    signOut({ redirect: false });
  };

  return (
    <div className="container py-5">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start items-center gap-4">
          <div className="h-20 w-20 relative">
            <Image src="/icons/android/android-launchericon-512-512.png" fill alt="launcher" />
          </div>
          <div>
            <h1 className="text-xl font-bold">سایت روانشناسی من</h1>
            <p className="mt-1 text-base">
              ما به آرامش و زندگی شما اهمیت میدهیم و برای حال خوب شما تلاش میکنیم پس به ما اعتماد
              کنید
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Button isOutline onClick={handleOpenDashboardDlg} variant="main" className="w-32 h-12">
            داشبورد
          </Button>
          {loggedInUser?.id ? (
            <Button isOutline onClick={handleExit} variant="error" className="w-36 h-12">
              خروج از حساب
            </Button>
          ) : (
            <Button
              isOutline
              onClick={handleOpenAuthDialog}
              variant="success"
              className="w-32 h-12"
            >
              احراز هویت
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
