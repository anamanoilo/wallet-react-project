import { useState } from "react";
import Modal from "components/Modal/Modal";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { IconContext } from "react-icons";
import { GrClose } from 'react-icons/gr';
import { MdDateRange } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { toggleModalAddTransaction } from "redux/global/global-slice";
import s from "./ModalAddTransaction.module.scss";
import { validationSchema } from "./validationAddTransaction";

const ModalAddTransaction = () => {
  const [chooseType, setChooseType] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [type, setType] = useState('+')

   const dispatch = useDispatch();
   const isCloseModal = () => {
      dispatch(toggleModalAddTransaction());
   }
   const showDate = () => {
     setOpenDate(!openDate);
   }
   const chooseDate = (value) => {
    setStartDate(value);
    showDate();
   }
  const handleChangeType = () => {
    setChooseType(true);
    setType('-');
  }
  return(
    <Modal closeModal={isCloseModal}>
      <div className={s.transaction}>
        <button onClick={isCloseModal} className={s.buttonClose}> 
          <IconContext.Provider value={{ className: "global-class-name", size: "16px" }}>
            <GrClose />
          </IconContext.Provider>
        </button>
        <Formik
          initialValues={{
            type: chooseType ? '+' : '-',
            money: '',
            comment: '',
            category: '',
            date: chooseDate,
          }}
          validationSchema={validationSchema}
          enableReinitialize
          validateOnBlur
        >
          <Form className={s.form}>
        <h1 className={s.form__title}>Add transaction</h1>
            <div className={s.checkbox}>
              <span className={`${s.checkboxIncome} ${chooseType && s.checkboxChecked}`}>Income</span>
              <label htmlFor="type" className={s.checkboxSwitch}>
                <input type="checkbox"
                  value="type"
                  checked={chooseType}
                  onChange={handleChangeType}
                />
              </label>
              </div>
              <span className={`${s.checkboxCosts} ${chooseType && s.checkboxChecked}`}>Costs</span>
          </Form>
          {/* <button onClick={showDate}>
            <IconContext.Provider value={{ className: "global-class-name",color: "#4A56E2", size: "20px" }}>
              <MdDateRange />    
          </IconContext.Provider>
          </button>
        <Datetime
          className={s.dateTime}
          initialValue={startDate}
          onChange={chooseDate}
          closeOnSelect={true}
          timeFormat={false}
          open={openDate}
        /> */}
          </Formik>
      </div>
      </Modal>
  );
};
export default ModalAddTransaction;
