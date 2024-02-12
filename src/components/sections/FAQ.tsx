"use client";

import styled from "styled-components";
import { Flex, PaddedContainer } from "../styles/Container.styled";
import { Heading } from "../styles/Heading.styled";
import { FAQAccordion } from "../ui/FAQAccordion";
import Image from "next/image";
import { Blob } from "../styles/Blob.styled";
import { useTranslation } from "react-i18next";
import { device } from "@/src/lib/mediaQueries";

const FAQContainer = styled(PaddedContainer)`
  position: relative;
`;

const DesktopImageContainer = styled.div`
  display: none;
  @media ${device.md} {
    display: block;
    position: relative;
    aspect-ratio: 119/172;

    & > img {
      object-fit: cover;
    }
  }
`;

const Grid = styled.div`
  @media ${device.md} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12.5rem;
  }
`;

const FAQBlob = styled(Blob)`
  height: 120%;
  top: -0%;
  left: -70%;
`;

export const FAQ = () => {
  const { t } = useTranslation();

  return (
    <section>
      <FAQContainer>
        <FAQBlob />
        <Flex $mobileGap="1.25rem" $desktopGap="6.25rem">
          <Heading>{t("FAQ_title")}</Heading>
          <Grid>
            <FAQAccordion />
            <DesktopImageContainer>
              <Image
                src="/images/FAQ-illustration.png"
                alt="image"
                fill={true}
              />
            </DesktopImageContainer>
          </Grid>
        </Flex>
      </FAQContainer>
    </section>
  );
};
