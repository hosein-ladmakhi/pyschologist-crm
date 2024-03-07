"use client";

import { TSignupFormValidation } from "@/app/(app)/(desktop)/main-operation/_components/AuthDialog/_components/SignupForm/index.type";
import { signupMutationApi } from "@/services/auth";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UseFormReset } from "react-hook-form";
import { toast } from "react-toastify";

export const useSignup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = (
    data: TSignupFormValidation,
    reset: UseFormReset<TSignupFormValidation>,
    pathname?: string
  ) => {
    setLoading(true);
    return signupMutationApi(data)
      .then(() => {
        return signIn("credentials", {
          ...data,
          redirect: false,
        });
      })
      .then((res) => {
        if (res?.ok) {
          toast.success("ثبت نام شما با موفقیت انجام گردید");
          if (pathname) router.push("/");
          reset();
        } else {
          toast.error("ثبت نام شما با شکست مواجعه شد");
        }

        return res?.ok;
      })
      .catch(() => {
        toast.error("ثبت نام شما انجام نشد دوباره تلاش کنید");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, handleSignup };
};
