'use client';

import Button from '@/ui/kits/Button';
import { IconMenu } from '@tabler/icons-react';
import classNames from 'classnames';
import Link from 'next/link';
import { FC, useState } from 'react';

const items = [
  { href: '/', text: 'صفحه اصلی' },
  { href: '/dashboard', text: 'داشبورد' },
  { href: '/auth/therapist/signup', text: 'ثبت نام به عنوان مشاور' },
  { href: '/auth/therapist/login', text: 'ورود به حساب مشاور' },
  { href: '/auth/patient/signup', text: 'ثبت نام به عنوان کاربر' },
  { href: '/auth/patient/login', text: 'ورود به حساب کاربر' },
  { href: '/categories', text: 'زمینه های مشاوره' },
  { href: '/categories', text: 'لیست پزشکان' },
  { href: '/tickets', text: 'تیکت' },
];

const MainHeader: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
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
      <div
        className={classNames(
          'absolute top-0 right-0 h-full w-full bg-neutral/50 transition-all overflow-hidden',
          { 'w-0 p-0 opacity-0': !isOpen },
        )}
      >
        <nav className="flex justify-start items-start flex-col h-full w-10/12 bg-white p-10">
          <h1 className="font-bold mb-5">سایت روانشناسی</h1>
          <ul>
            {items.map((item) => (
              <li className="text-sm my-2" key={item.href}>
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => setOpen(false)}
            variant="main"
            className="w-full !mt-auto"
            size="sm"
          >
            بستن منو
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
