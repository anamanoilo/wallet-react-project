import { useState } from "react";
import Datetime from "react-datetime";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IconContext } from "react-icons";
import { GrClose } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalAddTransaction } from "redux/global/global-slice";
import financeSelectors from "redux/finance/finance-selectors";
import { addTransaction } from "../../redux/finance/finance-operation";
import Modal from "components/Modal/Modal";
import ModalSelect from "../ModalSelect/ModalSelect";
import { validationSchema } from "./validationAddTransaction";
import moment from "moment";
import "react-datetime/css/react-datetime.css";
import s from "./ModalAddTransaction.module.scss";

  const handleAmount = (value) => {
      if (!value || Number.isNaN(Number(value))) return value;
    const length = value.length;
    const dot = value.indexOf(".");
    console.log('value :>> ', value);
    if (value < 0.1) {
      return value.concat(".01");
    }
    if (dot < 0) {
      return value.replace('.', ',');
    }
    if (dot < 0) {
      return value.concat(".00");
    }
    if (dot < length - 3) {
      return value.slice(0, dot + 3);
    }

    if (dot > length - 3) {
      return value.padEnd(dot + 3, "0");
    }
    return value;
  };
  const valid = function (current) {
    const tommorow = moment().subtract(1, "day");
    return current.isBefore(tommorow);
  };
const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  const categories = useSelector(financeSelectors.getCategories);
  const [chooseType, setChooseType] = useState(false);
  const [type, setType] = useState("EXPENSE");
  const startDate = new Date();
  const expenseCategories = categories?.filter(
    (category) => category.type === "EXPENSE"
  );
  const incomeCategory = categories?.find(
    (category) => category.type === "INCOME"
  );
  const isCloseModal = () => {
    dispatch(toggleModalAddTransaction());
  };
  
  const handleChangeType = () => {
    setChooseType(!chooseType);
    setType("INCOME");
  };
     const enterByFocus = (e) => {
    if (e.keyCode === 13) {
      handleChangeType();
    }
  };
  const handleSubmitForm = ({
    type,
    amount,
    comment,
    categoryId,
    transactionDate,
  }) => {
    const normalizedAmount = type === "EXPENSE" ? -amount : amount;
    dispatch(
      addTransaction({
        type,
        amount: normalizedAmount,
        comment,
        categoryId,
        transactionDate,
      })
    );

    isCloseModal();
  };

  return (
    <Modal closeModal={isCloseModal}>
      <div className={s.transaction}>
        <button onClick={isCloseModal} className={s.buttonClose}>
          <IconContext.Provider
            value={{ className: "global-class-name", size: "16px" }}
          >
            <GrClose />
          </IconContext.Provider>
        </button>
        <Formik
          initialValues={{
            type: type,
            amount: "",
            comment: "",
            categoryId: "",
            transactionDate: startDate,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmitForm}
          enableReinitialize
          validateOnBlur
        >
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            setFieldValue
          }) => (
            <Form className={s.form}>
              <h1 className={s.form__title}>Add transaction</h1>
              <div className={s.checkbox}>
                <span
                  className={`${s.checkboxIncome} ${
                    chooseType && s.checkboxChecked
                  }`}
                >
                  Income
                </span>
                <label htmlFor="type" className={s.checkboxLabel}>
                  <input
                    type="checkbox"
                    value="type"
                    checked={chooseType}
                    readOnly
                  />
                  <span
                    onKeyDown={enterByFocus}
                  tabIndex="0"
                    onClick={handleChangeType}
                    className={s.checkboxSwitch}
                  ></span>
                </label>
                <span
                  className={`${s.checkboxExpense} ${
                    !chooseType && s.checkboxChecked
                  }`}
                >
                  Expense
                </span>
              </div>
              {chooseType ? (
                <>
                  <input
                    autoComplete="off"
                    className={s.visuallyHidden}
                    type="password"
                    value={(values.categoryId = incomeCategory.id)}
                    onChange={handleChange}
                  />
                </>
              ) : (
                <div className={s.category}>
                  <ModalSelect label="categoryId" name="categoryId">
                    <option disabled className={s.categoryChoose} value="">
                      Choose category
                    </option>
                    {expenseCategories?.map((category) => (
                      <option
                        className={s.categoryOption}
                        key={category.id}
                        value={category.id}
                      >
                        {category.name}
                      </option>
                    ))}
                  </ModalSelect>
                </div>
              )}
              <div className={s.wrapper}>
                <div className={s.moneyWrapper}>
                  <Field
                    autoComplete='off'
                    name="amount"
                    type="number"
                    placeholder="0.00"
                    className={s.money}
                    onBlur={(e) => {
                      const { value } = e.target;
                      setFieldValue("amount", handleAmount(value));
                      handleBlur(e);
                    }}
                  />
                   <span className={s.moneyError}> <ErrorMessage name="amount" /></span>
                   
                </div>
                <div className={s.dateWrapper}>
                  <Datetime
                    className={s.date}
                    initialValue={startDate}
                    onChange={(value) =>
                    setFieldValue("transactionDate",
                    value.toISOString())
                    }                   
                    closeOnSelect={true}
                    timeFormat={false}
                    dateFormat="DD.MM.yyyy"
                    isValidDate={valid}
                  />
                  <MdDateRange className={s.dateIcon} />
                </div>
              </div>
              <div className={s.commentWrapper}>
                <Field
                  name="comment"
                  type="text"
                  placeholder="Comment"
                  as="textarea"
                  className={s.comment}
                />
                {errors.comment && touched.comment && (
                  <div className={s.commentError}>{errors.comment}</div>
                )}
              </div>
              <div className={s.btnWrapper}>
                <button className={s.btnSubmit} type="submit">
                  Add
                </button>
                <button
                  className={s.btnCancel}
                  type="button"
                  onClick={isCloseModal}
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};
export default ModalAddTransaction;
