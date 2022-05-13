import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={s.loader}>
      <ThreeDots color="#24cca7" height={100} width={100} />
    </div>
  );
}