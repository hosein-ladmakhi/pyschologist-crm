"use client";

import "./index.css";

import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const AuthDialog = dynamic(() => import("../AuthDialog"));
const MainHeaderDrawer = dynamic(() => import("./components/Drawer"));

const MainHeader: FC = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const [isOpenAuthDialog, setIsOpenAuthDialog] = useState<boolean>(false);

  const pathname = usePathname();

  const onChangeDrawerStatus = () => setIsOpenDrawer((prev) => !prev);
  const onChangeAuthDialogStatus = () => setIsOpenAuthDialog((prev) => !prev);

  useEffect(() => {
    setIsOpenDrawer(false);
  }, [pathname]);

  return (
    <>
      <header className="header">
        <Link href="/">
          <h1 className="header__title">سایت روانشناسی</h1>
        </Link>
        <div className="header__icon" onClick={onChangeDrawerStatus}>
          <IconMenu fontSize="35px" />
        </div>
      </header>
      <AnimatePresence mode="sync">
        {isOpenDrawer && (
          <Suspense fallback={<></>}>
            <MainHeaderDrawer
              onClose={onChangeDrawerStatus}
              onOpenAuthDialog={onChangeAuthDialogStatus}
            />
          </Suspense>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpenAuthDialog && (
          <Suspense fallback={<></>}>
            <AuthDialog onClose={onChangeAuthDialogStatus} />
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainHeader;
