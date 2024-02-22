'use client';

import './index.css';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { IconX } from '@tabler/icons-react';
import { IAuthDialogProps } from './index.type';
import { useRouter } from 'next/navigation';
import { AUTH_MODAL_ANIMATION } from './index.animation';
import AuthContent from './components/AuthContent';

const AuthDialog: FC<IAuthDialogProps> = ({ onClose }) => {
  const route = useRouter();

  const redirectToAuthLogin = (type: string) =>
    route.push(`/auth/${type}/login`);

  const redirectToAuthSignup = (type: string) =>
    route.push(`/auth/${type}/signup`);

  return (
    <div className="auth-dialog">
      <motion.div {...AUTH_MODAL_ANIMATION} className="paper">
        <div className="header">
          <h1 className="title">صفحه احراز هویت</h1>
          <div onClick={onClose}>
            <IconX />
          </div>
        </div>
        <AuthContent
          type="patient"
          redirectLogin={redirectToAuthLogin.bind(null, 'patient')}
          redirectSignup={redirectToAuthSignup.bind(null, 'patient')}
        />
        <AuthContent
          type="therapist"
          redirectLogin={redirectToAuthLogin.bind(null, 'therapist')}
          redirectSignup={redirectToAuthSignup.bind(null, 'therapist')}
        />
      </motion.div>
    </div>
  );
};

export default AuthDialog;
