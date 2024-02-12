"use client";

import Image from "next/image";
import { Flex, PaddedContainer } from "../styles/Container.styled";
import { Description } from "../styles/Description.styled";
import { Heading } from "../styles/Heading.styled";
import styled from "styled-components";
import { LogoBox } from "../styles/LogoBox.styled";

import ReliableDataIcon from "/public/reliable-data.svg";
import FastSupportIcon from "/public/fast-support.svg";
import MobileTrafficIcon from "/public/mobile-traffic.svg";
import { RedButton } from "../styles/Button.styled";
import { useTranslation } from "react-i18next";
import { device } from "@/src/lib/mediaQueries";
import HTMLReactParser from "html-react-parser";

const ExpertiseImageBox = styled.div`
  position: relative;
  aspect-ratio: 325/258;
  max-width: 16.125rem;

  @media ${device.md} {
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
  text-transform: initial;

  & > svg {
    width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    left: calc(2rem + ${({ $mobileGap }) => $mobileGap} / 2);
    height: 100%;
    width: 1.5px;
    background: linear-gradient(180deg, #ed1c24 0%, rgba(237, 28, 36, 0) 100%);
  }

  @media ${device.md} {
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
  @media ${device.md} {
    gap: 7.25rem;
  }

  @media ${device.lg} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const OurExpertise = () => {
  const { t } = useTranslation();

  return (
    <section>
      <PaddedContainer>
        <Flex
          $mobileGap="1.25rem"
          $justifyContent="center"
          $desktopGap="6.25rem"
        >
          <Flex $mobileGap="1.25rem" $desktopGap="2rem">
            <Heading>{t("OurExpertise_title")}</Heading>
            <Description>{t("OurExpertise_description")}</Description>
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
                    {/* <strong>Lightning-fast support in-house</strong> for
                    striking efficiency */}
                    {HTMLReactParser(t("OurExpertise_benefits-1"))}
                  </p>
                </ExpertLogoBox>
                <ExpertLogoBox $desktopGap="6.24rem" $mobileGap="2.76rem">
                  <MobileTrafficIcon />
                  <p>
                    {/* <strong>Mobile traffic mastery</strong> for maximum
                    conversions */}
                    {HTMLReactParser(t("OurExpertise_benefits-2"))}
                  </p>
                </ExpertLogoBox>
                <ExpertLogoBox $desktopGap="6.24rem" $mobileGap="2.76rem">
                  <ReliableDataIcon />
                  <p>
                    {/* <strong>Reliable data management</strong> our system is
                    monitored 24/7 */}
                    {HTMLReactParser(t("OurExpertise_benefits-3"))}
                  </p>
                </ExpertLogoBox>
              </Flex>
              <RedButton href="https://lk.pepper.partners/register">
                {" "}
                {t("Hero_button")}
              </RedButton>
            </Flex>
          </PicWithPoints>
        </Flex>
      </PaddedContainer>
    </section>
  );
};
