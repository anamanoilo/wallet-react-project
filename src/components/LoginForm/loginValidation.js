import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter an email")
    .max(254, "Max 254")
    .required("Just do it"),
  password: Yup.string()
    .min(6, "so small")
    .max(12, "so long")
    .required("Just do it"),
});
