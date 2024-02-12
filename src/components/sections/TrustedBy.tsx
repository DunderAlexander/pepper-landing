"use client";

import { Flex, PaddedContainer } from "../styles/Container.styled";
import { Heading } from "../styles/Heading.styled";
import { ShadowCard } from "../styles/ShadowCard.styled";

import GmgIcon from "/public/gmg.svg";
import TraficAgencyIcon from "/public/traffic-agency.svg";
import TraffbrazaIcon from "/public/traffbraza.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { device } from "@/src/lib/mediaQueries";
import Image from "next/image";

const LogoWithBorder = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 368/82;
  @media ${device.md} {
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      right: 0;
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

const LogoImage = styled(Image)`
  object-fit: contain;
`;

export const TrustedBy = ({ logos }: { logos: any[] }) => {
  const { t } = useTranslation();

  return (
    <section>
      <PaddedContainer>
        <ShadowCard>
          <Flex $mobileGap="2.5rem">
            <Heading>{t("default:TrustedBy_title")}</Heading>
            <Flex $row $desktopGap="2rem">
              {logos.map((logoSrc, idx) => (
                <LogoWithBorder key={idx}>
                  <LogoImage src={logoSrc} alt="logo" fill={true} />
                </LogoWithBorder>
              ))}
              {/* <LogoWithBorder>
                <TraficAgencyIcon />
              </LogoWithBorder>
              <LogoWithBorder>
                <GmgIcon />
              </LogoWithBorder>
              <LogoWithBorder>
                <TraffbrazaIcon />
              </LogoWithBorder> */}
            </Flex>
          </Flex>
        </ShadowCard>
      </PaddedContainer>
    </section>
  );
};
