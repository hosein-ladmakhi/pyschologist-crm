'use client';

import './index.css';

import { motion } from 'framer-motion';
import { MAIN_HEADER_MENU } from '../../index.constant';
import { MAIN_HEADER_DRAWER_ANIMATION } from './index.animation';
import Link from 'next/link';
import Button from '@/ui/kits/Button';
import { FC } from 'react';
import { IMainHeaderDrawerProps } from './index.type';
import { signOut, useSession } from 'next-auth/react';

const MainHeaderDrawer: FC<IMainHeaderDrawerProps> = ({
  onClose,
  onOpenAuthDialog,
}) => {
  const session = useSession();
  return (
    <div className="drawer-content">
      <motion.nav {...MAIN_HEADER_DRAWER_ANIMATION} className="content">
        <h1 className="title">سایت روانشناسی</h1>
        <ul>
          {MAIN_HEADER_MENU.filter((item) =>
            item.when === 'auth' ? session.status === 'authenticated' : true,
          ).map((item) => (
            <li className="item" key={item.href}>
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
          {session.status === 'authenticated' ? (
            <li
              onClick={() =>
                signOut({ redirect: true, callbackUrl: '/auth/patient/login' })
              }
              className="item"
            >
              خروج از حساب کاربری
            </li>
          ) : (
            <li className="item" onClick={onOpenAuthDialog}>
              احراز هویت
            </li>
          )}
        </ul>
        <Button
          onClick={onClose}
          variant="error"
          className="w-full !mt-auto"
          size="sm"
        >
          بستن منو
        </Button>
      </motion.nav>
    </div>
  );
};

export default MainHeaderDrawer;
