'use client';

import { useAuthSession } from './useAuthSession';

export const useLoggedInUser = () => {
  const session = useAuthSession();
  return session?.data?.user;
};
