import * as Yup from "yup";

export const authValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter correct email")
    .max(254, "Max 254")
    .required("this field is required"),
  password: Yup.string()
    .min(6, "Please enter more than 6 character")
    .max(12, "Max 12")
    .required("this field is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords have to be the same!")
    .required("this field is required"),
  username: Yup.string()
    .min(2, "Please enter more than 1 character")
    .max(12, "Max 12")
    .required("this field is required"),
});
