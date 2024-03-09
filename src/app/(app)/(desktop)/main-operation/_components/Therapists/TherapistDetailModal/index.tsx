"use client";

import Dialog from "@/ui/kits/Dialog";
import { FC, useEffect, useState } from "react";
import Image from "@/ui/kits/Image";
import { transformDegreeOfEducation, transformScheduleType } from "@/utils/enum-transformer";
import { ITherapistSchedulesPerDay } from "@/types/therapist-schedule.type";
import { fetchTherapistSchedulesPerDayApi } from "@/services/therapists";
import Loading from "@/ui/kits/Loading";
import { DAYS } from "@/constants/days.constant";
import { IconX } from "@tabler/icons-react";
import { useOperationContext } from "../../../_context/operation-context";
import Button from "@/ui/kits/Button";
import { useLoggedInUser } from "@/hooks/useLoggedInUser";

const NotFoundImage: FC = () => <p>NOt Found</p>;

const TherapistDetailModal: FC = () => {
  const {
    selectedTherapistDetail,
    handleSelectedTherapistDetailChange,
    handleOpenScheduleToReserve,
  } = useOperationContext();
  const [schedules, setSchedules] = useState<ITherapistSchedulesPerDay[]>([]);
  const [schedulesLoading, setSchedulesLoading] = useState<boolean>(false);
  const handleClose = () => handleSelectedTherapistDetailChange(undefined);
  const loggedInUser = useLoggedInUser();

  useEffect(() => {
    if (selectedTherapistDetail) {
      setSchedulesLoading(true);
      fetchTherapistSchedulesPerDayApi(selectedTherapistDetail?.id)
        .then((data) => {
          setSchedules(data);
        })
        .catch(() => {
          console.log("error in fetch data from server : fetchTherapistSchedulesPerDayApi ");
        })
        .finally(() => {
          setSchedulesLoading(false);
        });
    }
  }, [selectedTherapistDetail]);
  if (!selectedTherapistDetail) return <></>;
  return (
    <Dialog isOpen cardClass="h-5/6 lg:!w-[700px] overflow-auto">
      <div className="w-full flex justify-between items-center mb-3">
        <h1 className="text-lg font-bold">مشخصات پزشک مورد نظر</h1>
        <div className="cursor-pointer" onClick={handleClose}>
          <IconX size="30px" />
        </div>
      </div>
      <div>
        <>
          <div className="relative h-24 w-24 mb-5">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL!}${selectedTherapistDetail?.image}`}
              notFoundLoader={<NotFoundImage />}
              alt={selectedTherapistDetail.firstName}
              fill
              className="rounded"
            />
          </div>
          {!loggedInUser?.id && (
            <div className="w-full bg-error/10 text-error text-base font-bold my-5 p-4 rounded">
              برای ثبت رزرو در این سایت شما ابتدا باید وارد اکانت خود شوید
            </div>
          )}
          <h1 className="font-bold text-lg mt-3 mb-1">نام پزشک</h1>
          <h3 className="text-base">
            {selectedTherapistDetail?.firstName} {selectedTherapistDetail?.lastName}
          </h3>
        </>
        <>
          <h1 className="font-bold text-lg mt-3 mb-1">توضیحات مربوط به پزشک</h1>
          <h3 className="text-base">{selectedTherapistDetail?.bio}</h3>
        </>
        <>
          <h1 className="font-bold text-lg mt-3 mb-1">مدرک تحصیلی</h1>
          <h3 className="text-base">
            {transformDegreeOfEducation(selectedTherapistDetail?.degreeOfEducation)}
          </h3>
        </>
        <>
          <h1 className="font-bold text-lg mt-3 mb-1">تخصص های این پزشک</h1>
          <div className="flex justify-start items-center gap-3 mt-2">
            {selectedTherapistDetail?.workingFields?.map((workingField) => (
              <span
                className="px-2 py-1 bg-main/10 text-main text-sm rounded-full"
                key={workingField.id}
              >
                {workingField.faName}
              </span>
            ))}
          </div>
        </>

        <>
          <h1 className="font-bold text-lg mt-5 mb-1">روز های هفته</h1>
          {schedulesLoading && <Loading type="spinner" size="xxxl" variant="main" />}
          {schedules.map((schedule) => (
            <div className="my-5 w-full" key={schedule.day}>
              <h1 className="text-sm mb-3 font-bold">{DAYS[schedule.day - 1]}</h1>
              {schedule.items.length === 0 && (
                <div className="h-10 w-full bg-main/10 text-main flex justify-center items-center text-sm rounded">
                  در این روز رزروی ارائه نمیگردد
                </div>
              )}
              {schedule.items.map((element) => (
                <div className="shadow-lg my-2 p-5 border border-gray/50" key={element.id}>
                  <div>
                    <h1 className="text-sm mt-2">
                      بازه برگزاری : از ساعت {element.startHour} تا {element.endHour}
                    </h1>
                    <h1 className="text-sm mt-2 leading-6">
                      محل برگزاری : شهر {element.location.city} {element.location.address} اتاق{" "}
                      {element.room}
                    </h1>
                    <h1 className="text-sm mt-2 leading-6">
                      نوع برگزاری : {transformScheduleType(element.type)}
                    </h1>
                  </div>
                  {loggedInUser?.id && (
                    <div className="flex justify-end items-center w-full">
                      <Button
                        onClick={() => {
                          handleOpenScheduleToReserve(element);
                          handleClose();
                        }}
                        size="sm"
                        variant="main"
                        isOutline
                      >
                        ثبت رزرو با این پزشک
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </>
      </div>
    </Dialog>
  );
};

export default TherapistDetailModal;
