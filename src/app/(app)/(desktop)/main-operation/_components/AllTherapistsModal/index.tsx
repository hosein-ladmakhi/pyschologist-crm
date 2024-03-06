"use client";

import Dialog from "@/ui/kits/Dialog";
import { IconUser, IconX } from "@tabler/icons-react";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { IAllTherapistsModalProps } from "./index.type";
import Image from "@/ui/kits/Image";
import { EGender, ITherapist } from "@/types/therapist.type";
import { fetchTherapistsApi } from "@/services/therapists";
import Loading from "@/ui/kits/Loading";
import { colorThemes } from "@/constants/color-theme.constant";
import TherapistItemButton from "../TherapistItemButton";
import AllTherapistsList from "../AllTherapistsList";

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
      <AllTherapistsList data={data} handleClose={handleClose} />
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
