"use client";

import Button from "@/ui/kits/Button";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import PWAInstallerPrompt from "react-pwa-installer-prompt";

const AppInstallablePrompt: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>();

  useEffect(() => {
    const installationPromptStatus =
      typeof window === typeof undefined ? open : window.localStorage.getItem("installation");
    console.log("installationPromptStatus", installationPromptStatus);
    setIsOpen(installationPromptStatus ? installationPromptStatus === "true" : true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    window.localStorage.setItem("installation", "false");
  };

  if (isOpen === false) return <></>;

  return (
    <PWAInstallerPrompt
      render={({ onClick }) => (
        <div className="bg-main/10 w-full p-5">
          <div className="flex justify-start items-center gap-2 mb-4">
            <div className="h-14 w-14 relative">
              <Image
                src="/icons/android/android-launchericon-512-512.png"
                alt="android-icon"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-xs font-bold">اپلیکیشن پزشکی من</h1>
              <p className="text-xs mt-1">دسترسی سریع تر و راحت تر به متخصصان و پزشکان</p>
            </div>
          </div>
          <div className="w-full flex justify-end items-center gap-3">
            <Button onClick={handleClose} isOutline size="xs" variant="main">
              بستن
            </Button>
            <Button
              onClick={() => {
                onClick();
                handleClose();
              }}
              size="xs"
              variant="main"
            >
              دانلود
            </Button>
          </div>
        </div>
      )}
      callback={(data) => console.log(data)}
    />
  );
};

export default AppInstallablePrompt;
