import './index.css';

import { colorThemes } from '@/constants/color-theme.constant';
import Image from '@/ui/kits/Image';
import { IconUserBolt } from '@tabler/icons-react';
import Link from 'next/link';
import { FC } from 'react';
import { IHorizontalTherapistCardProps } from './index.type';

const NotFoundImage = () => {
  return (
    <div className="flex justify-center items-center w-full bg-main/10 absolute top-0 left-0 h-full rounded">
      <IconUserBolt size="35px" color={colorThemes.main} />
    </div>
  );
};

const HorizontalTherapistCard: FC<IHorizontalTherapistCardProps> = ({
  therapist,
}) => {
  return (
    <li className="horizontal-therapist">
      <Link
        className="horizontal-therapist__content"
        href={`/therapists/${therapist.id}`}
      >
        <div className="horizontal-therapist__avatar">
          <Image
            src={`https://pyschologist-api.liara.run${therapist.image}`}
            alt="therapist image"
            fill
            className="horizontal-therapist__img"
            notFoundLoader={<NotFoundImage />}
          />
        </div>
        <div className="horizontal-therapist__body">
          <h1 className="horizontal-therapist__title">
            {therapist.firstName} {therapist.lastName}
          </h1>
          <p className="horizontal-therapist__desc">{therapist.bio}</p>
          <p className="horizontal-therapist__subdesc">
            تعداد مشاوره های موفق : {therapist.patientOrders?.length || 0} جلسه
          </p>
        </div>
      </Link>
    </li>
  );
};

export default HorizontalTherapistCard;
