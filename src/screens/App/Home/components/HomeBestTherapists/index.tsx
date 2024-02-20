import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const HomeBestTherapists: FC = () => {
  return (
    <div className="container">
      <h1 className="text-base font-bold">گفتگو و مشاوره با بهترین مختصصین</h1>
      <p className="text-sm mt-1">
        بیش از 2500 پزشک آماده پاسخگویی به شما هستند
      </p>

      <div className="grid grid-cols-12 gap-6 mt-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="col-span-12 text-center" key={i}>
            <div className="h-24 w-24 relative mx-auto">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQic9HKxc7De7FhFt6OLu3JGC-MRb_UpsuSdw&usqp=CAU"
                fill
                alt="avatar"
                className="rounded object-cover object-center"
              />
            </div>
            <h1 className="font-bold text-sm mt-4">حسین لادمخی تژاد</h1>
            <p className="mt-2 text-xs text-neutral/50 line-clamp-3 leading-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p className="text-xs text-neutral/50 mt-1">
              <b>تخصص ها : </b>
              {['درمانگر', 'روانشناس', 'افسردگی', 'رواشناس فردی']
                .splice(0, 3)
                .map((text) => (
                  <span
                    className="ml-2 inline-block border-l pl-2 last:border-l-0 border-neutral/10"
                    key={text}
                  >
                    {text}
                  </span>
                ))}
            </p>
            <Link
              href="/"
              className="bg-main block text-sm mt-4 rounded text-white py-2"
            >
              جزئیات
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBestTherapists;
