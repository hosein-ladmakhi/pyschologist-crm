'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import Image from 'next/image';
import { FC } from 'react';
import { IAuthContentProps } from './index.type';
import { AUTH_CONTENT_TEXT } from './index.constant';

const AuthContent: FC<IAuthContentProps> = ({
  redirectLogin,
  redirectSignup,
  type,
}) => {
  const content = AUTH_CONTENT_TEXT[type];

  return (
    <div className="auth-content">
      <div className="content">
        <h1 className="title">{content.title}</h1>
        <p className="text">{content.paragraph}</p>
        <div className="action-group">
          <Button onClick={redirectLogin} variant="main" isOutline size="xs">
            ورود به حساب
          </Button>
          <Button onClick={redirectSignup} variant="main" isOutline size="xs">
            ثبت نام حساب
          </Button>
        </div>
      </div>
      <div className="img">
        <Image alt={content.imgAlt} fill src={content.img} />
      </div>
    </div>
  );
};

export default AuthContent;
