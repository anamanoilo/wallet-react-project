import s from "./Select.module.scss";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { IconContext } from "react-icons";

const Select = ({ options, selected, setSelected, position = false }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={position ? s.dropdown__first : s.dropdown}>
      <div className={s.dropdown__btn} onClick={(e) => setIsActive(!isActive)}>
        <p>{selected}</p>

        <IconContext.Provider
          value={{
            className: `${s.react__icon}`,
            style: {
              width: "20px",
              height: "15px",
              color: "black",
            },
          }}
        >
          <AiOutlineDown />
        </IconContext.Provider>
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
