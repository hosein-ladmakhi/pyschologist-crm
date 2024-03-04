"use client";

import "./index.css";

import Button from "@/ui/kits/Button";
import Input from "@/ui/kits/Input";
import Textarea from "@/ui/kits/Textarea";
import { FC, useRef, useTransition } from "react";
import { useForm } from "react-hook-form";
import { ICreateTicketDialogProps, TCreateTicketFormValidation } from "./index.type";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTicketFormValidation } from "./create-ticket-form.validation";
import { useTicketContext } from "../../_context/ticket-context";
import { createTicketAction } from "../../actions";
import Loading from "@/ui/kits/Loading";
import Dialog from "@/ui/kits/Dialog";

const CreateTicketDialog: FC<ICreateTicketDialogProps> = ({}) => {
  const [loading, handleTransition] = useTransition();
  const { control, handleSubmit, reset } = useForm<TCreateTicketFormValidation>({
    resolver: zodResolver(createTicketFormValidation),
  });

  const { createTicketDialog, handleCloseCreate } = useTicketContext();

  const filepickerRef = useRef<HTMLInputElement>(null);

  const handleOpenFile = () => filepickerRef?.current?.click();

  const onSubmit = handleSubmit((data) => {
    handleTransition(() => {
      const formdata = new FormData();
      formdata.append("title", data.title);
      formdata.append("content", data.content);
      Array.from(filepickerRef?.current?.files!).map((file: any) =>
        formdata.append("attachments", file)
      );
      createTicketAction(formdata)
        .then((isSuccess) => {
          if (isSuccess) {
            toast.success("تیکت با موفقیت ثبت گردید");
          } else {
            toast.error("ساخت تیکت شکست خورد");
          }
        })
        .catch(() => {
          toast.error("ساخت تیکت شکست خورد");
        })
        .finally(() => {
          handleCloseCreate();
          reset();
          filepickerRef.current!.files = null;
        });
    });
  });

  if (!createTicketDialog) return <></>;

  return (
    <Dialog loading={loading} isOpen={createTicketDialog} cardClass="!overflow-auto pb-0">
      <div className="create-ticket">
        <h1 className="create-ticket__title">ثبت رزرو جدید</h1>
        <form onSubmit={onSubmit} className="create-ticket__form">
          <Input
            control={control}
            helperText="موضوع تیکت خود را مشخص کنید"
            label="موضوع"
            name="title"
            className="my-4"
          />
          <Textarea
            name="content"
            helper="توضیحاتی از تیکت خود را در این قسمت وارد کنید تا کمک بهتری شود"
            label="توضیحات"
            className="my-4"
            control={control}
          />
          <Button
            type="button"
            size="sm"
            variant="primary"
            className="relative w-full my-4"
            onClick={handleOpenFile}
          >
            افزودن فایل
          </Button>
          <input accept="application/pdf" ref={filepickerRef} type="file" hidden multiple />
          <div className="create-ticket__actions">
            <div className="create-ticket__action">
              <Button type="submit" size="sm" variant="main" className="w-full">
                ثبت تیکت
              </Button>
            </div>
            <div className="create-ticket__action">
              <Button onClick={handleCloseCreate} size="sm" variant="error" className="w-full">
                بازگشت
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default CreateTicketDialog;
