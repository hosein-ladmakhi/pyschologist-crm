"use client";

import Button from "@/ui/kits/Button";
import Input from "@/ui/kits/Input";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { TEditProfileFormValidation } from "./index.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { editProfileFormValidation } from "@/constants/edit-profile.validation";
import { useLoggedInUser } from "@/hooks/useLoggedInUser";
import { useAuthSession } from "@/hooks/useAuthSession";
import { updateOwnProfileMutationApi } from "@/services/patient";
import { toast } from "react-toastify";
import { signOut } from "next-auth/react";
import { useOperationContext } from "../../../../_context/operation-context";

const EditProfile: FC = () => {
  const currentUser = useLoggedInUser();
  const { handleCloseDashboardDialog } = useOperationContext();
  const [loading, setLoading] = useState<boolean>(false);
  const session = useAuthSession();
  const { control, handleSubmit } = useForm<TEditProfileFormValidation>({
    resolver: zodResolver(editProfileFormValidation),
    defaultValues: {
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      phone: currentUser?.phone,
      currentPassword: "",
      newPassword: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    setLoading(true);
    updateOwnProfileMutationApi(data)
      .then((response) => {
        console.log(response);
        if (response?.id) {
          toast.success("اطلاعات کاربری شما با موفقیت ثبت گردید");
          session.update(response);
          if (data.newPassword) {
            signOut({ redirect: false });
            handleCloseDashboardDialog();
            toast.info("دوباره وارد حساب کابری خود بشوید");
          }
          return;
        }
        throw new Error();
      })
      .catch((error) => {
        console.log(error);
        toast.error("ویرایش حساب کاربری با شکست مواجعه شد");
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <>
      <h1 className="text-lg font-bold mb-5">ویرایش حساب کاربری</h1>
      <form onSubmit={onSubmit}>
        <Input
          control={control}
          label="نام کاربر"
          name="firstName"
          helperText="نام کاربر در سایت نمایش داده میشود"
          className="my-3"
        />
        <Input
          control={control}
          label="نام خانوادگی"
          name="lastName"
          helperText="نام خانوادگی کاربر در سایت نمایش داده میشود"
          className="my-3"
        />
        <Input
          control={control}
          label="شماره تماس"
          name="phone"
          helperText="شماره تماسی که از طریق آن میتوانید وارد حساب کاربری بشوید"
          className="my-3"
          disabled
        />
        <Input
          control={control}
          label="گذرواژه جدید"
          name="newPassword"
          helperText="گذرواژه جدیدی که برای ورود به حساب استفاده میگردد"
          className="my-3"
          type="password"
        />
        <Input
          control={control}
          label="گذرواژه فعلی"
          name="currentPassword"
          helperText="گذرواژه فعلی که برای ورود به حساب استفاده میگردد"
          className="my-3"
          type="password"
        />
        <Button type="submit" loading={loading} variant="main" shape="block" className="mt-8">
          ویرایش حساب
        </Button>
      </form>
    </>
  );
};

export default EditProfile;
