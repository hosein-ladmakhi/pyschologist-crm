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

import { FC } from 'react';
import { ITherapistScheduleTabsProps } from './index.type';
import classNames from 'classnames';
import Tabs from '@/ui/kits/Tabs';
import TherapistScheduleTabItem from '../TherapistScheduleTabItem';

const TherapistScheduleTabs: FC<ITherapistScheduleTabsProps> = ({
  schedules,
  therapist,
}) => {
  return (
    <div className="therapist-schedule">
      <h1 className="therapist-schedule__title">ساعت کاری این پزشک</h1>
      <div className="therapist-schedule__content">
        <Tabs
          tabNavsWrapper={(children) => (
            <ul className="therapist-schedule__tabs">{children}</ul>
          )}
          tabNavs={schedules.map((schedule) => days[schedule.day - 1])}
          tabNavRender={({ activeTab, handleChangeActive, item, tabIndex }) => (
            <li
              onClick={handleChangeActive.bind(null, tabIndex)}
              className={classNames('therapist-schedule__tab-bar', {
                'therapist-schedule__tab-bar--active': activeTab === tabIndex,
              })}
              key={item}
            >
              {item}
            </li>
          )}
        >
          {schedules.map((schedule) => (
            <TherapistScheduleTabItem
              items={schedule.items}
              key={schedule.day}
            />
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TherapistScheduleTabs;
