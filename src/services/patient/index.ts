import { httpGet, httpPatch } from '@/lib/httpClient';
import { IPatient, IUpdateOwnProfile } from '@/types/patient.type';

// HTTP PATCH

export const updateOwnProfileMutationApi = (data: IUpdateOwnProfile) =>
  httpPatch<IPatient, IUpdateOwnProfile>('/patient/profile', data);
