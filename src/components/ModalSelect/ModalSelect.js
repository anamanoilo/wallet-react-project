import PropTypes  from 'prop-types';
import { useField } from 'formik';
import s from './ModalSelect.module.scss';

export default function Select({label,...props}) {
   const [field, meta] = useField(props);
   return (
      <div className={s.selectWrapper}>
         <label htmlFor={props.value} />
         <select className={s.select} {...field} {...props} />
           {meta.touched && meta.error ? (
        <div className={s.error}>{meta.error}</div>
      ) : null}
         </div>
   )
};
Select.propTypes = {
   label: PropTypes.string.isRequired,
   props: PropTypes.node,
}