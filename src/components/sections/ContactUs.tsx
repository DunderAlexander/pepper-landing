"use client";

import styled from "styled-components";
import { Flex, Grid, PaddedContainer } from "../styles/Container.styled";
import { Description } from "../styles/Description.styled";
import { Heading } from "../styles/Heading.styled";
import { ShadowCard } from "../styles/ShadowCard.styled";
import { RedButton } from "../styles/Button.styled";

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

  @media screen and (min-width: 764px) {
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

  @media screen and (min-width: 764px) {
    font-size: 1.25rem;
  }
`;

const InputLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.88rem;

  font-size: 0.625rem;
  font-weight: 500;

  @media screen and (min-width: 764px) {
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

const ContactGrid = styled(Grid)`
  @media screen and (min-width: 764px) {
    box-shadow: 0px -19px 39.2px 0px rgba(255, 2, 0, 0.5);
    border-radius: 1.25rem;
    padding: 4rem 2rem;
  }
`;

const HeadingContact = styled(Heading)`
  @media screen and (min-width: 764px) {
    font-family: var(--font-encode-sans);
    font-size: 1.875rem;
    font-weight: 500;
  }
`;

const ContactShadowCard = styled(ShadowCard)`
  @media screen and (min-width: 764px) {
    padding: 0;
    box-shadow: initial;
    max-width: 36rem;
  }
`;

export const ContactUs = () => {
  return (
    <section>
      <PaddedContainer>
        <ContactGrid $desktopCols="repeat(2, 1fr)" $mobileGap="3.12rem">
          <Flex $mobileGap="1.56rem" $desktopGap="6.25rem">
            <Heading>Start making profit with us right now</Heading>
            <Description>
              Our manager will contact you to answer all your questions and help
              you get started!
            </Description>
          </Flex>
          <ContactShadowCard>
            <Flex $mobileGap="1.25rem">
              <HeadingContact>Contact us</HeadingContact>
              <Form>
                <TextInput name="name" placeholder="Your name" />
                <TextInput name="email" placeholder="Your email" />
                <TextInput name="phone" placeholder="Your Phone" />
                <TextInput name="telegram" placeholder="Your Telegram" />
                <TextArea name="message" placeholder="Your Message" />
                <InputLabel>
                  <Checkbox name="terms" type="checkbox" />
                  <span>I accept the terms and conditions</span>
                </InputLabel>
                <RedButton>Become an affiliate</RedButton>
              </Form>
            </Flex>
          </ContactShadowCard>
        </ContactGrid>
      </PaddedContainer>
    </section>
  );
};
