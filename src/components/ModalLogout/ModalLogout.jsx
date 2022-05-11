import s from "./ModalLogout.module.scss"; 
import Modal from "components/Modal/Modal";
import { useDispatch } from "react-redux";
import { toggleModalLogout } from "redux/global/global-slice";
export default function ModalLogout() {
   const dispatch = useDispatch();
   // const logOut = () => {
   //    dispatch(.logOut());
   // }
   const closeModal = () => {
      dispatch(toggleModalLogout());
   }
   return (
      <Modal closeModal={closeModal}>
         <div className={s.logout}>
            <h1 className={s.logout__title}> Вы действительно хотите выйти из приложения?</h1>
            <div className={s.wrapper}>
               <button className={s.wrapper__btn} type='button'>Так</button>
                 <button className={s.wrapper__btn} type='button' onClick={closeModal}>Нет</button>
         </div>
         </div>
      </Modal>
   )

};
