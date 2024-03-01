import { httpGet } from "@/lib/httpClient";
import { ITherapistSchedulesPerDay } from "@/types/therapist-schedule.type";
import { ITherapist, TPaginatedTherapists } from "@/types/therapist.type";

// HTTP GET

export const fetchTherapistsApi = () =>
	httpGet<TPaginatedTherapists>("/therapist");

export const fetchTherapistByIdApi = (id: number) =>
	httpGet<ITherapist>(`/therapist/${id}`);

export const fetchTherapistSchedulesPerDayApi = (id: number) =>
	httpGet<ITherapistSchedulesPerDay[]>(
		`/therapist-schedules/therapist/per-day/${id}`
	);
