"use client";

import Dialog from "@/ui/kits/Dialog";
import { FC } from "react";
import AuthDialogLoginForm from "./_components/LoginForm";
import AuthDialogSignupForm from "./_components/SignupForm";
import { useOperationContext } from "../../_context/operation-context";

const AuthDialog: FC = () => {
  const { handleCloseAuthDialog, isAuthDialogOpen } = useOperationContext();

  return (
    <Dialog isOpen={isAuthDialogOpen} cardClass="h-[660px]">
      <div className="grid grid-cols-12 gap-3 w-full">
        <div className="col-span-6">
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-bold text-lg">ساخت حساب کاربری جدید</h1>
          </div>
          <AuthDialogSignupForm handleClose={handleCloseAuthDialog} />
        </div>
        <div className="col-span-6">
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-bold text-lg">ورود به حساب کاربری</h1>
          </div>
          <AuthDialogLoginForm handleClose={handleCloseAuthDialog} />
        </div>
      </div>
    </Dialog>
  );
};

export default AuthDialog;
