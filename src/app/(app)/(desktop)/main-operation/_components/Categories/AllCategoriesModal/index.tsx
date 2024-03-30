import Dialog from "@/ui/kits/Dialog";
import { FC, Suspense, useState } from "react";
import { IAllCategoriesModalProps } from "./index.type";
import { IconArrowsRandom, IconX } from "@tabler/icons-react";
import Image from "@/ui/kits/Image";
import Button from "@/ui/kits/Button";
import dynamic from "next/dynamic";
import { ICategory } from "@/types/category.type";
import { colorThemes } from "@/constants/color-theme.constant";

const CategoryDetailModal = dynamic(() => import("../CategoryDetailModal"));

const AllCategoriesModal: FC<IAllCategoriesModalProps> = ({ content, handleClose }) => {
  const [selectedCategoryDetail, setSelectedCategoryDetail] = useState<ICategory>();

  const handleSelectCategoryDetail = (category: ICategory) => {
    setSelectedCategoryDetail(category);
  };

  const handleCloseCategoryDetail = () => {
    setSelectedCategoryDetail(undefined);
  };

  return (
    <>
      <Dialog isOpen cardClass="h-5/6">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl font-bold">لیست تخصص های ارائه شده در سایت</h1>
          <div className="cursor-pointer" onClick={handleClose}>
            <IconX size="25px" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3 mt-10">
          {content.map((category) => (
            <div className="xl:col-span-3 col-span-6 lg:col-span-4">
              <div className="w-full flex justify-center items-center flex-col hover:bg-main/10 transition-all p-5 cursor-pointer rounded-md">
                <div className="bg-main/10 h-20 w-20 relative rounded mb-5">
                  <Image
                    fill
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${category.icon}`}
                    alt={category.enName}
                    notFoundLoader={<IconArrowsRandom size="45px" color={colorThemes.main} />}
                  />
                </div>
                <h1 className="font-bold text-base line-clamp-1">{category.faName}</h1>
                <h2 className="font-bold text-sm mt-2 line-clamp-1">{category.enName}</h2>
                <p className="mt-1 text-sm font-bold">
                  تعداد پزشکان متخصص : {category.therapists.length}
                </p>
                <Button
                  onClick={handleSelectCategoryDetail.bind(null, category)}
                  variant="main"
                  shape="block"
                  size="sm"
                  className="mt-3"
                >
                  نمایش پزشکان
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Dialog>
      {!!selectedCategoryDetail && (
        <Suspense fallback={<></>}>
          <CategoryDetailModal
            therapists={selectedCategoryDetail?.therapists}
            handleClose={handleCloseCategoryDetail}
          />
        </Suspense>
      )}
    </>
  );
};

export default AllCategoriesModal;
