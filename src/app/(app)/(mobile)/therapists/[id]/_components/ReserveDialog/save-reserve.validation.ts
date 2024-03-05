import zod from 'zod';

export const saveReserveFormValidation = zod.object({
  day: zod.number({ required_error: 'روز رزرو را مشخص کنید' }),
  type: zod.string({ required_error: 'شیوه برگزاری جلسه را مشخص کنید' }),
  time: zod.string({ required_error: 'بازه زمانی برگزاری را مشخص کنید' }),
  date: zod.string({ required_error: 'تاریخ برگزاری جلسه را انتخاب نمائید' }),
  categories: zod.coerce.number({
    required_error: 'زمینه مشاوره را انتخاب کنید',
    invalid_type_error: 'زمینه مشاوره را انتخاب کنید',
  }),
});
