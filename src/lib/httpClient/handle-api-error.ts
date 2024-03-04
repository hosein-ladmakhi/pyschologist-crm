import { signOut } from "next-auth/react";

export const handleUnauthApi = () => {
  const isBrowser = typeof window !== typeof undefined;
  if (isBrowser) {
    console.log("browser called ...");
    signOut({ redirect: true, callbackUrl: "/auth/login" });
  }
};
