"use client";

import { Flex } from "../styles/Container.styled";
import {
  AffiliateBox,
  AffiliateCard,
  Fire,
  FireContainer,
  HeadingHero,
  HeroButton,
  HeroContainer,
  HeroDescription,
  MainContent,
  SecondaryHeading,
} from "../styles/Hero.styled";

export const Hero = () => {
  return (
    <section>
      <HeroContainer>
        <FireContainer>
          <Fire src="/images/bg-fire.png" alt="fire" fill={true} />
        </FireContainer>
        <MainContent>
          <HeadingHero>
            <span>Monetize your </span>
            <span>gambling and betting traffic</span>
          </HeadingHero>
          <HeroDescription>
            Reach new markets and boost conversions with Pepper Partners.
          </HeroDescription>
          <HeroButton>Become an affiliate</HeroButton>
        </MainContent>
        <Flex $mobileGap="2.19rem" $desktopGap="8.94rem" $alignItems="center">
          <SecondaryHeading>with our affiliate network</SecondaryHeading>
          <AffiliateBox>
            <AffiliateCard>
              <h3>14K+</h3>
              <p>Affiliates</p>
            </AffiliateCard>
            <AffiliateCard>
              <h3>40K+</h3>
              <p>ARPPU</p>
            </AffiliateCard>
            <AffiliateCard>
              <h3>150K+</h3>
              <p>First Deposits monthly</p>
            </AffiliateCard>
            <AffiliateCard>
              <h3>2K+</h3>
              <p>Offers</p>
            </AffiliateCard>
          </AffiliateBox>
        </Flex>
      </HeroContainer>
    </section>
  );
};
