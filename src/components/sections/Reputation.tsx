"use client";

import styled from "styled-components";
import { Flex, PaddedContainer } from "../styles/Container.styled";
import { Description } from "../styles/Description.styled";
import { Heading } from "../styles/Heading.styled";
import { LogoBox } from "../styles/LogoBox.styled";
import { PicturesContainer } from "../styles/PicturesContainer.styled";

import DollarIcon from "/public/pepper-dollar.svg";
import PercentIcon from "/public/pepper-percent.svg";
import { ShadowCard } from "../styles/ShadowCard.styled";
import { useTranslation } from "react-i18next";
import { device } from "@/src/lib/mediaQueries";

const RepLogoBox = styled(LogoBox)`
  @media ${device.md} {
    gap: 2rem;
    svg {
      max-width: 5.35rem;
    }
  }
`;

const RepPicContainer = styled(PicturesContainer)`
  @media ${device.md} {
    grid-template-columns: initial;
  }
  @media ${device.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// const ShadowRepCard = styled()

export const Reputation = () => {
  const { t } = useTranslation();
  return (
    <section>
      <PaddedContainer>
        <ShadowCard>
          <Flex $mobileGap="2.06rem" $desktopGap="6.75rem">
            <Flex $mobileGap="0.94rem" $desktopGap="3.06rem">
              <Heading>{t("Reputation_title")}</Heading>
              <Description>{t("Reputation_description")}</Description>
            </Flex>
            <RepPicContainer>
              <RepLogoBox>
                <DollarIcon />
                <p>{t("Reputation_benefits-1")}</p>
              </RepLogoBox>
              <RepLogoBox>
                <PercentIcon />
                <p>{t("Reputation_benefits-2")}</p>
              </RepLogoBox>
            </RepPicContainer>
          </Flex>
        </ShadowCard>
      </PaddedContainer>
    </section>
  );
};
