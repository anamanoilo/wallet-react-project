import AuthForm from "components/AuthForm";
import Container from "components/Container";
import imgRegister from "../../assets/images/imgRegister.png";
import s from "./registration.module.scss";
const Registration = () => {
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
      </Container>
    </div>
  );
};

export default Registration;
