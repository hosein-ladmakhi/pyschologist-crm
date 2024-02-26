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

const times = [
  { startTime: '08:00', endTime: '10:00' },
  { startTime: '10:00', endTime: '12:00' },
  { startTime: '12:00', endTime: '14:00' },
  { startTime: '14:00', endTime: '16:00' },
  { startTime: '16:00', endTime: '18:00' },
  { startTime: '18:00', endTime: '20:00' },
  { startTime: '20:00', endTime: '22:00' },
  { startTime: '22:00', endTime: '24:00' },
];

import { FC } from 'react';

const TherapistSchedule: FC = () => {
  return (
    <div className="therapist-schedule">
      <h1 className="therapist-schedule__title">ساعت کاری این پزشک</h1>
      <div className="therapist-schedule__content">
        <ul className="therapist-schedule__tabs">
          {days.map((day) => (
            <li className="therapist-schedule__tab-bar" key={day}>
              {day}
            </li>
          ))}
        </ul>

        <div className="therapist-schedule__tab-item">
          {times.map((element) => (
            <div className="therapist-schedule__item">
              <h1 className="therapist-schedule__text">
                ساعت شروع : {element.startTime}
              </h1>
              <h1 className="therapist-schedule__text">
                ساعت پایان : {element.endTime}
              </h1>
              <h1 className="therapist-schedule__text">نوع برگزاری : حضوری</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TherapistSchedule;
