import "./page.css";

import { Suspense } from "react";
import CategoriesList from "../_components/CategoriesList";
import Landing from "../../../ui/components/Landing";
import TherapistsList from "../_components/TherapistsList";
import HomeHeader from "../_components/HomeHeader";
import CategoriesListLoading from "../_components/CategoriesListLoading";
import TherapistsListLoading from "../_components/TherapistsListLoading";

export const dynamic = "force-dynamic";

const HomePage = () => {
  return (
    <>
      <Landing />
      <div className="best-therapists">
        <HomeHeader
          content="بیش از 100 پزشک آماده پاسخگویی به شما هستند"
          title="گفتگو و مشاوره با بهترین مختصصین"
        />
        <Suspense fallback={<TherapistsListLoading />}>
          <TherapistsList />
        </Suspense>
      </div>
      <div className="categories-list">
        <HomeHeader
          title="تخصص های موحود در پزشک من"
          content="بیش از 100 تخصص در زمینه پزشکی موجود میباشد"
        />
        <Suspense fallback={<CategoriesListLoading />}>
          <CategoriesList />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;
