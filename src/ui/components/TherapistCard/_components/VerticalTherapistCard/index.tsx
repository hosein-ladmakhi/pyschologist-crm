import './index.css';

import { FC } from 'react';
import { IVerticalTherapistCardProps } from './index.type';
import Link from 'next/link';
import Image from '@/ui/kits/Image';
import { IconUser } from '@tabler/icons-react';

const VerticalTherapistCard: FC<IVerticalTherapistCardProps> = ({
  therapist,
}) => {
  return (
    <div className="vertical-therapist">
      <div className="vertical-therapist__avatar">
        <Image
          src={`https://pyschologist-api.liara.run${therapist.image}`}
          fill
          alt="avatar"
          className="vertical-therapist__image"
          notFoundLoader={<IconUser size="45px" />}
        />
      </div>
      <h1 className="vertical-therapist__title">
        {therapist.firstName} {therapist.lastName}
      </h1>
      <p className="vertical-therapist__bio">{therapist.bio}</p>
      <p className="vertical-therapist__categories">
        <b>تخصص ها : </b>
        {therapist.workingFields.map((workingField) => (
          <span className="vertical-therapist__item" key={workingField.id}>
            {workingField.faName}
          </span>
        ))}
      </p>
      <Link
        href={`/therapists/${therapist.id}`}
        className="vertical-therapist__link"
      >
        جزئیات
      </Link>
    </div>
  );
};

export default VerticalTherapistCard;
