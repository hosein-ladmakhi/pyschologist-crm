import { FC, PropsWithChildren } from "react";
import { OperationContextProvider } from "./_context/operation-context";

const MainOperationLayout: FC<PropsWithChildren> = ({ children }) => (
  <OperationContextProvider>{children}</OperationContextProvider>
);

export default MainOperationLayout;
