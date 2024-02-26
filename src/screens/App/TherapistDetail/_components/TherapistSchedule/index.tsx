'use client';

import './index.css';

const days = [
  'شنبه',
  'یک شنبه',
  'دوشنبه',
  'سه شنبه',
  'چهارشنبه',
  'پنجشنبه',
  'جمعه',
];

import { FC, useState } from 'react';
import { ITherapistScheduleProps } from './index.type';
import classNames from 'classnames';

const TherapistSchedule: FC<ITherapistScheduleProps> = ({
  schedules,
  therapist,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="therapist-schedule">
      <h1 className="therapist-schedule__title">ساعت کاری این پزشک</h1>
      <div className="therapist-schedule__content">
        <ul className="therapist-schedule__tabs">
          {schedules.map((schedule) => (
            <li
              onClick={() => setActiveTab(schedule.day - 1)}
              className={classNames('therapist-schedule__tab-bar', {
                'therapist-schedule__tab-bar--active':
                  schedule.day - 1 === activeTab,
              })}
              key={schedule.day}
            >
              {days[schedule.day - 1]}
            </li>
          ))}
        </ul>

        <div className="therapist-schedule__tab-item">
          {schedules?.[activeTab]?.items?.map((schedule) => (
            <div className="therapist-schedule__item">
              <h1 className="therapist-schedule__text">
                ساعت شروع : {schedule.startHour}
              </h1>
              <h1 className="therapist-schedule__text">
                ساعت پایان : {schedule.endHour}
              </h1>
              <h1 className="therapist-schedule__text">
                نوع برگزاری : {schedule.type}
              </h1>
            </div>
          ))}
        </div>
        {schedules?.[activeTab]?.items?.length === 0 && (
          <p className="text-sm font-bold">
            در این روز این پزشک نوبتی ارائه نمیدهد
          </p>
        )}
      </div>
    </div>
  );
};

export default TherapistSchedule;
