'use client';

import './index.css';

import { FC, useEffect, useRef, useState } from 'react';
import { TSelectProps } from './index.type';
import classNames from 'classnames';
import { IconCaretDownFilled, IconCaretUpFilled } from '@tabler/icons-react';

const Select: FC<TSelectProps> = ({
  label,
  options,
  emptyPlaceholder,
  error = '',
  additionalClasses = '',
}) => {
  const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);
  const selectGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        selectGroupRef?.current &&
        !selectGroupRef?.current?.contains(e.target as any)
      ) {
        setDropdownOpened(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownStatus = () => setDropdownOpened((prev) => !prev);

  return (
    <div
      ref={selectGroupRef}
      className={classNames('select-group', additionalClasses, {
        error: !!error,
      })}
    >
      <label className="label">{label}</label>
      <div onClick={handleDropdownStatus} className="input">
        {emptyPlaceholder}
        {dropdownOpened ? (
          <IconCaretUpFilled size="16px" />
        ) : (
          <IconCaretDownFilled size="16px" />
        )}
      </div>
      <span className="helper">{error}</span>

      <ul
        className={`dropdown dropdown-${dropdownOpened ? 'opened' : 'closed'}`}
      >
        {options.map((option) => (
          <li key={option.value} className="dropdown-item">
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
