'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import Input from '@/ui/kits/Input';
import Select from '@/ui/kits/Select';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { IFilterTherapistsDialogProps } from './index.type';

const FilterTherapistsDialog: FC<IFilterTherapistsDialogProps> = ({
  handleClose,
}) => {
  const { control } = useForm();
  return (
    <div className="filter-therapist">
      <div className="filter-therapist__card">
        <h1 className="filter-therapist__title">فیلتر پزشکان</h1>
        <form action="" className="filter-therapist__form">
          <Input
            name="firstName"
            control={control}
            helperText=""
            label="نام"
            additionalClass="my-3"
          />
          <Input
            name="lastName"
            control={control}
            helperText=""
            label="نام خانوادگی"
            additionalClass="my-3"
          />
          <Select
            emptyPlaceholder="جنسیت پزشک"
            label="جنسیت"
            additionalClasses="my-3"
            options={[
              {
                text: 'پزشک آقا',
                value: 1,
              },
              {
                text: 'پزشک خانم',
                value: 2,
              },
            ]}
          />
          <Select
            emptyPlaceholder="مدرک تحصیلی پزشک"
            label="مدرک تحصیلی"
            additionalClasses="my-3"
            options={[
              {
                text: 'دیپلم',
                value: 1,
              },
              {
                text: 'فوق دیپلم',
                value: 2,
              },
              {
                text: 'لیسانس',
                value: 3,
              },
              {
                text: 'ارشد',
                value: 4,
              },
              {
                text: 'دکترا',
                value: 4,
              },
            ]}
          />
        </form>
        <div className="filter-therapist__actions">
          <div className="filter-therapist__action">
            <Button
              onClick={handleClose}
              className="w-full"
              variant="main"
              size="sm"
            >
              اعمال فیلتر
            </Button>
          </div>
          <div className="filter-therapist__action">
            <Button
              onClick={handleClose}
              className="w-full"
              variant="error"
              size="sm"
            >
              بستن فیلتر
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTherapistsDialog;
