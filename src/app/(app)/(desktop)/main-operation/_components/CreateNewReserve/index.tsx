"use client";

import Dialog from "@/ui/kits/Dialog";
import { FC, useEffect, useState } from "react";
import { useOperationContext } from "../../_context/operation-context";
import { useForm } from "react-hook-form";
import Input from "@/ui/kits/Input";
import { DAYS } from "@/constants/days.constant";
import Select from "@/ui/kits/Select";
import { ETherapistScheduleType } from "@/types/therapist-schedule.type";
import { transformScheduleType } from "@/utils/enum-transformer";
import {
  fetchReadyReservationScheduleApi,
  saveOwnReservationOrderMutationApi,
} from "@/services/orders";
import moment from "jalali-moment";
import Button from "@/ui/kits/Button";
import { ISaveOwnOrderRequestBody } from "@/types/order.type";
import { useLoggedInUser } from "@/hooks/useLoggedInUser";
import { toast } from "react-toastify";

const CreateNewReserve: FC = () => {
  const { scheduleToReserve, handleCloseScheduleToReserve, handleOpenDashboardDialog } =
    useOperationContext();

  const [loading, setLoading] = useState<boolean>(false);
  const loggedInUser = useLoggedInUser();
  const [preparedDates, setPreparedDates] = useState<string[]>([]);

  const { control, watch, setValue } = useForm<any>();

  const therapistId = scheduleToReserve?.therapist?.id;
  const selectedDay = watch("day");
  const selectedTime = watch("time");

  useEffect(() => {
    if (scheduleToReserve) {
      setValue("day", DAYS[scheduleToReserve?.day - 1]);
      setValue(
        "therapist",
        scheduleToReserve?.therapist?.firstName + " " + scheduleToReserve?.therapist?.lastName
      );
      setValue("time", `از ساعت ${scheduleToReserve.startHour} تا ${scheduleToReserve.endHour}`);
      setValue(
        "type",
        scheduleToReserve.type === ETherapistScheduleType.both
          ? undefined
          : transformScheduleType(scheduleToReserve.type)
      );
    }
  }, [scheduleToReserve]);

  useEffect(() => {
    if (selectedDay && selectedTime && therapistId) {
      const dayIndex = DAYS.findIndex((e) => e === selectedDay);
      fetchReadyReservationScheduleApi(dayIndex + 1, therapistId, selectedTime)
        .then((data) => {
          setPreparedDates(data.dates);
        })
        .catch((err) => {
          console.log("fetchReadyReservationScheduleApi", err);
        });
    }
  }, [selectedDay, selectedTime, therapistId]);

  const handleProvideNewReserveData = () => {
    const categories = watch("categories");
    const date = watch("date");
    const type = watch("type");
    return scheduleToReserve
      ? {
          categories: [categories],
          date,
          day: scheduleToReserve.day,
          endHour: scheduleToReserve.endHour,
          startHour: scheduleToReserve.startHour,
          location: scheduleToReserve.location.id,
          room: scheduleToReserve.room,
          type:
            scheduleToReserve.type !== ETherapistScheduleType.both ? scheduleToReserve.type : type,
          patient: loggedInUser?.id,
          therapist: scheduleToReserve.therapist.id,
        }
      : {};
  };

  const handleSaveReserve = () => {
    const data = handleProvideNewReserveData() as ISaveOwnOrderRequestBody;
    setLoading(true);
    saveOwnReservationOrderMutationApi(data)
      .then((res) => {
        if (res?.id) {
          toast.success("رزرو با موفقیت ثبت گردید");
          handleCloseScheduleToReserve();
          handleOpenDashboardDialog();
        } else {
          toast.error("ثبت رزرو با شکست مواجعه شد");
        }
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("ثبت رزرو با شکست مواجعه شد");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Dialog loading={loading} isOpen={!!scheduleToReserve} cardClass="max-h-fit">
      <div className="w-full">
        <div className="mb-5">
          <h1 className="text-base font-bold">اطلاعات تکمیلی</h1>
          {scheduleToReserve && (
            <form className="w-full grid grid-cols-12 gap-6 mt-2">
              <div className="col-span-6">
                <Select
                  control={control}
                  label="دلیل دریافت نوبت"
                  emptyPlaceholder="این جلسه رزرو شده در رابطه با کدام زمینه های زیر میباشد"
                  name="categories"
                  options={scheduleToReserve?.therapist?.workingFields?.map((element) => ({
                    value: element.id,
                    text: element.faName,
                  }))}
                />
              </div>
              <div className="col-span-6">
                <Select
                  control={control}
                  label="تاریخ برگزاری رزرو"
                  emptyPlaceholder="برای چه تاریخی شما این رزرو رو نیاز دارید"
                  name="date"
                  options={preparedDates.map((element) => ({
                    text: moment(element).format("jYYYY-jMM-jDD"),
                    value: element,
                  }))}
                />
              </div>
            </form>
          )}
        </div>
        <div className="mb-5">
          <h1 className="text-base font-bold">اطلاعات پایه این رزرو</h1>
          <form className="w-full grid grid-cols-12 gap-6 mt-2">
            <div className="col-span-6">
              <Input
                control={control}
                helperText="روزی که رزرو شما برگزار میگردد"
                label="روز هفته"
                name="day"
                disabled
              />
            </div>
            <div className="col-span-6">
              <Input
                control={control}
                helperText="پزشکی که همراه شما در جلسه حضور دارد"
                label="پزشک"
                name="therapist"
                disabled
              />
            </div>
            <div className="col-span-6">
              <Input
                control={control}
                helperText="بازه زمانی که این جلسه شما برگزار میگردد"
                label="بازه زمانی"
                name="time"
                disabled
              />
            </div>
            <div className="col-span-6">
              {scheduleToReserve?.type === ETherapistScheduleType.both ? (
                <Select
                  control={control}
                  label="شیوه برگزاری"
                  emptyPlaceholder="شیوه برگزاری جلسه خود را مشخص کنید"
                  name="type"
                  options={[
                    {
                      text: transformScheduleType(ETherapistScheduleType.online),
                      value: ETherapistScheduleType.online,
                    },
                    {
                      text: transformScheduleType(ETherapistScheduleType.onsite),
                      value: ETherapistScheduleType.onsite,
                    },
                  ]}
                />
              ) : (
                <Input
                  control={control}
                  helperText="شیوه برگزاری جلسه خود را مشخص کنید"
                  label="شیوه برگزاری"
                  name="type"
                  disabled
                />
              )}
            </div>
          </form>
        </div>
        <div className="flex justify-start items-center gap-4 mt-7">
          <Button onClick={handleSaveReserve} variant="main" size="sm" isOutline>
            ثبت رزرو جدید
          </Button>
          <Button onClick={handleCloseScheduleToReserve} variant="error" isOutline size="sm">
            کنسل کردن درخواست
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default CreateNewReserve;
