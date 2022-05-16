import s from "./AuthForm.module.scss";
import { Formik } from "formik";
import { validationSchema } from "./validationAuthForm";
import { logIn, register } from "redux/session/auth-operation";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import headerLogo from "../../assets/images/Logo.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import classNames from "classnames";

export const AuthForm = ({ type }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema(type)}
      validateOnBlur
      onSubmit={(values) => {
        type === "signUp"
          ? dispatch(register(values))
          : dispatch(logIn(values));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form className={s.form} onSubmit={handleSubmit}>
          {type === "signUp" ? (
            <>
              <div className={s.logo}>
                <img className={s.img} src={headerLogo} alt="logo" />
                <h1 className={s.title}>Wallet</h1>
              </div>

              <TextField
                className={s.textField}
                InputProps={{
                  endAdornment: (
                    <Icon color="action" position="start">
                      <EmailIcon />
                    </Icon>
                  ),
                }}
                id="email"
                name="email"
                label="E-mail"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                className={s.textField}
                InputProps={{
                  endAdornment: (
                    <Icon color="action" position="start">
                      <LockIcon />
                    </Icon>
                  ),
                }}
                id="password"
                name="password"
                label="Password"
                type="password"
                pattern="?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20}"
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <TextField
                className={s.textField}
                InputProps={{
                  endAdornment: (
                    <Icon color="action" position="start">
                      <LockIcon />
                    </Icon>
                  ),
                }}
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm password"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
              />

              <TextField
                className={s.textField}
                InputProps={{
                  endAdornment: (
                    <Icon color="action" position="start">
                      <AccountBoxIcon />
                    </Icon>
                  ),
                }}
                pattern="^(?!.*\.\.)(?!\.)(?!.*\.$)(?!\d+$)[a-zA-Z0-9.]{5,50}$"
                id="username"
                name="username"
                label="Username"
                type="name"
                value={values.username}
                onChange={handleChange}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />

              <div className={s.loginFormBtnContainer}>
                <Button
                  className={classNames(s.btnForm, s.current)}
                  type="submit"
                >
                  SignUp
                </Button>
                <Link className={classNames(s.btnForm)} to="/login">
                  login
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className={s.logo}>
                <img className={s.img} src={headerLogo} alt="logo" />
                <h1 className={s.title}>Wallet</h1>
              </div>
              <TextField
                className={s.textField}
                InputProps={{
                  endAdornment: (
                    <Icon color="action" position="start">
                      <EmailIcon />
                    </Icon>
                  ),
                }}
                id="email"
                name="email"
                label="E-mail"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                className={s.textField}
                InputProps={{
                  endAdornment: (
                    <Icon color="action" position="start">
                      <LockIcon />
                    </Icon>
                  ),
                }}
                id="password"
                name="password"
                label="Password"
                type="password"
                pattern="?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20}"
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <div className={s.loginFormBtnContainer}>
                <Button
                  className={classNames(s.btnForm, s.current)}
                  type="submit"
                >
                  LogIn
                </Button>
                <Link className={classNames(s.btnForm)} to="/signup">
                  SignUp
                </Link>
              </div>
            </>
          )}
        </form>
      )}
    </Formik>
  );
};

export default AuthForm;
