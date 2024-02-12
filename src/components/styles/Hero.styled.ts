import styled from "styled-components";
import { Button } from "./Button.styled";
import Image from "next/image";
import { Container } from "./Container.styled";
import { device } from "@/src/lib/mediaQueries";

export const HeroContainer = styled(Container)`
  position: relative;
`;

export const HeadingHero = styled.h1`
  display: flex;
  flex-direction: column;

  text-align: center;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  font-family: var(--font-encode-sans-exp);

  padding-bottom: 0.5rem;

  & > span:first-child {
    z-index: -10;
  }

  @media ${device.md} {
    font-size: 5rem;
    padding-bottom: 1rem;
  }
`;

export const HeroDescription = styled.p`
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;

  padding-bottom: 2rem;

  @media ${device.md} {
    font-size: 1.875rem;
    text-transform: initial;

    padding-bottom: 4rem;
  }
`;

export const HeroButton = styled(Button)`
  padding: 0.75rem 2rem;
  border-radius: 0.625rem;
  width: fit-content;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media ${device.md} {
    font-size: 1.875rem;
    border-radius: 0.62631rem;
    padding: 1.50025rem 3.75063rem;
  }
`;

export const MainContent = styled.div`
  position: relative;
  padding-top: 4.41rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 6.13rem;
`;

export const SecondaryHeading = styled.h2`
  font-family: var(--font-encode-sans-sc);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  letter-spacing: 0.43125rem;
  text-transform: uppercase;

  max-width: 21.8125rem;

  @media ${device.md} {
    font-size: 2.5rem;
    letter-spacing: 1.15rem;
    max-width: initial;
  }
`;

export const AffiliateBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  padding: 0rem 1.125rem;
  align-items: center;
  align-content: center;
  gap: 0.375rem;
  flex-wrap: wrap;

  border-radius: 1.25rem;
  background: var(--Black, #000);
  box-shadow: 0px -19px 39.2px 0px rgba(255, 2, 0, 0.5);

  @media ${device.md} {
    grid-template-columns: 1fr 1fr auto 1fr;
    padding: 0rem 1.75rem;
  }
`;

export const AffiliateCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.81rem;
  padding: 2rem 1rem;
  border-image: linear-gradient(180deg, #ed1c24 0%, rgba(237, 28, 36, 0) 100%)
    30;
  border-right-width: 1px;
  border-right-style: solid;

  h3 {
    font-family: var(--font-encode-sans-sc);
    text-align: center;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    text-align: center;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &:last-child {
    border: none;
  }

  @media ${device.md} {
    padding: 1rem 1rem;
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.575rem;
    }
  }

  @media screen and (min-width: 1110px) {
    padding: 2rem 3rem;
    h3 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.875rem;
    }
  }
`;

export const BgContainer = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Background = styled(Image)`
  object-fit: contain;
  filter: brightness(60%);
`;

export const Fire = styled(Background)`
  filter: blur(10px) contrast(100%) brightness(70%);
`;
