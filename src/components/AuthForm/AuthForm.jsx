// import s from "./AuthForm.module.scss";
import { Formik, ErrorMessage } from "formik";
import { authValidationSchema } from "./validationAuthForm";
import { register, login } from "redux/session/auth-operation";
import { useDispatch } from "react-redux";

export const AuthForm = () => {
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
        validationSchema={authValidationSchema}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          console.log("values", values);
          dispatch(register(values));
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              email
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

            <label htmlFor="password">
              password
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
            <label htmlFor="confirmPassword">
              confirmPassword
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {/* {errors.password && touched.password && errors.password} */}
              <ErrorMessage component="div" name="confirmPassword" />
            </label>
            <label htmlFor="username">
              Name
              <input
                type="name"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {/* {errors.email && touched.email && errors.email} */}
              <ErrorMessage component="div" name="username" />
            </label>

            <button type="submit" disabled={isSubmitting || !isValid || !dirty}>
              registration
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
