"use client";

import { useTranslation } from "react-i18next";
import { RedButtonNonLink } from "../styles/Button.styled";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import ky from "ky";
import { device } from "@/src/lib/mediaQueries";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const TextInput = styled.input`
  padding: 0.56rem 1.56rem;
  background-color: white;
  border-radius: 0.6875rem;
  border: none;

  font-size: 0.625rem;
  font-weight: 500;

  &::placeholder {
    font-family: var(--font-encode-sans);
    opacity: 100;
  }

  @media ${device.md} {
    font-size: 1.25rem;
    padding: 1.12rem 1.56rem;
  }
`;

const TextArea = styled.textarea`
  padding: 0.56rem 1.56rem;
  background-color: white;
  border-radius: 0.6875rem;
  border: none;

  font-size: 0.625rem;
  font-weight: 500;

  resize: vertical;

  &::placeholder {
    font-family: var(--font-encode-sans);
    opacity: 100;
  }

  @media ${device.md} {
    font-size: 1.25rem;
  }
`;

const InputLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.88rem;

  font-size: 0.625rem;
  font-weight: 500;

  @media ${device.md} {
    font-size: 1.25rem;
  }
`;

const Checkbox = styled.input`
  width: 1.4375 em;
  height: 1.4375 em;

  -webkit-appearance: none;
  appearance: none;
  margin: 0;

  background: rgba(255, 255, 255, 0.1);

  font: inherit;
  border-radius: 0.35rem;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 1.55em;
    height: 1.55em;
    transform: scale(0);
    box-shadow: inset 1em 1em white;
    transform-origin: bottom left;
    clip-path: polygon(
      31.4% 54.49%,
      45.31% 67.48%,
      84.24% 25.79%,
      92.28% 33.3%,
      45.31% 83.61%,
      23.42% 63.04%
    );
  }

  &:checked::before {
    transform: scale(1);
  }
`;

export const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm({ mode: "onSubmit" });
  const { t } = useTranslation();
  const onSubmit = async (data: any) => {
    const response = await toast.promise(
      ky.post("https://lk.pepper.partners/api/feedback", { json: data }).then(
        (res) => reset(),
        (err) => console.log(err)
      ),
      {
        pending: t("Contacts_form_loading"),
        success: t("Contacts_form_sent"),
        error: t("Contacts_form_error"),
      },
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        name="name"
        placeholder={t("default:Contacts_form_placeholder_name")}
        {...register("name", { required: true })}
      />
      <TextInput
        name="email"
        placeholder={t("default:Contacts_form_placeholder_email")}
        {...register("email", { required: true })}
      />
      <TextInput
        name="phone"
        placeholder={t("default:Contacts_form_placeholder_number")}
        {...register("phone", { required: true })}
      />
      <TextInput
        name="telegram"
        placeholder={t("default:Contacts_form_placeholder_tg")}
        {...register("telegram", { required: true })}
      />
      <TextArea
        name="message"
        placeholder={t("default:Contacts_form_placeholder_message")}
        {...register("message", { required: true })}
      />
      <InputLabel>
        <Checkbox
          name="terms"
          type="checkbox"
          {...register("terms", { required: true })}
        />
        <span>
          <a href="https://lk.pepper.partners/policy-en.pdf">
            {t("default:Contacts_form_checkbox")}
          </a>
        </span>
      </InputLabel>
      <RedButtonNonLink>{t("default:Contacts_form_button")}</RedButtonNonLink>
      <ToastContainer />
    </Form>
  );
};
