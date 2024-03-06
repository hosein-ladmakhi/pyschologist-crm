"use client";

import Dialog from "@/ui/kits/Dialog";
import { IconUser, IconX } from "@tabler/icons-react";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { IAllTherapistsModalProps } from "./index.type";
import Image from "@/ui/kits/Image";
import { EGender, ITherapist } from "@/types/therapist.type";
import { fetchTherapistsApi } from "@/services/therapists";
import Loading from "@/ui/kits/Loading";
import Button from "@/ui/kits/Button";
import { colorThemes } from "@/constants/color-theme.constant";

const NotFoundTherapistImage = () => {
  return (
    <div className="w-full h-full bg-main/10 rounded flex justify-center items-center">
      <IconUser size="45px" color={colorThemes.main} />
    </div>
  );
};

const AllTherapistsModal: FC<IAllTherapistsModalProps> = ({ therapists, count, handleClose }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<ITherapist[]>(therapists);
  const hasNextPageRef = useRef<boolean>(count > 10);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasNextPageRef.current) {
      setLoading(true);
      fetchTherapistsApi(currentPage)
        .then((res) => {
          const newData = res.content;
          setData((prev) => (currentPage === 0 ? newData : [...prev, ...newData]));
          hasNextPageRef.current = newData.length > 0;
        })
        .catch(() => {
          console.log("Error");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [currentPage]);

  const handleIntersectionObserver = useCallback((data: IntersectionObserverEntry[]) => {
    if (data[0]?.isIntersecting && hasNextPageRef.current && !loading) {
      setCurrentPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(handleIntersectionObserver, {
      rootMargin: "0px",
      threshold: 1,
    });
    if (observerRef?.current) {
      intersectionObserver.observe(observerRef?.current);
    }

    return () => {
      if (observerRef?.current) {
        intersectionObserver.unobserve(observerRef?.current);
      }
    };
  }, [handleIntersectionObserver]);

  return (
    <Dialog isOpen cardClass="h-5/6">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl font-bold">لیست پزشکان و متخصصان این سایت</h1>
        <div className="cursor-pointer" onClick={handleClose}>
          <IconX size="25px" />
        </div>
      </div>

      <div className="w-full grid grid-cols-12 gap-5 mt-10">
        {data.map((therapist) => (
          <div className="col-span-4" key={therapist.id}>
            <div className="flex justify-start items-center gap-3">
              <div className="h-24 w-24 relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${therapist.image}`}
                  notFoundLoader={<NotFoundTherapistImage />}
                  fill
                  alt={therapist.firstName}
                  className="rounded object-cover object-center"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h1 className="text-base font-bold">
                    {therapist.gender === EGender.male ? "آقای  دکتر" : "خانوم دکتر"}{" "}
                    {therapist.firstName} {therapist.lastName}
                  </h1>
                  <Button size="xs" variant="main" isOutline>
                    جزئیات
                  </Button>
                </div>
                <p className="text-sm mt-1 line-clamp-2">{therapist.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div ref={observerRef} className="h-20 w-full"></div>
      {loading && (
        <div className="flex justify-center items-center w-full my-4">
          <Loading type="spinner" size="xxxxl" variant="main" />
        </div>
      )}
    </Dialog>
  );
};

export default AllTherapistsModal;
