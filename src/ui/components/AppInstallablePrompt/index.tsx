"use client";

import { FC } from "react";
import PWAInstallerPrompt from "react-pwa-installer-prompt";

const AppInstallablePrompt: FC = () => {
  return (
    <PWAInstallerPrompt
      render={({ onClick }) => (
        <button type="button" onClick={onClick}>
          // make sure you pass onClick Install
        </button>
      )}
      callback={(data) => console.log(data)}
    />
  );
};

export default AppInstallablePrompt;
