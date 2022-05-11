import * as Yup from "yup";

export const authValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter an email")
    .max(254, "Max 254")
    .required("Just do it"),
  password: Yup.string()
    .min(6, "Please enter more than 6 character")
    .max(12, "Max 12")
    .required("Just do it"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), "Passwords have to be the same!"])
    .required("Just do it"),
  username: Yup.string()
    .min(1, "Please enter more than 1 character")
    .max(12, "Max 12")
    .required("Just do it"),
});
