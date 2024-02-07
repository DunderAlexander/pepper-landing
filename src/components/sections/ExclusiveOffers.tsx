"use client";

import styled from "styled-components";
import { Container, Flex, PaddedContainer } from "../styles/Container.styled";
import GeoLogo from "/public/geo.svg";
import RoiLogo from "/public/roi.svg";
import { Description } from "../styles/Description.styled";
import { LogoBox } from "../styles/LogoBox.styled";
import { Heading } from "../styles/Heading.styled";
import { PicturesContainer } from "../styles/PicturesContainer.styled";

const Break = styled.div`
  height: 1.5px;
  width: 100%;
  background: linear-gradient(45deg, #ed1c24 0%, rgba(237, 28, 36, 0) 100%);

  @media screen and (min-width: 764px) {
    display: none;
  }
`;

const FlexWithBreak = styled(Flex)`
  @media screen and (min-width: 764px) {
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
  &:first-child > svg {
    max-width: 2rem;
  }
  &:last-child > svg {
    max-width: 9.2rem;
  }
  @media screen and (min-width: 764px) {
    &:last-child > svg {
      max-width: initial;
    }
    &:first-child > svg {
      max-width: 6.5rem;
    }
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media screen and (min-width: 764px) {
    flex-direction: row;
    gap: 5.81rem;
  }
`;

const OffersPicContainer = styled(PicturesContainer)`
  @media screen and (min-width: 764px) {
    grid-template-columns: initial;
    grid-auto-rows: initial;
  }
`;

export const ExclusiveOffers = () => {
  return (
    <section>
      <PaddedContainer>
        <MainContainer>
          <FlexWithBreak $mobileGap="1.25rem" $desktopGap="2.94rem">
            <Heading>More than 2000 exclusive offers</Heading>
            <Description>
              Find the most suitable options for you to align with your
              strengths and maximise ROI.
            </Description>
          </FlexWithBreak>
          <Break />
          <OffersPicContainer>
            <LogoBoxOffers>
              <GeoLogo />
              <p>Up to 30 offers for a single GEO location</p>
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
