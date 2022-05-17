import s from "./Select.module.scss";
import { useState, useEffect, useCallback } from "react";

import { AiOutlineDown } from "react-icons/ai";
import { IconContext } from "react-icons";

const Select = ({ options, selected, setSelected, position = false }) => {
  const [isActive, setIsActive] = useState(false);

  const closeSelectByEsc = useCallback(
    (e) => {
      if (e.code === "Escape") {
        setIsActive(false);
      }
    },
    [setIsActive]
  );

  useEffect(() => {
    window.addEventListener("keydown", closeSelectByEsc);
    return () => {
      window.removeEventListener("keydown", closeSelectByEsc);
    };
  }, [closeSelectByEsc]);

  // const onPress = (e) => {
  //   console.log("e.target", e.target);
  //   console.log("e.currentTarget", e.currentTarget);
  //   console.log("e.target", e.target.id);
  //   if (e.target.id === "3") {
  //     console.log(e.target);
  //     setIsActive(false);
  //   }
  // };

  // useEffect(() => {
  //   if (isActive) {
  //     window.addEventListener("click", onPress);
  //   }

  //   return () => {
  //     window.removeEventListener("click", onPress);
  //   };
  // }, [isActive]);

  return (
    <div id="3" className={position ? s.dropdown__first : s.dropdown}>
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
        <div
          className={position ? s.dropdown__contentFirst : s.dropdown__content}
        >
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
