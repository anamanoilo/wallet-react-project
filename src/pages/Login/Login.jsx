import s from "../Registration/registration.module.scss";
import imgLogin from "../../assets/images/imgLogin.png";
import sContainer from "../../components/AuthForm/ContainerForm.module.scss";
import AuthForm from "../../components/AuthForm/AuthForm";
const Login = () => {
  return (
    <div className={s.registerBg}>
      <div className={sContainer.container}>
        <div className={s.mainPage}>
          <div className={s.left}>
            <img src={imgLogin} alt="finance app" className={s.img} />
            <h1 className={s.title}>Finance App</h1>
          </div>
          <div className={s.right}>
            <AuthForm type="login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
