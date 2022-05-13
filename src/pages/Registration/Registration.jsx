import AuthForm from "components/AuthForm";
import Container from "components/Container";
import { ToastContainer } from "react-toastify";
import imgRegister from "../../assets/images/imgRegister.png";
import s from "./registration.module.scss";
import "react-toastify/dist/ReactToastify.min.css";
import { useSelector } from "react-redux";
import { getLoading } from "redux/session/session-selectors";
import Loader from "components/Loader/Loader";

const Registration = () => {
  // const loading = useSelector(getLoading);
  // return loading ? (
  //   <Loader />
  // ) : (
  return (
    <div className={s.registerBg}>
      <Container>
        <div className={s.mainPage}>
          <div className={s.left}>
            <img src={imgRegister} alt="finance app" className={s.img} />
            <h1 className={s.title}>Finance App</h1>
          </div>
          <div className={s.right}>
            <AuthForm type="signUp" />
          </div>
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
      </Container>
    </div>
  );
};

export default Registration;
