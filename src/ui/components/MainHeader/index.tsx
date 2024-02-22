'use client';

import Button from '@/ui/kits/Button';
import { IconMenu, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const items = [
  { href: '/', text: 'صفحه اصلی' },
  { href: '/dashboard', text: 'داشبورد' },
  { href: '/categories', text: 'زمینه های مشاوره' },
  { href: '/therapists', text: 'لیست پزشکان' },
  { href: '/tickets', text: 'تیکت' },
];

const MainHeader: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isOpenAuth, setOpenAuth] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="container flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-lg">سایت روانشناسی</h1>
        </Link>
        <div
          className="h-10 w-10 flex justify-end items-center"
          onClick={() => setOpen(true)}
        >
          <IconMenu fontSize="35px" />
        </div>
      </header>
      <AnimatePresence mode="sync">
        {isOpen && (
          <div className="fixed top-0 left-0 h-full w-full bg-neutral/50 flex justify-start items-start z-50">
            <motion.nav
              initial={{ translateX: 1000 }}
              animate={{ translateX: 0 }}
              exit={{ translateX: 1000 }}
              transition={{ duration: 0.2 }}
              className="flex justify-start items-start flex-col h-full w-10/12 bg-white p-10"
            >
              <h1 className="font-bold mb-5">سایت روانشناسی</h1>
              <ul>
                {items.map((item) => (
                  <li className="text-sm my-2" key={item.href}>
                    <Link href={item.href}>{item.text}</Link>
                  </li>
                ))}
                <li className="text-sm my-2" onClick={() => setOpenAuth(true)}>
                  احراز هویت
                </li>
              </ul>
              <Button
                onClick={() => setOpen(false)}
                variant="error"
                className="w-full !mt-auto"
                size="sm"
              >
                بستن منو
              </Button>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpenAuth && (
          <div className="fixed top-0 left-0 h-full w-full bg-neutral/50 flex justify-center items-end z-50">
            <motion.div
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              exit={{ y: 1000 }}
              transition={{ duration: 0.4 }}
              className="w-full bg-white p-5 flex flex-col justify-start items-start overflow-auto"
            >
              <div className="flex justify-between items-center w-full">
                <h1 className="text-base font-bold">صفحه احراز هویت</h1>
                <div onClick={() => setOpenAuth(false)}>
                  <IconX />
                </div>
              </div>
              <div className="flex justify-between items-center w-full gap-2 my-5">
                <div className="flex-1">
                  <h1 className="font-bold text-sm">حساب کاربری بیمار</h1>
                  <p className="text-xs mt-2 leading-5">
                    با ورود یا ثبت نام به حساب کاربری خود میتوانید تمامی رزرو
                    های حال و گذشته رو ببینید و حتی رزرو جدیدی ایجاد کنید و
                    همچنین برای رزرو های انجام شده کامنت بگذارید
                  </p>
                  <div className="flex justify-start items-center gap-3 mt-4">
                    <Button variant="main" isOutline size="xs">
                      ورود به حساب
                    </Button>
                    <Button variant="main" isOutline size="xs">
                      ثبت نام حساب
                    </Button>
                  </div>
                </div>
                <div className="h-44 w-16 relative">
                  <Image alt="patient" fill src="/svgs/patient.svg" />
                </div>
              </div>
              <div className="flex justify-between items-center w-full gap-4 my-5">
                <div className="h-44 w-16 relative">
                  <Image alt="patient" fill src="/svgs/therapist.svg" />
                </div>
                <div className="flex-1">
                  <h1 className="font-bold text-sm">حساب کاربری مشاور</h1>
                  <p className="text-xs mt-2 leading-5">
                    با ورود یا ثبت نام به عنوان پزشک میتوانید بیماران خود را جذب
                    کنید و داکیومنت های مربوط به رزرو یا بیماران رو مدیریت کنید
                    و همچنین جلسات خود را بررسی کنید
                  </p>
                  <div className="flex justify-start items-center gap-3 mt-4">
                    <Button variant="main" isOutline size="xs">
                      ورود به حساب
                    </Button>
                    <Button variant="main" isOutline size="xs">
                      ثبت نام حساب
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainHeader;
