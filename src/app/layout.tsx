import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./global.css";

import { FC, PropsWithChildren } from "react";
import { iranYekanFont } from "@/constants/font.constant";
import RouteLoadingProvider from "@/providers/RouteLoadingProvider";
import ToastifyProvider from "@/providers/ToastifyProvider";
import SessionProvider from "@/providers/SessionProvider";
import { getServerSession } from "next-auth";
import { Metadata } from "next";
import { authOptions } from "./api/auth/[...nextauth]/options";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  themeColor: "#FFFFFF",
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession(authOptions);
  return (
    <html lang="fa" dir="rtl">
      <body className={iranYekanFont.className}>
        <RouteLoadingProvider>
          <ToastifyProvider>
            <SessionProvider session={session}>{children}</SessionProvider>
          </ToastifyProvider>
        </RouteLoadingProvider>
      </body>
    </html>
  );
};

export default RootLayout;
