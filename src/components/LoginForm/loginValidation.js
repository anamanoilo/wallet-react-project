import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter correct email")
    .max(254, "Max 254")
    .required("this field is required"),
  password: Yup.string()
    .min(6, "Please enter more than 5 character")
    .max(12, "Max 12")
    .required("this field is required"),
});
