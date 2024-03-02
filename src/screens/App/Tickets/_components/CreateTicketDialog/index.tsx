'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import Input from '@/ui/kits/Input';
import Textarea from '@/ui/kits/Textarea';
import { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  ICreateTicketDialogProps,
  TCreateTicketFormValidation,
} from './index.type';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTicketFormValidation } from './create-ticket-form.validation';
import { createTicketMutationApi } from '@/services/tickets';

const CreateTicketDialog: FC<ICreateTicketDialogProps> = ({
  handleCloseDialog,
}) => {
  const { control, handleSubmit } = useForm<TCreateTicketFormValidation>({
    resolver: zodResolver(createTicketFormValidation),
  });
  const filepickerRef = useRef<HTMLInputElement>(null);

  const handleOpenFile = () => filepickerRef?.current?.click();

  const onSubmit = handleSubmit((data) => {
    console.log('create ticket', data);
    const formdata = new FormData();
    formdata.append('title', data.title);
    formdata.append('content', data.content);
    Array.from(filepickerRef?.current?.files!).map((file) =>
      formdata.append('attachments', file),
    );
    createTicketMutationApi(formdata)
      .then((data) => {
        console.log(data);
        toast.success('تیکت با موفقیت ثبت گردید');
        handleCloseDialog();
      })
      .catch((error) => {
        console.log('error', error);
      });
  });

  return (
    <div className="create-ticket">
      <div className="create-ticket__card">
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
          <input
            accept="application/pdf"
            ref={filepickerRef}
            type="file"
            hidden
            multiple
          />
          <div className="create-ticket__actions">
            <div className="create-ticket__action">
              <Button type="submit" size="sm" variant="main" className="w-full">
                ثبت تیکت
              </Button>
            </div>
            <div className="create-ticket__action">
              <Button
                onClick={handleCloseDialog}
                size="sm"
                variant="error"
                className="w-full"
              >
                بازگشت
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTicketDialog;
