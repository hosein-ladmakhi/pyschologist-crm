"use client";

import { INextAuthSession } from "@/types/general.type";
import { useSession } from "next-auth/react";

export const useAuthSession = (): INextAuthSession => {
  const session: any = useSession();
  const authSession = session as INextAuthSession;
  return authSession;
};
