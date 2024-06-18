import Landing from "@/ui/components/Landing";
import { FC } from "react";
import Header from "./_components/Header";
import TherapistsView from "./_components/Therapists/TherapistsView";
import CategoriesView from "./_components/Categories/CategoriesView";
import TherapistDetailModal from "./_components/Therapists/TherapistDetailModal";
import AuthDialog from "./_components/AuthDialog";
import DashboardDialog from "./_components/Dashboard/_components/DashboardDialog";
import ReservationDetailDialog from "./_components/Dashboard/_components/ReservationDetailDialog";
import CreateNewReserve from "./_components/CreateNewReserve";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سایت پزشک من",
  description: "رزرو جلسات پزشکی از طریق سایت پزشک من",
  authors: [{ name: "hosein ladmakhi nejad" }],
  keywords: ["Doctor", "Online", "Therapist"],
  robots: {
    follow: true,
    index: true,
  },
};

export const dynamic = "force-dynamic";

const MainOperationPage: FC = async () => {
  return (
    <>
      <Header />
      <Landing />
      <CategoriesView />
      <CreateNewReserve />
      <TherapistsView />
      <TherapistDetailModal />
      <AuthDialog />
      <DashboardDialog />
      <ReservationDetailDialog />
    </>
  );
};

export default MainOperationPage;
