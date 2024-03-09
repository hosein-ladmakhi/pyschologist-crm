"use client";

import "./index.css";

import { FC, useEffect, useRef, useState } from "react";
import { TSelectProps } from "./index.type";
import classNames from "classnames";
import { IconCaretDownFilled, IconCaretUpFilled } from "@tabler/icons-react";
import { Controller } from "react-hook-form";

const Select: FC<TSelectProps> = ({
  label,
  options,
  emptyPlaceholder,
  control,
  name,
  additionalClasses = "",
}) => {
  const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);
  const selectGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectGroupRef?.current && !selectGroupRef?.current?.contains(e.target as any)) {
        setDropdownOpened(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownStatus = () => setDropdownOpened((prev) => !prev);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div
          ref={selectGroupRef}
          className={classNames("select-group", additionalClasses, {
            error: !!fieldState.error?.message,
          })}
        >
          <select hidden {...field}></select>
          {label && <label className="label">{label}</label>}
          <div onClick={handleDropdownStatus} className="input">
            {field.value ? options.find((e) => e.value === field.value)?.text : emptyPlaceholder}
            {dropdownOpened ? (
              <IconCaretUpFilled size="16px" />
            ) : (
              <IconCaretDownFilled size="16px" />
            )}
          </div>
          <span className="helper">{fieldState?.error?.message}</span>

          <ul className={`dropdown dropdown-${dropdownOpened ? "opened" : "closed"}`}>
            {options.map((option) => (
              <li
                onClick={() => {
                  field.onChange(option.value);
                  setDropdownOpened(false);
                }}
                key={option.value}
                className="dropdown-item"
              >
                {option.text}
              </li>
            ))}

            {options.length === 0 && <li className="dropdown-item">آیتمی موجود نیست</li>}
          </ul>
        </div>
      )}
    />
  );
};

export default Select;
