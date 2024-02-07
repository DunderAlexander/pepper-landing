"use client";

import { Container, Flex } from "../styles/Container.styled";
import { Heading } from "../styles/Heading.styled";
import { ShadowCard } from "../styles/ShadowCard.styled";

import GmgIcon from "/public/gmg.svg";
import TraficAgencyIcon from "/public/traffic-agency.svg";
import TraffbrazaIcon from "/public/traffbraza.svg";
import styled from "styled-components";

const TrustedContainer = styled(Container)`
  padding-block: 3.44rem;
  @media screen and (min-width: 764px) {
    padding-block: 7.5rem;
  }
`;

const LogoWithBorder = styled.div`
  position: relative;
  width: 100%;
  @media screen and (min-width: 764px) {
    &:not(:last-child)::after {
      content: "";
      position: absolute;
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

export const TrustedBy = () => {
  return (
    <section>
      <TrustedContainer>
        <ShadowCard>
          <Flex $mobileGap="2.5rem">
            <Heading>Trusted By</Heading>
            <Flex $row $desktopGap="2rem">
              <LogoWithBorder>
                <TraficAgencyIcon />
              </LogoWithBorder>
              <LogoWithBorder>
                <GmgIcon />
              </LogoWithBorder>
              <LogoWithBorder>
                <TraffbrazaIcon />
              </LogoWithBorder>
            </Flex>
          </Flex>
        </ShadowCard>
      </TrustedContainer>
    </section>
  );
};
