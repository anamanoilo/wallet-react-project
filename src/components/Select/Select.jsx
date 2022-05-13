import s from "./Select.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineChevronDown } from "react-icons/hi";

const Select = ({ selected, setSelected, position = false }) => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveMonth, setIsActiveMonth] = useState(
    new Date().getUTCMonth() + 1
  );
  const [isActiveYear, setIsActiveYear] = useState(new Date().getFullYear());

  const optionsAllMonths = [
    "All months",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className={position ? s.dropdown__first : s.dropdown}>
      <div className={s.dropdown__btn} onClick={(e) => setIsActive(!isActive)}>
        <p>{selected}</p>

        <span className={s.wrapper__icon}>
          <HiOutlineChevronDown
            style={{ width: "18", height: "9", color: "black" }}
          />
        </span>
      </div>
      {isActive && (
        <div className={s.dropdown__content}>
          {optionsAllMonths?.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className={s.dropdown__item}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
