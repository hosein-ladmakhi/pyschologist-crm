import Landing from "@/ui/components/Landing";
import { FC } from "react";
import Header from "./_components/Header";
import TherapistsView from "./_components/TherapistsView";
import CategoriesView from "./_components/CategoriesView";

const MainOperationPage: FC = async () => {
  return (
    <>
      <Header />
      <Landing />
      <TherapistsView />
      <CategoriesView />
    </>
  );
};

export default MainOperationPage;
