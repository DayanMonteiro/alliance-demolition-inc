import * as yup from "yup";

export const contactSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required("Full name is required")
    .min(2, "Full name must have at least 2 characters"),

  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Enter a valid email address"),

  phone: yup
    .string()
    .trim()
    .required("Phone is required")
    .matches(/^\(\d{3}\) \d{3}-\d{4}$/, "Enter a valid US phone number"),

  message: yup
    .string()
    .trim()
    .required("Message is required")
    .min(10, "Message must have at least 10 characters"),
});
