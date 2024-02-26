import TherapistDetailScreen from '@/screens/App/TherapistDetail';

export const dynamic = 'force-dynamic';

const TherapistDetailPage = async ({ params }: { params: { id: number } }) => {
  const therapistResponse = await fetch(
    `http://localhost:4000/therapist/${params.id}`,
  );
  const therapist = await therapistResponse.json();

  const therapistScheduleResponse = await fetch(
    `http://localhost:4000/therapist-schedules/therapist/per-day/${params.id}`,
  );

  const therapistSchedules = await therapistScheduleResponse.json();

  return (
    <TherapistDetailScreen
      therapist={therapist}
      schedules={therapistSchedules}
    />
  );
};

export default TherapistDetailPage;
