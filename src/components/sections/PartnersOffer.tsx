"use client";

import styled from "styled-components";
import { Flex, Grid, PaddedContainer } from "../styles/Container.styled";
import { Description } from "../styles/Description.styled";
import { Heading } from "../styles/Heading.styled";
import { Blob } from "../styles/Blob.styled";

import BlankPepperIcon from "/public/blank-pepper.svg";
import { useTranslation } from "react-i18next";
import { device } from "@/src/lib/mediaQueries";

const OfferSection = styled.section`
  position: relative;
  overflow: hidden;
`;

const OfferHeading = styled(Heading)`
  order: 1;
  @media ${device.md} {
    order: 3;
  }
`;

const OfferBlob = styled(Blob)`
  height: 15rem;
  width: 40rem;
  top: 5rem;
  left: -5rem;

  @media ${device.md} {
    height: 40rem;
    width: 85rem;
  }
`;

const Quote = styled(Description)`
  position: relative;
  font-weight: 300;
  line-height: 155%;
  letter-spacing: -0.00938rem;
  order: 2;

  @media ${device.md} {
    order: 1;
    font-weight: 300;
    line-height: 155%;
    letter-spacing: -0.0375rem;
    font-size: ${(props) => props.$fontSizeDesktop || "3.75rem"};
  }
`;

const QuoteAuthor = styled.p`
  font-size: 0.625rem;
  line-height: 100%;
  letter-spacing: -0.00625rem;
  font-weight: 700;
  order: 3;

  @media ${device.md} {
    order: 2;
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

const StepsContainer = styled(Grid)`
  gap: 1rem;

  & > p {
    font-family: var(--font-encode-sans-sc);

    display: flex;
    justify-content: center;
    align-items: end;
    font-size: 0.9375rem;
    font-weight: 700;
    letter-spacing: -0.00938rem;

    @media ${device.md} {
      font-size: 1.8rem;
      font-weight: 700;
    }
    @media ${device.xl} {
      font-size: 2.5rem;
      font-weight: 700;
    }
  }

  @media ${device.lg} {
    gap: 2rem;
  }
`;

const PeppersContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
`;

const PepperIconContainer = styled.div`
  svg {
    width: 0.83325rem;
    height: 1.03506rem;
    color: red;
  }

  background-color: black;
  padding: 1rem;

  @media ${device.md} {
    svg {
      width: 2.15663rem;
      height: 2.67906rem;
    }
  }
`;

const PepperLine = styled.div`
  left: 0;
  top: 50%;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: white;
  z-index: -2;
`;

export const PartnersOffer = () => {
  const { t } = useTranslation();
  return (
    <OfferSection>
      <PaddedContainer>
        <OfferBlob />
        <Flex $mobileGap="2.44rem" $desktopGap="6.25rem">
          <OfferHeading $maxWidth="16.875rem" $deskMaxWidth="initial">
            {t("Review_text")}
          </OfferHeading>
          <Quote>{t("Review_title")}</Quote>
          <QuoteAuthor>{t("Review_subtitle")}</QuoteAuthor>
          <Flex $order={4}>
            <StepsContainer $mobileCols="1fr 1fr 1fr">
              <p>{t("Review_step-1")}</p>
              <p>{t("Review_step-2")}</p>
              <p>{t("Review_step-3")}</p>
            </StepsContainer>
            <PeppersContainer>
              <PepperIconContainer>
                <BlankPepperIcon />
              </PepperIconContainer>
              <PepperIconContainer>
                <BlankPepperIcon />
              </PepperIconContainer>
              <PepperIconContainer>
                <BlankPepperIcon />
              </PepperIconContainer>
              <PepperLine />
            </PeppersContainer>
          </Flex>
        </Flex>
      </PaddedContainer>
    </OfferSection>
  );
};
