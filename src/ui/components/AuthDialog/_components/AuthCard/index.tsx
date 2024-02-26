'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import Image from 'next/image';
import { FC } from 'react';
import { IAuthCardProps } from './index.type';
import { AUTH_CONTENT_TEXT } from './index.constant';

const AuthCard: FC<IAuthCardProps> = ({
  redirectLogin,
  redirectSignup,
  type,
}) => {
  const content = AUTH_CONTENT_TEXT[type];

  return (
    <div className="auth-card">
      <div className="auth-card__content">
        <h1 className="auth-card__title">{content.title}</h1>
        <p className="auth-card__text">{content.paragraph}</p>
        <div className="auth-card__actions">
          <Button onClick={redirectLogin} variant="main" isOutline size="xs">
            ورود به حساب
          </Button>
          <Button onClick={redirectSignup} variant="main" isOutline size="xs">
            ثبت نام حساب
          </Button>
        </div>
      </div>
      <div className="auth-card__img">
        <Image alt={content.imgAlt} fill src={content.img} />
      </div>
    </div>
  );
};

export default AuthCard;
