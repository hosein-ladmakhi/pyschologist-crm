"use client";

import "./index.css";

import { FC, useMemo } from "react";
import { ITherapistsCategoryDialogProps } from "./index.type";
import Button from "@/ui/kits/Button";
import { useSearchParams } from "next/navigation";
import TherapistCard from "@/ui/components/TherapistCard";
import { useTherapistsContext } from "../../_context/therapists-context";
import Dialog from "@/ui/kits/Dialog";

const TherapistsCategoryDialog: FC<ITherapistsCategoryDialogProps> = () => {
  const { selectedCategory, handleCloseDetail, handleOpenFilter, isOpenDetail } =
    useTherapistsContext();
  const searchParams = useSearchParams();
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  const gender = searchParams.get("gender");
  const degreeOfEducation = searchParams.get("degreeOfEducation");

  const transformedTherapist = useMemo(() => {
    return selectedCategory?.therapists?.filter((element) => {
      return (
        (!firstName || element.firstName === firstName) &&
        (!lastName || element.lastName === lastName) &&
        (!gender || element.gender === gender) &&
        (!degreeOfEducation || element.degreeOfEducation === degreeOfEducation)
      );
    });
  }, [firstName, lastName, gender, degreeOfEducation, selectedCategory]);

  if (!selectedCategory || !isOpenDetail) return <></>;

  return (
    <Dialog isOpen={selectedCategory && isOpenDetail} cardClass="h-5/6">
      <div className="therapists-card">
        <h1 className="therapists-card__header">لیست پزشکان {selectedCategory.faName}</h1>
        <div className="therapists-card__content">
          <ul className="therapists-card__list">
            {transformedTherapist?.map((therapist) => (
              <TherapistCard therapist={therapist} key={therapist.id} variant="minial" />
            ))}
          </ul>
        </div>

        <div className="therapists-card__actions">
          <div className="therapists-card__action">
            <Button onClick={handleOpenFilter} variant="secondary" className="w-full" size="sm">
              باز کردن فیلتر
            </Button>
          </div>
          <div className="therapists-card__action">
            <Button onClick={handleCloseDetail} className="w-full" variant="error" size="sm">
              بستن جزئیات
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default TherapistsCategoryDialog;
