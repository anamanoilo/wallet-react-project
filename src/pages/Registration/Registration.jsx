import AuthForm from "components/AuthForm";
import imgRegister from "../../assets/images/imgRegister.png";
import s from "./registration.module.scss";
import sContainer from "../../components/AuthForm/ContainerForm.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import { useSelector } from "react-redux";
// import { getLoading } from "redux/session/session-selectors";
// import Loader from "components/Loader/Loader";

const Registration = () => {
  // const loading = useSelector(getLoading);
  // return loading ? (
  //   <Loader />
  // ) : (
  return (
    <div className={s.registerBg}>
      <div className={sContainer.container}>
        <div className={s.mainPage}>
          <div className={s.left}>
            <img src={imgRegister} alt="finance app" className={s.img} />
            <h1 className={s.title}>Finance App</h1>
          </div>
          <div className={s.right}>
            <AuthForm type="signUp" />
          </div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
