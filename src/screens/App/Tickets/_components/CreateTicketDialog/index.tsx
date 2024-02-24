'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import Input from '@/ui/kits/Input';
import Textarea from '@/ui/kits/Textarea';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { ICreateTicketDialogProps } from './index.type';

const CreateTicketDialog: FC<ICreateTicketDialogProps> = ({
  handleCloseDialog,
}) => {
  const { control } = useForm();
  return (
    <div className="create-ticket">
      <div className="create-ticket__card">
        <h1 className="create-ticket__title">ثبت رزرو جدید</h1>
        <form action="" className="create-ticket__form">
          <Input
            control={control}
            helperText="موضوع تیکت خود را مشخص کنید"
            label="موضوع"
            name="title"
            additionalClass="my-4"
          />
          <Textarea
            helper="توضیحاتی از تیکت خود را در این قسمت وارد کنید تا کمک بهتری شود"
            label="توضیحات"
            className="my-4"
          />
          <Button size="sm" variant="primary" className="w-full my-4">
            افزودن فایل
          </Button>
          <div className="create-ticket__actions">
            <div className="create-ticket__action">
              <Button size="sm" variant="main" className="w-full">
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
