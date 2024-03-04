'use client';

import './index.css';

import Button from '@/ui/kits/Button';
import Input from '@/ui/kits/Input';
import Select from '@/ui/kits/Select';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import {
  IFilterTherapistsDialogProps,
  TFilterFormValidation,
} from './index.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { filterFormValidation } from './filter-form.validation';
import { EDegtreeOfEducation, EGender } from '@/types/therapist.type';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useTherapistsContext } from '../../_context/therapists-context';

const FilterTherapistsDialog: FC<IFilterTherapistsDialogProps> = () => {
  const { handleCloseFilter, isOpenFilter } = useTherapistsContext();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { control, handleSubmit } = useForm<TFilterFormValidation>({
    resolver: zodResolver(filterFormValidation),
  });

  if (!isOpenFilter) return <></>;

  const onSubmit = handleSubmit((data) => {
    const url = new URLSearchParams(searchParams);
    Object.keys(data)
      .filter((key) => (data as any)[key])
      .map((key) => url.set(key, (data as any)[key]));
    router.push(pathname + '?' + url);
    handleCloseFilter();
  });

  return (
    <div className="filter-therapist">
      <div className="filter-therapist__card">
        <h1 className="filter-therapist__title">فیلتر پزشکان</h1>
        <form className="filter-therapist__form">
          <Input
            name="firstName"
            control={control}
            helperText=""
            label="نام"
            className="my-3"
          />
          <Input
            name="lastName"
            control={control}
            helperText=""
            label="نام خانوادگی"
            className="my-3"
          />
          <Select
            control={control}
            name="gender"
            emptyPlaceholder="جنسیت پزشک"
            label="جنسیت"
            additionalClasses="my-3"
            options={[
              {
                text: 'پزشک آقا',
                value: EGender.male,
              },
              {
                text: 'پزشک خانم',
                value: EGender.female,
              },
            ]}
          />
          <Select
            control={control}
            name="degreeOfEducation"
            emptyPlaceholder="مدرک تحصیلی پزشک"
            label="مدرک تحصیلی"
            additionalClasses="my-3"
            options={[
              {
                text: 'دیپلم',
                value: EDegtreeOfEducation.diploma,
              },
              {
                text: 'فوق دیپلم',
                value: EDegtreeOfEducation.associate,
              },
              {
                text: 'لیسانس',
                value: EDegtreeOfEducation.bachelor,
              },
              {
                text: 'ارشد',
                value: EDegtreeOfEducation.master,
              },
              {
                text: 'دکترا',
                value: EDegtreeOfEducation.doctorate,
              },
            ]}
          />
        </form>
        <div className="filter-therapist__actions">
          <div className="filter-therapist__action">
            <Button
              onClick={onSubmit}
              className="w-full"
              variant="main"
              size="sm"
            >
              اعمال فیلتر
            </Button>
          </div>
          <div className="filter-therapist__action">
            <Button
              onClick={handleCloseFilter.bind(null, false)}
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
