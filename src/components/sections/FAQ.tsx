"use client";

import styled from "styled-components";
import { Flex, PaddedContainer } from "../styles/Container.styled";
import { Heading } from "../styles/Heading.styled";
import { FAQAccordion } from "../ui/FAQAccordion";
import Image from "next/image";
import { Blob } from "../styles/Blob.styled";

const FAQContainer = styled(PaddedContainer)`
  position: relative;
`;

const DesktopImageContainer = styled.div`
  display: none;
  @media screen and (min-width: 764px) {
    display: block;
    position: relative;
    aspect-ratio: 119/172;

    & > img {
      object-fit: cover;
    }
  }
`;

const Grid = styled.div`
  @media screen and (min-width: 764px) {
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
  return (
    <section>
      <FAQContainer>
        <FAQBlob />
        <Flex $mobileGap="1.25rem" $desktopGap="6.25rem">
          <Heading>Frequently Asked Questions</Heading>
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
