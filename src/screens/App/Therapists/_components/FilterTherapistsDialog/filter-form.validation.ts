import { EDegtreeOfEducation, EGender } from '@/types/therapist.type';
import zod from 'zod';
export const filterFormValidation = zod.object({
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
  gender: zod.enum([EGender.female, EGender.male]).optional(),
  degreeOfEducation: zod
    .enum([
      EDegtreeOfEducation.associate,
      EDegtreeOfEducation.bachelor,
      EDegtreeOfEducation.diploma,
      EDegtreeOfEducation.doctorate,
      EDegtreeOfEducation.master,
    ])
    .optional(),
});
