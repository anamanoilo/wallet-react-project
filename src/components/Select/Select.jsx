import s from "./Select.module.scss";
import { useState, useEffect, useCallback } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

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

        <span className={s.wrapper__icon}>
          <HiOutlineChevronDown
            style={{ width: "20", height: "11", color: "black" }}
          />
        </span>
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
