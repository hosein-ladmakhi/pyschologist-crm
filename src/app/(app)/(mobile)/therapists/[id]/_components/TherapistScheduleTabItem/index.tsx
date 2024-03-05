import { FC } from 'react';
import { ITherapistScheduleTabItemProps } from './index.type';

import './index.css';

const TherapistScheduleTabItem: FC<ITherapistScheduleTabItemProps> = ({
  items,
}) => {
  return (
    <>
      <div className="therapist-schedule-item">
        {items?.map((schedule) => (
          <div className="therapist-schedule-item__item">
            <h1 className="therapist-schedule-item__text">
              ساعت شروع : {schedule.startHour}
            </h1>
            <h1 className="therapist-schedule-item__text">
              ساعت پایان : {schedule.endHour}
            </h1>
            <h1 className="therapist-schedule-item__text">
              نوع برگزاری : {schedule.type}
            </h1>
          </div>
        ))}
      </div>
      {items?.length === 0 && (
        <p className="therapist-schedule-item__empty">
          در این روز این پزشک نوبتی ارائه نمیدهد
        </p>
      )}
    </>
  );
};

export default TherapistScheduleTabItem;
