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
import AppInstallablePrompt from "@/ui/components/AppInstallablePrompt";

export const metadata: Metadata = {
  manifest: "/manifest.json",
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession();
  return (
    <html lang="fa" dir="rtl">
      <body className={iranYekanFont.className}>
        <RouteLoadingProvider>
          <ToastifyProvider>
            <SessionProvider session={session}>
              <AppInstallablePrompt />
              {children}
            </SessionProvider>
          </ToastifyProvider>
        </RouteLoadingProvider>
      </body>
    </html>
  );
};

export default RootLayout;
