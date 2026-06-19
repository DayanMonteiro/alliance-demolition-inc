"use client";

import { FormEvent, useState } from "react";
import { ValidationError } from "yup";
import styles from "./ContactForm.module.css";
import { contactSchema } from "@/src/services/contactSchema";
import { formatUSPhoneNumber } from "@/src/helpers/functions";
import InputComponent from "@/src/components/InputComponent";
import TextareaComponent from "@/src/components/TextareaComponent";
import Button from "@/src/components/Button";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});

  const handleValidate = async () => {
    try {
      await contactSchema.validate(formData, {
        abortEarly: false,
      });

      setErrors({});

      return true;
    } catch (error) {
      const validationErrors: ContactFormErrors = {};

      if (error instanceof ValidationError) {
        error.inner.forEach((currentError) => {
          const fieldName = currentError.path as keyof ContactFormData;

          if (fieldName) {
            validationErrors[fieldName] = currentError.message;
          }
        });
      }

      setErrors(validationErrors);

      return false;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const formattedValue =
      name === "phone" ? formatUSPhoneNumber(value) : value;

    setFormData((previousState) => ({
      ...previousState,
      [name]: formattedValue,
    }));

    setErrors((previousState) => ({
      ...previousState,
      [name]: "",
    }));
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previousState) => ({
      ...previousState,
      [name]: value,
    }));

    setErrors((previousState) => ({
      ...previousState,
      [name]: "",
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = await handleValidate();

    if (!isValid) {
      return;
    }

    console.log("Contact form data:", formData);

    // Integração futura:
    // await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
  };

  return (
    <form className={styles.ContactForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.content}>
        <InputComponent
          id="fullName"
          name="fullName"
          label="Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
          error={errors.fullName}
          required
        />

        <InputComponent
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          required
        />

        <InputComponent
          id="phone"
          name="phone"
          label="Phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          error={errors.phone}
          placeholder="(650) 931-7775"
          required
        />

        <TextareaComponent
          id="message"
          name="message"
          label="Message"
          value={formData.message}
          onChange={handleTextareaChange}
          error={errors.message}
          required
        />

        <div className={styles.submitButton}>
          <Button variant={"secondary"}>SEND MESSAGE</Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
