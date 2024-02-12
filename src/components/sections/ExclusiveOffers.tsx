"use client";

import styled from "styled-components";
import { Container, Flex, PaddedContainer } from "../styles/Container.styled";
import GeoLogo from "/public/geo.svg";
import RoiLogo from "/public/roi.svg";
import { Description } from "../styles/Description.styled";
import { LogoBox } from "../styles/LogoBox.styled";
import { Heading } from "../styles/Heading.styled";
import { PicturesContainer } from "../styles/PicturesContainer.styled";
import { useTranslation } from "react-i18next";
import { device } from "@/src/lib/mediaQueries";

const Break = styled.div`
  height: 1.5px;
  width: 100%;
  background: linear-gradient(45deg, #ed1c24 0%, rgba(237, 28, 36, 0) 100%);

  @media ${device.md} {
    display: none;
  }
`;

const FlexWithBreak = styled(Flex)`
  @media ${device.md} {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: calc(-5.81rem / 2);
      height: 100%;
      width: 1.5px;
      background: linear-gradient(
        180deg,
        #ed1c24 0%,
        rgba(237, 28, 36, 0) 100%
      );
    }
  }
`;

const LogoBoxOffers = styled(LogoBox)`
  justify-content: center;
  &:first-child > svg {
    width: 1.93519rem;
    height: 1.93519rem;
  }
  &:last-child > svg {
    max-width: 9.2rem;
  }
  @media ${device.md} {
    justify-content: initial;

    &:last-child > svg {
      width: 50%;
      max-width: 440px;
    }
    &:first-child > svg {
      flex-shrink: 0;
      width: 6.5625rem;
      height: 6.5625rem;
    }
  }

  @media ${device.xl} {
    &:last-child > svg {
      max-width: initial;
      width: 100%;
    }
  }
`;

const MainContainer = styled.div`
  display: grid;
  gap: 1.25rem;

  @media ${device.xl} {
    grid-template-columns: 60% 1fr;
    gap: 5.81rem;
  }
`;

const OffersPicContainer = styled(PicturesContainer)`
  @media ${device.md} {
    grid-template-columns: initial;
    grid-auto-rows: initial;
  }
  /* @media ${device.xl} {
    grid-template-columns: initial;
    grid-auto-rows: initial;
  } */
`;

export const ExclusiveOffers = () => {
  const { t } = useTranslation();

  return (
    <section>
      <PaddedContainer>
        <MainContainer>
          <FlexWithBreak $mobileGap="1.25rem" $desktopGap="2.94rem">
            <Heading>{t("ExclusiveOffers_title")}</Heading>
            <Description>{t("ExclusiveOffers_description")}</Description>
          </FlexWithBreak>
          <Break />
          <OffersPicContainer>
            <LogoBoxOffers>
              <GeoLogo />
              <p>{t("ExclusiveOffers_text")}</p>
            </LogoBoxOffers>
            <LogoBoxOffers>
              <RoiLogo />
            </LogoBoxOffers>
          </OffersPicContainer>
        </MainContainer>
      </PaddedContainer>
    </section>
  );
};
