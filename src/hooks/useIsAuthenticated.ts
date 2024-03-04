"use client";

import { useAuthSession } from "./useAuthSession";

export const useIsAuthenticated = () => {
  const session = useAuthSession();
  return session.status === "authenticated";
};
