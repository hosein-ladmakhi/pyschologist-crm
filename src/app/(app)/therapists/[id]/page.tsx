import TherapistDetailScreen from "@/screens/App/TherapistDetail";
import {
	fetchTherapistByIdApi,
	fetchTherapistSchedulesPerDayApi,
} from "@/services/therapists";

export const dynamic = "force-dynamic";

const TherapistDetailPage = async ({ params }: { params: { id: number } }) => {
	const therapist = await fetchTherapistByIdApi(params.id);
	const therapistSchedules = await fetchTherapistSchedulesPerDayApi(params.id);

	return (
		<TherapistDetailScreen
			therapist={therapist}
			schedules={therapistSchedules}
		/>
	);
};

export default TherapistDetailPage;
