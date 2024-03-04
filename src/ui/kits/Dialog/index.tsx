"use client";

import "./index.css";

import { FC } from "react";
import { TDialogProps } from "./index.type";
import Loading from "../Loading";

const Dialog: FC<TDialogProps> = ({
  children,
  loading = false,
  isOpen = false,
  cardClass = "",
}) => {
  if (!isOpen) return <></>;
  return (
    <div className="dialog">
      <div className={`dialog__card ${cardClass}`}>
        {loading && (
          <div className="dialog__loading">
            <Loading type="spinner" size="xxxxl" variant="main" />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Dialog;
