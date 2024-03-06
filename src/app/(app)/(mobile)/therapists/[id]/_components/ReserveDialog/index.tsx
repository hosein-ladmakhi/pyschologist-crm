"use client";

import "./index.css";

import Select from "@/ui/kits/Select";
import Button from "@/ui/kits/Button";
import { FC, useEffect, useState, useTransition } from "react";
import { IReserveDialogProps, TSaveReserveFormValidation } from "./index.type";
import { useForm } from "react-hook-form";
import { ITherapistSchedulesPerDay } from "@/types/therapist-schedule.type";
import moment from "jalali-moment";
import { toast } from "react-toastify";
import { fetchReadyReservationScheduleApi } from "@/services/orders";
import { transformScheduleType } from "@/utils/enum-transformer";
import { removeDuplicateOptions } from "@/utils/remove-duplicate-options";
import { useLoggedInUser } from "@/hooks/useLoggedInUser";
import { useTherapistDetailContext } from "../../_context/therapist-detail-context";
import { reserveOrderAction } from "../../actions";
import { ISaveOwnOrderRequestBody } from "@/types/order.type";
import Loading from "@/ui/kits/Loading";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveReserveFormValidation } from "./save-reserve.validation";
import { DAYS } from "@/constants/days.constant";
import Dialog from "@/ui/kits/Dialog";

const ReserveDialog: FC<IReserveDialogProps> = ({ schedules, therapistId, categories }) => {
  const { handleCloseReserveDialog, openReserveDialog } = useTherapistDetailContext();
  const [loading, handleTransition] = useTransition();
  const loggedInUser = useLoggedInUser();
  const { control, watch, handleSubmit, reset } = useForm<TSaveReserveFormValidation>({
    resolver: zodResolver(saveReserveFormValidation),
  });
  const timeFormItem = watch("time");
  const typeFormItem = watch("type");
  const dayFormItem = watch("day");

  const [dates, setDates] = useState<string[]>([]);

  const dayOptions = removeDuplicateOptions(
    schedules
      .filter((element) => element.items.length > 0)
      .map((element) => ({
        value: element.day,
        text: DAYS[element.day - 1],
      }))
  );

  const selectedDaySchedule: ITherapistSchedulesPerDay | undefined = schedules.find(
    (schedule) => schedule.day === dayFormItem
  );

  const typeOptions = removeDuplicateOptions(
    selectedDaySchedule?.items?.map((element) => ({
      text: transformScheduleType(element.type),
      value: element.type,
    }))
  );

  const selectedScheduleOptions = removeDuplicateOptions(
    selectedDaySchedule?.items
      ?.filter((element) => element.type === typeFormItem)
      ?.map((element) => ({
        text: `از ${element.startHour} تا ${element.endHour}`,
        value: `${element.startHour}_${element.endHour}`,
      }))
  );

  const datesOptions =
    dates?.map((date) => ({
      text: moment(date).format("jYYYY-jMM-jDD"),
      value: date,
    })) || [];

  const categoriesOptions = categories.map((category) => ({
    text: category.faName,
    value: category.id,
  }));

  useEffect(() => {
    if (timeFormItem && dayFormItem) {
      fetchReadyReservationScheduleApi(dayFormItem, therapistId, timeFormItem).then((res) => {
        setDates(res.dates);
      });
    }
  }, [timeFormItem, therapistId, dayFormItem]);

  const prepareReserveRequestBody = (
    data: TSaveReserveFormValidation
  ): ISaveOwnOrderRequestBody => {
    const selectedSchedule = selectedDaySchedule?.items?.find(
      (element) =>
        `${element.startHour}_${element.endHour}` === timeFormItem && element.type === typeFormItem
    );
    const [startHour, endHour] = data.time.split("_");
    const requestBody = {
      ...data,
      room: selectedSchedule?.room,
      location: selectedSchedule?.location?.id,
      startHour,
      endHour,
      therapist: therapistId,
      patient: loggedInUser?.id,
      categories: [data.categories],
    };
    return requestBody as ISaveOwnOrderRequestBody;
  };

  const onSubmit = handleSubmit((data) => {
    handleTransition(() => {
      reserveOrderAction(prepareReserveRequestBody(data))
        .then((data) => {
          toast.success("رزرو با موفقیت ثبت گردید");
          handleCloseReserveDialog();
          reset();
        })
        .catch((err) => {
          toast.error("ثبت رزرو با شکست مواجعه شد");
        });
    });
  });

  if (!openReserveDialog) return <></>;

  return (
    <Dialog loading={loading} isOpen={openReserveDialog}>
      <div className="reserve-dialog">
        <form className="reserve-dialog__form">
          <Select
            name="day"
            control={control}
            emptyPlaceholder="روز رزرو را انتخاب کنید"
            label="روز های هفته"
            options={dayOptions}
            additionalClasses="reserve-dialog__form-item"
          />
          <Select
            additionalClasses="reserve-dialog__form-item"
            emptyPlaceholder="شیوه برگزاری جلسات را انتخاب کنید"
            label="شیوه برگزاری"
            options={typeOptions}
            name="type"
            control={control}
          />
          <Select
            additionalClasses="reserve-dialog__form-item"
            emptyPlaceholder="ساعت رزرو خود را انتخاب کنید"
            label="ساعت های موجود"
            options={selectedScheduleOptions}
            name="time"
            control={control}
          />
          <Select
            additionalClasses="reserve-dialog__form-item"
            emptyPlaceholder="تاریخ برگزاری رزرو را انتخاب کنید"
            label="تاریخ های موجود"
            options={datesOptions}
            name="date"
            control={control}
          />
          <Select
            name="categories"
            control={control}
            additionalClasses="reserve-dialog__form-item"
            emptyPlaceholder="به چه دلیل به این جلسه نیاز دارید"
            label="دلیل دریافت نوبت"
            options={categoriesOptions}
          />
        </form>
        <div className="reserve-dialog__actions">
          <div className="reserve-dialog__action">
            <Button onClick={onSubmit} variant="main" className="reserve-dialog__btn">
              درخواست رزرو
            </Button>
          </div>
          <div className="reserve-dialog__action">
            <Button
              onClick={handleCloseReserveDialog}
              variant="error"
              className="reserve-dialog__btn"
            >
              لغو درخواست
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ReserveDialog;
