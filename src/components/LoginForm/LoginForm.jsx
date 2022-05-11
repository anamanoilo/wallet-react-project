import { Formik, ErrorMessage } from "formik";
import { loginValidationSchema } from "./loginValidation";
import { logIn } from "redux/session/auth-operation";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginValidationSchema}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          console.log("values", values);
          dispatch(logIn(values));
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
              Password
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

            <button type="submit" disabled={isSubmitting || !isValid || !dirty}>
              LogIn
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
