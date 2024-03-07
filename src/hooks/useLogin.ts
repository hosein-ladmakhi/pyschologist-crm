"use client";

import { TLoginFormValidation } from "@/app/(auth)/auth/login/page.type";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UseFormReset } from "react-hook-form";
import { toast } from "react-toastify";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = (
    data: TLoginFormValidation,
    resetForm: UseFormReset<TLoginFormValidation>,
    pathname?: string
  ) => {
    setLoading(true);
    return signIn("credentials", {
      ...data,
      redirect: false,
    })
      .then((res) => {
        if (res?.ok) {
          if (pathname) {
            router.push(pathname);
          }
          toast.success("ورود شما با موفقیت انجام شد");
          resetForm();
        } else {
          toast.error("ورود شما با شکست مواجعه شد");
        }

        return res?.ok;
      })
      .catch(() => {
        toast.error("ورود شما با شکست مواجعه شد");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, handleLogin };
};
