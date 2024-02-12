"use client";

import styled from "styled-components";
import { Flex, Grid, PaddedContainer } from "../styles/Container.styled";
import { Description } from "../styles/Description.styled";
import { Heading } from "../styles/Heading.styled";
import { ShadowCard } from "../styles/ShadowCard.styled";
import { useTranslation } from "react-i18next";
import { RedButtonNonLink } from "../styles/Button.styled";
import { ContactForm } from "../modules/ContactForm";
import { device } from "@/src/lib/mediaQueries";

const ContactGrid = styled(Grid)`
  @media ${device.md} {
    box-shadow: 0px -19px 39.2px 0px rgba(255, 2, 0, 0.5);
    border-radius: 1.25rem;
    padding: 5rem 4rem;
  }
  @media ${device.xl} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HeadingContact = styled(Heading)`
  @media ${device.md} {
    font-family: var(--font-encode-sans);
    font-size: 1.875rem;
    font-weight: 500;
  }
`;

const ContactShadowCard = styled(ShadowCard)`
  @media ${device.md} {
    padding: 0;
    box-shadow: initial;
    max-width: 36rem;
  }
`;

export const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <section>
      <PaddedContainer>
        <ContactGrid $mobileGap="3.12rem">
          <Flex $mobileGap="1.56rem" $desktopGap="6.25rem">
            <Heading>{t("default:Contacts_title")}</Heading>
            <Description>{t("default:Contacts_description")}</Description>
          </Flex>
          <ContactShadowCard>
            <Flex $mobileGap="1.25rem">
              <HeadingContact>
                {t("default:Contacts_form_title")}
              </HeadingContact>
              <ContactForm />
            </Flex>
          </ContactShadowCard>
        </ContactGrid>
      </PaddedContainer>
    </section>
  );
};
