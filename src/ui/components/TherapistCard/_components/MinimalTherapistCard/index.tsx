import './index.css';

import Image from '@/ui/kits/Image';
import { IconUserBolt } from '@tabler/icons-react';
import Link from 'next/link';
import { FC } from 'react';
import { IMinimalTherapistCardProps } from './index.type';

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
            src={`https://pyschologist-api.liara.run${therapist.image}`}
            alt="category-therapist"
            fill
            className="minimal-therapist__img"
            notFoundLoader={<IconUserBolt size="35px" />}
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
