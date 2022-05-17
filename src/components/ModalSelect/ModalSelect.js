// import PropTypes  from 'prop-types';
// import { useField } from 'formik';
// import s from './ModalSelect.module.scss';

// export default function Select({label,...props}) {
//    const [field, meta] = useField(props);
//    return (
//       <div className={s.selectWrapper}>
//          <label htmlFor={props.value} />
//          <select className={s.select} {...field} {...props} />
//            {meta.touched && meta.error ? (
//         <span className={s.error}>{meta.error}</span>
//       ) : null}
//          </div>
//    )
// };
// Select.propTypes = {
//    label: PropTypes.string.isRequired,
//    props: PropTypes.node,
// }
import React, { useState } from "react";
import s from './ModalSelect.module.scss';

export default function ModalSelect({options}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
 const id =
  return (
     <div className={s.dropDownContainer}>
        <div className={s.dropDownHeader} onClick={toggling}>
         {selectedOption || "Choose category"}
        </div>
        {isOpen && (
          <div className={s.dropDownListContainer}>
            <ul className={s.dropDownList}>
              {options.map(option => (
                <li className={s.listItem} onClick={onOptionClicked(option.id)} key={option.id}>
                  {option.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
  );
}