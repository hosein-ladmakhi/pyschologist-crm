import { fetchTherapistByIdApi, fetchTherapistSchedulesPerDayApi } from "@/services/therapists";
import ReserveDialog from "./_components/ReserveDialog";
import TherapistInfo from "./_components/TherapistInfo";
import TherapistScheduleTabs from "./_components/TherapistScheduleTabs";

export const dynamic = "force-dynamic";

const TherapistDetailPage = async ({ params }: { params: { id: number } }) => {
  const therapist = await fetchTherapistByIdApi(params.id);
  const therapistSchedules = await fetchTherapistSchedulesPerDayApi(params.id);

  return (
    <div className="container">
      <TherapistInfo therapist={therapist} />
      <TherapistScheduleTabs therapist={therapist} schedules={therapistSchedules} />

      <ReserveDialog
        therapistId={therapist.id}
        schedules={therapistSchedules}
        categories={therapist.workingFields}
      />
    </div>
  );
};

export default TherapistDetailPage;
