import { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import s from "./Modal.module.scss";

const Modal = ({ children, closeModal }) => {
  const closeModalByEsc = useCallback(
    (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

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
  }, [closeModalByEsc]);

  return (
    <div className={s.overlay} onClick={closeByBackdropClick}>
      <div className={s.modal}>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
