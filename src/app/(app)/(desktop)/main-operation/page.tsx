import Landing from "@/ui/components/Landing";
import { FC } from "react";
import Header from "./_components/Header";
import TherapistsView from "./_components/Therapists/TherapistsView";
import CategoriesView from "./_components/Categories/CategoriesView";
import TherapistDetailModal from "./_components/Therapists/TherapistDetailModal";
import AuthDialog from "./_components/AuthDialog";
import DashboardDialog from "./_components/Dashboard/_components/DashboardDialog";

export const dynamic = "force-dynamic";

const MainOperationPage: FC = async () => {
  return (
    <>
      <Header />
      <Landing />
      <CategoriesView />
      <TherapistsView />
      <TherapistDetailModal />
      <AuthDialog />
      <DashboardDialog />
    </>
  );
};

export default MainOperationPage;
