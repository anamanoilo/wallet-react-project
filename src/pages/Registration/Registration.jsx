import AuthForm from "../../components/AuthForm/AuthForm";
import imgRegister from "./img/registration-desktop-1x.png";
import imgRegister2x from "./img/registration-desktop-2x.png";
import imgRegisterTablet from "./img/registration-tablet-1x.png";
import imgRegisterTablet2x from "./img/registrartion-tablet-2x.png";
import s from "./registration.module.scss";
import sContainer from "../../components/AuthForm/ContainerForm.module.scss";
import "react-toastify/dist/ReactToastify.min.css";

const Registration = () => {
  const screenWidth = window.screen.width;
  function screen(screenWidth) {
    if (screenWidth > 1280) {
      return (
        <img
          className={s.img}
          src={imgRegister}
          srcSet={`${imgRegister2x} 2x`}
          alt="signup"
        />
      );
    } else {
      return (
        <img
          className={s.img}
          src={imgRegisterTablet}
          srcSet={`${imgRegisterTablet2x} 2x`}
          alt="signup"
        />
      );
    }
  }
  console.log("screenWidth", screenWidth);
  return (
    <div className={s.registerBg}>
      <div className={sContainer.container}>
        <div className={s.mainPage}>
          <div className={s.left}>
            {screen()};<h1 className={s.title}>Finance App</h1>
          </div>
          <div className={s.right}>
            <AuthForm type="signUp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
