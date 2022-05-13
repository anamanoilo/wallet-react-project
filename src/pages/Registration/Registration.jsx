import AuthForm from "components/AuthForm";
import imgRegister from "../../assets/images/imgRegister.png";
import s from "./registration.module.scss";
import sContainer from "../../components/AuthForm/ContainerForm.module.scss";
const Registration = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Registration;
