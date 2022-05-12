import s from "./IconButton.module.scss";

import { HiOutlineChevronDown } from "@react-icons/all-files/hi/HiOutlineChevronDown";
import { IoAnalyticsOutline } from "@react-icons/all-files/io/IoAnalyticsOutline";
import { AiFillHome } from "@react-icons/ai/AiFillHome";
import { FaDollarSign } from "@react-icons/fa/FaDollarSign";

const IconButton = ({ type = "button", icon, onClick }) => {
  switch (icon) {
    case "home":
      return (
        <button
          type={type}
          className={s.button__icon}
          aria-label="home"
          onClick={onClick}
        >
          <AiFillHome style={{ width: "27", height: "23", color: "wight" }} />
        </button>
      );
    case "statistics":
      return (
        <button
          type={type}
          className={s.button__icon}
          aria-label="statistics"
          onClick={onClick}
        >
          <IoAnalyticsOutline
            style={{ width: "26", height: "15", color: "wight" }}
          />
        </button>
      );
    case "currency":
      return (
        <button
          type={type}
          className={s.button__icon}
          aria-label="currency"
          onClick={onClick}
        >
          <FaDollarSign style={{ width: "13", height: "22", color: "wight" }} />
        </button>
      );
    case "outline":
      return (
        <button
          type={type}
          className={s.button__icon}
          aria-label="outline"
          onClick={onClick}
        >
          <HiOutlineChevronDown
            style={{ width: "18", height: "9", color: "black" }}
          />
        </button>
      );

    default:
      return (
        <button
          type={type}
          className={s.button__icon}
          aria-label="button"
        ></button>
      );
  }
};
export default IconButton;
