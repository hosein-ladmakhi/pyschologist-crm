import "./global.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

import { FC, PropsWithChildren } from "react";
import { iranYekanFont } from "@/constants/font.constant";
import RouteLoadingProvider from "@/providers/RouteLoadingProvider";
import ToastifyProvider from "@/providers/ToastifyProvider";
import SessionProvider from "@/providers/SessionProvider";
import { getServerSession } from "next-auth";
import { Metadata } from "next";
import { userAgent } from "next/server";
import { headers } from "next/headers";
import { redirect, usePathname } from "next/navigation";

export const metadata: Metadata = {
  manifest: "/manifest.json",
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession();
  const isMobilePlatform = userAgent({ headers: headers() }).device.type === "mobile";
  const desktopPageURL = "/main-operation";
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
