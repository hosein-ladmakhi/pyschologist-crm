import { fetchTherapistsOfCategoriesApi } from "@/services/categories";
import Image from "@/ui/kits/Image";
import { FC } from "react";
import CategoriesViewHeader from "../CategoriesViewHeader";

const CategoriesView: FC = async () => {
  const categories = await fetchTherapistsOfCategoriesApi();

  return (
    <div className="container my-4">
      <CategoriesViewHeader content={categories} count={categories.length} />
      <div className="grid grid-cols-12 gap-3 mt-10">
        {categories.map((category) => (
          <div className="xl:col-span-4 col-span-12 lg:col-span-6">
            <div className="flex justify-start items-center gap-3 hover:bg-main/10 transition-all p-3 rounded">
              <div className="bg-main/10 h-20 w-20 relative rounded">
                <Image
                  fill
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${category.icon}`}
                  alt={category.enName}
                  notFoundLoader={<>salam</>}
                />
              </div>
              <div>
                <h1 className="font-bold text-base">{category.faName}</h1>
                <h2 className="font-bold text-sm mt-2">{category.enName}</h2>
                <p className="mt-1 text-sm font-bold">
                  تعداد پزشکان متخصص : {category.therapists.length}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesView;
