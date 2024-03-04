"use client";

import "./index.css";

import { FC } from "react";
import { TDialogProps } from "./index.type";
import Loading from "../Loading";
import { motion } from "framer-motion";

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
  if (!isOpen) return <></>;
  return (
    <div className="dialog">
      <motion.div {...MOBILE_ANIMATION} className={`dialog__card ${cardClass}`}>
        {loading && (
          <div className="dialog__loading">
            <Loading type="spinner" size="xxxxl" variant="main" />
          </div>
        )}
        {children}
      </motion.div>
    </div>
  );
};

export default Dialog;
