"use client";

import { useAuthSession } from "./useAuthSession";

export const useIsAuthenticated = () => {
  const session = useAuthSession();
  console.log(123, session);
  return session.status === "authenticated";
};
