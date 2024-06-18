"use client";

import "./index.css";

import { FC, useEffect } from "react";
import { TDialogProps } from "./index.type";
import Loading from "../Loading";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

export const MOBILE_ANIMATION = {
  initial: { y: 1000 },
  animate: { y: 0 },
  exit: { y: 1000 },
  transition: { duration: 0.2 },
};

const Dialog: FC<TDialogProps> = ({
  children,
  loading = false,
  isOpen = false,
  cardClass = "",
}) => {
  useEffect(() => {
    const handleBodyScroll = () => {
      const hasDialogOnDocument = document.getElementsByClassName("dialog").length > 0;
      if (hasDialogOnDocument) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    handleBodyScroll();

    return () => {
      handleBodyScroll();
    };
  }, [isOpen]);

  if (!isOpen) return <></>;
  return createPortal(
    <div className="dialog">
      <motion.div {...MOBILE_ANIMATION} className={`dialog__card ${cardClass}`}>
        {loading && (
          <div className="dialog__loading">
            <Loading type="spinner" size="xxxxl" variant="main" />
          </div>
        )}
        {children}
      </motion.div>
    </div>,
    document.body
  );
};

export default Dialog;
