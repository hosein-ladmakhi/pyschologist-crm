import { EOrderStatus } from '@/types/order.type';
import { ETherapistScheduleType } from '@/types/therapist-schedule.type';
import { EDegtreeOfEducation, EGender } from '@/types/therapist.type';

export const transformGender = (data: EGender) => {
  switch (data) {
    case EGender.female:
      return 'خانوم';
    case EGender.male:
      return 'آقا';
    case EGender.unknown:
      return 'نامشخص';
  }
};

export const transformDegreeOfEducation = (data: EDegtreeOfEducation) => {
  switch (data) {
    case EDegtreeOfEducation.diploma:
      return 'دیپلم';
    case EDegtreeOfEducation.associate:
      return 'فوق دیپلم';
    case EDegtreeOfEducation.bachelor:
      return 'لیسانس';
    case EDegtreeOfEducation.doctorate:
      return 'دکترا';
    case EDegtreeOfEducation.master:
      return 'کارشناسی ارشد';
  }
};

export const transformScheduleType = (data: ETherapistScheduleType) => {
  switch (data) {
    case ETherapistScheduleType.both:
      return 'حضوری و آنلاین';
    case ETherapistScheduleType.online:
      return 'آنلاین';
    case ETherapistScheduleType.onsite:
      return 'حضوری';
  }
};

export const transformReserveStatus = (data: EOrderStatus) => {
  switch (data) {
    case EOrderStatus.Done:
      return 'به اتمام رسیده';
    case EOrderStatus.Cancel:
      return 'کنسل شده';
    case EOrderStatus.Pending:
      return 'در انتظار برگزاری';
  }
};
