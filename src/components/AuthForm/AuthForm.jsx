import s from "./AuthForm.module.scss";
import { Formik, ErrorMessage } from "formik";
import { validationSchema } from "./validationAuthForm";
import { logIn, register } from "redux/session/auth-operation";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "./";

export const AuthForm = ({ type }) => {
  const dispatch = useDispatch();
  return (
    <div>
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
          resetForm();
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
          <div className={s.containerForm}>
            <form className={s.form} onSubmit={handleSubmit}>
              {type === "signUp" ? (
                <>
                  <div>
                    {/* <img className={s.logo} src={Logo} alt="logo" /> */}
                    <h1 className={s.title}> Wallet</h1>
                  </div>
                  <div>
                    <label className={s.formInput} htmlFor="email">
                    E-mail
                      <input
                        className={s.formInput}
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {/* {errors.email && touched.email && errors.email} */}
                      <ErrorMessage component="div" name="email" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="password">
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {/* {errors.password && touched.password && errors.password} */}
                      <ErrorMessage component="div" name="password" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="confirmPassword">
                      <input
                        type="password"
                        placeholder="confirmPassword"
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                      />
                      {/* {errors.password && touched.password && errors.password} */}
                      <ErrorMessage component="div" name="confirmPassword" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="username">
                      <input
                        type="name"
                        placeholder="your name"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {/* {errors.email && touched.email && errors.email} */}
                      <ErrorMessage component="div" name="username" />
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid || !dirty}
                  >
                    registration
                  </button>
                  <Link to="/login">login</Link>
                </>
              ) : (
                <>
                  <h1>Wallet</h1>
                  <div>
                    <label htmlFor="email">
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {/* {errors.email && touched.email && errors.email} */}
                      <ErrorMessage component="div" name="email" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="password">
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {/* {errors.password && touched.password && errors.password} */}
                      <ErrorMessage component="div" name="password" />
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid || !dirty}
                  >
                    LogIn
                  </button>
                  <Link to="/signUp">signUp</Link>
                </>
              )}
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
