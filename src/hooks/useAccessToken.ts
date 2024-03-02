'use client';

import { useAuthSession } from './useAuthSession';

export const useAccessToken = () => {
  const session = useAuthSession();
  return session.data?.accessToken;
};
