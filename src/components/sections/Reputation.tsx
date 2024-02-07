"use client";

import styled from "styled-components";
import { Container, Flex } from "../styles/Container.styled";
import { Description } from "../styles/Description.styled";
import { Heading } from "../styles/Heading.styled";
import { LogoBox } from "../styles/LogoBox.styled";
import { PicturesContainer } from "../styles/PicturesContainer.styled";

import DollarIcon from "/public/pepper-dollar.svg";
import PercentIcon from "/public/pepper-percent.svg";
import { ShadowCard } from "../styles/ShadowCard.styled";

const RepContainer = styled(Container)`
  padding-block: 3.44rem;

  @media screen and (min-width: 764px) {
    padding-block: 7.5rem;
  }
`;

const RepLogoBox = styled(LogoBox)`
  @media screen and (min-width: 764px) {
    gap: 2rem;
    svg {
      max-width: 5.35rem;
    }
  }
`;

export const Reputation = () => {
  return (
    <section>
      <RepContainer>
        <ShadowCard>
          <Flex $mobileGap="2.06rem" $desktopGap="6.75rem">
            <Flex $mobileGap="0.94rem" $desktopGap="3.06rem">
              <Heading>Protected by our reputation</Heading>
              <Description>
                Benefit from stronger work terms with advertisers compared to
                direct collaboration
              </Description>
            </Flex>
            <PicturesContainer>
              <RepLogoBox>
                <DollarIcon />
                <p>Enhanced protection of your interests</p>
              </RepLogoBox>
              <RepLogoBox>
                <PercentIcon />
                <p>Better terms with every collaboration</p>
              </RepLogoBox>
            </PicturesContainer>
          </Flex>
        </ShadowCard>
      </RepContainer>
    </section>
  );
};
