import './index.css';

import { colorThemes } from '@/constants/color-theme.constant';
import Image from '@/ui/kits/Image';
import { IconUserBolt } from '@tabler/icons-react';
import Link from 'next/link';
import { FC } from 'react';
import { IMinimalTherapistCardProps } from './index.type';

const NotFoundImage = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-main/10 rounded flex justify-center items-center">
      <IconUserBolt size="35px" color={colorThemes.main} />
    </div>
  );
};

const MinimalTherapistCard: FC<IMinimalTherapistCardProps> = ({
  therapist,
}) => {
  return (
    <li className="minimal-therapist">
      <Link
        href={`/therapists/${therapist.id}`}
        className="minimal-therapist__link"
      >
        <div className="minimal-therapist__avatar">
          <Image
            src={`http://localhost:4000${therapist.image}`}
            alt="category-therapist"
            fill
            className="minimal-therapist__img"
            notFoundLoader={<NotFoundImage />}
          />
        </div>
        <h1 className="minimal-therapist__title">
          {therapist.firstName} {therapist.lastName}
        </h1>
      </Link>
    </li>
  );
};

export default MinimalTherapistCard;
