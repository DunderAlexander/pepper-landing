"use client";

import Image from "next/image";
import { Container, Flex } from "../styles/Container.styled";
import { Description } from "../styles/Description.styled";
import { Heading } from "../styles/Heading.styled";
import styled from "styled-components";
import { LogoBox } from "../styles/LogoBox.styled";

import ReliableDataIcon from "/public/reliable-data.svg";
import FastSupportIcon from "/public/fast-support.svg";
import MobileTrafficIcon from "/public/mobile-traffic.svg";
import { Button, RedButton } from "../styles/Button.styled";

const ExpertiseContainer = styled(Container)`
  padding-block: 3.44rem;

  @media screen and (min-width: 764px) {
    padding-block: 7.5rem;
  }
`;

const ExpertiseImageBox = styled.div`
  position: relative;
  aspect-ratio: 325/258;
  max-width: 16.125rem;

  @media screen and (min-width: 764px) {
    max-width: initial;
    width: 100%;
  }
`;

const ExpertLogoBox = styled(LogoBox)<{
  $mobileGap: string;
  $desktopGap: string;
}>`
  gap: ${({ $mobileGap }) => $mobileGap};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: calc(2rem + ${({ $mobileGap }) => $mobileGap} / 2);
    height: 100%;
    width: 1.5px;
    background: linear-gradient(180deg, #ed1c24 0%, rgba(237, 28, 36, 0) 100%);
  }

  @media screen and (min-width: 764px) {
    gap: ${({ $desktopGap }) => $desktopGap};

    svg {
      max-width: 6.25rem;
    }
    font-size: 1.875rem;

    &::after {
      left: calc(6rem + ${({ $desktopGap }) => $desktopGap} / 2);
    }
  }
`;

const PicWithPoints = styled(Flex)`
  @media screen and (min-width: 764px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 7.25rem;
  }
`;

export const OurExpertise = () => {
  return (
    <section>
      <ExpertiseContainer>
        <Flex
          $mobileGap="1.25rem"
          $justifyContent="center"
          $desktopGap="6.25rem"
        >
          <Flex $mobileGap="1.25rem" $desktopGap="2rem">
            <Heading>Our expertise, your success</Heading>
            <Description>
              We boost your conversions, you enjoy higher revenue
            </Description>
          </Flex>
          <PicWithPoints $mobileGap="1.25rem">
            <Flex>
              <ExpertiseImageBox>
                <Image
                  src="/images/our-expertise.png"
                  alt="our-expertise"
                  fill={true}
                />
              </ExpertiseImageBox>
            </Flex>
            <Flex
              $mobileGap="2.85rem"
              $desktopGap="3.85rem"
              $alignItems="center"
            >
              <Flex $mobileGap="1.75rem" style={{ width: "100%" }}>
                <ExpertLogoBox $desktopGap="6.24rem" $mobileGap="2.76rem">
                  <FastSupportIcon />
                  <p>
                    <strong>Lightning-fast support in-house</strong> for
                    striking efficiency
                  </p>
                </ExpertLogoBox>
                <ExpertLogoBox $desktopGap="6.24rem" $mobileGap="2.76rem">
                  <MobileTrafficIcon />
                  <p>
                    <strong>Mobile traffic mastery</strong> for maximum
                    conversions
                  </p>
                </ExpertLogoBox>
                <ExpertLogoBox $desktopGap="6.24rem" $mobileGap="2.76rem">
                  <ReliableDataIcon />
                  <p>
                    <strong>Reliable data management</strong> our system is
                    monitored 24/7
                  </p>
                </ExpertLogoBox>
              </Flex>
              <RedButton>Become an affiliate</RedButton>
            </Flex>
          </PicWithPoints>
        </Flex>
      </ExpertiseContainer>
    </section>
  );
};
