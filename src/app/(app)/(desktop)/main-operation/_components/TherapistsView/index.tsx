import { fetchTherapistsApi } from "@/services/therapists";
import Image from "@/ui/kits/Image";
import { FC } from "react";
import TherapistsViewHeader from "../TherapistsViewHeader";
import TherapistItemButton from "../TherapistItemButton";

const TherapistsView: FC = async () => {
  const therapists = await fetchTherapistsApi();

  return (
    <div className="container my-4">
      <TherapistsViewHeader content={therapists.content} count={therapists.count} />
      <div className="grid grid-cols-12 gap-4 mt-10">
        {therapists.content.map((therapist) => (
          <div className="col-span-3" key={therapist.id}>
            <div className="flex justify-center items-center flex-col bg-main/5 p-5 rounded">
              <div className="relative h-32 w-32">
                <Image
                  className="rounded object-cover object-center"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${therapist.image}`}
                  alt={therapist.firstName}
                  fill
                  notFoundLoader={
                    <>
                      <h1>پیدا شد</h1>
                    </>
                  }
                />
              </div>
              <div className="mt-5">
                <h1 className="font-bold text-lg">
                  {therapist.firstName} {therapist.lastName}
                </h1>
                <p className="text-sm leading-7 line-clamp-3 mt-1">{therapist.bio}</p>
                <div className="flex justify-start items-center gap-2 mt-2">
                  {therapist.workingFields.map((element) => (
                    <div
                      className="bg-main/10 text-main px-2 py-1 text-xs rounded-full"
                      key={element.id}
                    >
                      {element.faName}
                    </div>
                  ))}
                </div>
                <TherapistItemButton therapist={therapist} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TherapistsView;
