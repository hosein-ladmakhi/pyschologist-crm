"use client";

import "./index.css";

import { FC } from "react";
import { motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { IAuthDialogProps } from "./index.type";
import { AUTH_MODAL_ANIMATION } from "./index.animation";
import AuthCard from "./_components/AuthCard";

const AuthDialog: FC<IAuthDialogProps> = ({ onClose }) => {
	return (
		<div className="auth-dialog">
			<motion.div {...AUTH_MODAL_ANIMATION} className="paper">
				<div className="header">
					<h1 className="title">صفحه احراز هویت</h1>
					<div onClick={onClose}>
						<IconX />
					</div>
				</div>
				<AuthCard />
			</motion.div>
		</div>
	);
};

export default AuthDialog;
