'use client';

import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import { FC } from 'react';
import { ISessionProviderProps } from './index.type';

const SessionProvider: FC<ISessionProviderProps> = ({ children, session }) => {
  return <NextAuthProvider session={session}>{children}</NextAuthProvider>;
};

export default SessionProvider;
