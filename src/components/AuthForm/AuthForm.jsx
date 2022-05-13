import s from "./AuthForm.module.scss";
import { Formik, ErrorMessage } from "formik";

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
      onSubmit={(values, { resetForm }) => {
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
        isSubmitting,
        isValid,
        dirty,
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
                <Link className={classNames(s.btnForm, s.current)} to="/login">
                  login
                </Link>
                <Button className={classNames(s.btnFormLogin)} type="submit">
                  SignUp
                </Button>
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
                <Link className={classNames(s.btnFormLogin)} to="/signup">
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
