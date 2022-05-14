import s from "../Registration/registration.module.scss";
import imgLoginD1 from "../Registration/img/login-desktop-1x.png";
import imgLoginD2 from "../Registration/img/login-desktop-2x.png";
import imgLoginT1 from "../Registration/img/login-tablet-x1.png";
import imgLoginT2 from "../Registration/img/login-tablet-x2.png";
import sContainer from "../../components/AuthForm/ContainerForm.module.scss";
import AuthForm from "../../components/AuthForm/AuthForm";
const Login = () => {
  const screenWidth = window.screen.width;
  function screen(screenWidth) {
    if (screenWidth > 1280) {
      return (
        <img
          className={s.img}
          src={imgLoginD1}
          srcSet={`${imgLoginD2} 2x`}
          alt="signup"
        />
      );
    } else {
      return (
        <img
          className={s.img}
          src={imgLoginT1}
          srcSet={`${imgLoginT2} 2x`}
          alt="signup"
        />
      );
    }
  }
  return (
    <div className={s.registerBg}>
      <div className={sContainer.container}>
        <div className={s.mainPage}>
          <div className={s.left}>
            {screen(screenWidth)}
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
