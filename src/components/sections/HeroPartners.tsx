"use client";

import { useTranslation } from "react-i18next";
import { Flex } from "../styles/Container.styled";
import {
  AffiliateBox,
  AffiliateCard,
  Background,
  BgContainer,
  Fire,
  HeadingHero,
  HeroButton,
  HeroContainer,
  HeroDescription,
  MainContent,
  SecondaryHeading,
} from "../styles/Hero.styled";
import styled from "styled-components";
import { Heading } from "../styles/Heading.styled";
import { device } from "@/src/lib/mediaQueries";

const HeroPartnersSubtitle = styled(HeroDescription)`
  padding-bottom: 4.12rem;
  @media ${device.md} {
    text-transform: uppercase;
    font-size: 2.5rem;
  }
`;

const HeroPartnersDescription = styled.h3`
  text-align: center;
  font-size: 0.625rem;
  font-weight: 500;
  max-width: 20rem;
  font-family: var(--font-encode-sans-sc);

  @media ${device.md} {
    font-family: var(--font-encode-sans);
    font-size: 1.875rem;
    max-width: initial;
  }
`;

const HeadingPartners = styled(Heading)`
  text-align: center;
  text-transform: uppercase;
  @media ${device.md} {
    text-transform: capitalize;
  }
`;

export const HeroPartners = () => {
  const { t } = useTranslation();

  return (
    <section>
      <HeroContainer>
        <MainContent>
          <BgContainer>
            <Background src="/images/bg-partners.svg" alt="" fill={true} />
          </BgContainer>
          <Flex $mobileGap="2.48rem" $desktopGap="2.94rem" $alignItems="center">
            <HeadingPartners>{t("Hero_title")} </HeadingPartners>
            <HeroPartnersSubtitle>{t("Hero_subtitle")}</HeroPartnersSubtitle>
          </Flex>
          <Flex $mobileGap="4.13rem" $desktopGap="4.81rem" $alignItems="center">
            <HeroButton href="https://lk.pepper.partners/register">
              {t("Hero_button")}
            </HeroButton>
            <HeroPartnersDescription>
              {t("Hero_description")}
            </HeroPartnersDescription>
          </Flex>
        </MainContent>
        <AffiliateBox>
          <AffiliateCard>
            <h3>14K+</h3>
            <p>{t("default:Hero_numbers_description-1")}</p>
          </AffiliateCard>
          <AffiliateCard>
            <h3>40K+</h3>
            <p>{t("default:Hero_numbers_description-2")}</p>
          </AffiliateCard>
          <AffiliateCard>
            <h3>150K+</h3>
            <p>{t("default:Hero_numbers_description-3")}</p>
          </AffiliateCard>
          <AffiliateCard>
            <h3>2K+</h3>
            <p>{t("default:Hero_numbers_description-4")}</p>
          </AffiliateCard>
        </AffiliateBox>
      </HeroContainer>
    </section>
  );
};

const HeadingHeroSplit = ({ fullTitle }) => {
  const words = fullTitle.split(" ");

  const firstPart = words.slice(0, 2).join(" ");
  const secondPart = words.slice(2).join(" ");

  return (
    <HeadingHero>
      <span>{firstPart}</span>
      <span>{secondPart}</span>
    </HeadingHero>
  );
};
