import Dialog from "@/ui/kits/Dialog";
import { FC } from "react";
import { IAllCategoriesModalProps } from "./index.type";
import { IconX } from "@tabler/icons-react";
import Image from "@/ui/kits/Image";
import Button from "@/ui/kits/Button";

const AllCategoriesModal: FC<IAllCategoriesModalProps> = ({ content, handleClose }) => {
  return (
    <Dialog isOpen cardClass="h-5/6">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl font-bold">لیست تخصص های ارائه شده در سایت</h1>
        <div className="cursor-pointer" onClick={handleClose}>
          <IconX size="25px" />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-10">
        {content.map((category) => (
          <div className="col-span-4">
            <div className="flex justify-start items-center gap-3 hover:bg-main/10 transition-all p-3 cursor-pointer rounded">
              <div className="bg-main/10 h-20 w-20 relative rounded">
                <Image
                  fill
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/${category.icon}`}
                  alt={category.enName}
                  notFoundLoader={<>salam</>}
                />
              </div>
              <div className="flex-1">
                <h1 className="font-bold text-base">{category.faName}</h1>
                <h2 className="font-bold text-sm mt-2">{category.enName}</h2>
                <p className="mt-1 text-sm font-bold">
                  تعداد پزشکان متخصص : {category.therapists.length}
                </p>
                <Button variant="main" shape="block" size="sm" className="mt-3">
                  نمایش پزشکان
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Dialog>
  );
};

export default AllCategoriesModal;
