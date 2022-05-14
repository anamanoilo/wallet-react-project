import s from "./Select.module.scss";
import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const Select = ({ options, selected, setSelected, position = false }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={position ? s.dropdown__first : s.dropdown}>
      <div className={s.dropdown__btn} onClick={(e) => setIsActive(!isActive)}>
        <p>{selected}</p>

        <span className={s.wrapper__icon}>
          <HiOutlineChevronDown
            style={{ width: "20", height: "11", color: "black" }}
          />
        </span>
      </div>
      {isActive && (
        <div className={s.dropdown__content}>
          {options?.map((option) => (
            <div
              key={[option]}
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
