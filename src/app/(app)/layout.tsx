import AppInstallablePrompt from "@/ui/components/AppInstallablePrompt";
import MainHeader from "@/ui/components/MainHeader";
import { FC, PropsWithChildren } from "react";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <AppInstallablePrompt />
      {children}
    </>
  );
};

export default AppLayout;
