"use client";

import "./index.css";

import { FC } from "react";
import { IconX } from "@tabler/icons-react";
import { IAuthDialogProps } from "./index.type";
import AuthCard from "./_components/AuthCard";
import Dialog from "@/ui/kits/Dialog";

const AuthDialog: FC<IAuthDialogProps> = ({ onClose }) => {
  return (
    <Dialog isOpen>
      <div className="auth-dialog">
        <div className="header">
          <h1 className="title">صفحه احراز هویت</h1>
          <div onClick={onClose}>
            <IconX />
          </div>
        </div>
        <AuthCard />
      </div>
    </Dialog>
  );
};

export default AuthDialog;
