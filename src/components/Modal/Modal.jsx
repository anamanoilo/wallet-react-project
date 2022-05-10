import { useEffect } from "react";
import s from "./Modal.module.scss";

const Modal = ({ children }) => {
  const closeModal = () => {
    return null; // треба змінити флаг isModalOpen
  };

  const closeModalByEsc = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };
  const closeByBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", closeModalByEsc);
    return () => {
      window.removeEventListener("keydown", closeModalByEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.overlay} onClick={closeByBackdropClick}>
      <div className={s.modal}>{children}</div>
    </div>
  );
};

export default Modal;
