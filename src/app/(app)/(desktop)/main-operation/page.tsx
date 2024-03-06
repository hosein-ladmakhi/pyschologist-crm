import Landing from "@/ui/components/Landing";
import { FC } from "react";
import Header from "./_components/Header";
import TherapistsView from "./_components/therapists/TherapistsView";
import CategoriesView from "./_components/categories/CategoriesView";
import TherapistDetailModal from "./_components/therapists/TherapistDetailModal";

const MainOperationPage: FC = async () => {
  return (
    <>
      <Header />
      <Landing />
      <CategoriesView />
      <TherapistsView />
      <TherapistDetailModal />
    </>
  );
};

export default MainOperationPage;
