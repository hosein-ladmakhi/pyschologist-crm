"use client";

import "./index.css";

import Button from "@/ui/kits/Button";
import Image from "next/image";
import { FC } from "react";
import { IAuthCardProps } from "./index.type";
import { useRouter } from "next/navigation";

const AuthCard: FC<IAuthCardProps> = () => {
	const route = useRouter();
	const handleRedirectLogin = () => route.push("/auth/login");
	const handleRedirectSignup = () => route.push("/auth/signup");

	return (
		<div className="auth-card">
			<div className="auth-card__content">
				<h1 className="auth-card__title">حساب کاربری بیمار</h1>
				<p className="auth-card__text">
					با ورود یا ثبت نام به حساب کاربری خود میتوانید تمامی رزرو های حال و
					گذشته رو ببینید و حتی رزرو جدیدی ایجاد کنید و همچنین برای رزرو های
					انجام شده کامنت بگذارید
				</p>
				<div className="auth-card__actions">
					<Button
						onClick={handleRedirectLogin}
						variant="main"
						isOutline
						size="xs"
					>
						ورود به حساب
					</Button>
					<Button
						onClick={handleRedirectSignup}
						variant="main"
						isOutline
						size="xs"
					>
						ثبت نام حساب
					</Button>
				</div>
			</div>
			<div className="auth-card__img">
				<Image alt="patient" fill src="/svgs/patient.svg" />
			</div>
		</div>
	);
};

export default AuthCard;
