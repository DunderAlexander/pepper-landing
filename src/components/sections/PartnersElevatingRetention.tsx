"use client";

import styled from "styled-components";
import { Flex, PaddedContainer } from "../styles/Container.styled";
import { Description } from "../styles/Description.styled";
import { Heading } from "../styles/Heading.styled";
import { ShadowCard } from "../styles/ShadowCard.styled";

import BlankPepperIcon from "/public/blank-pepper.svg";
import { useTranslation } from "react-i18next";
import HTMLReactParser from "html-react-parser";
import { device } from "@/src/lib/mediaQueries";

const ElRetentionDescBox = styled(Flex)`
  align-items: center;
  & > * {
    max-width: 19.125rem;
  }

  @media ${device.md} {
    & > * {
      max-width: initial;
    }
  }

  @media ${device.xl} {
    display: grid;
    grid-template-columns: 60% 40%;
  }
`;

const ElDescription = styled(Description)`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > svg {
    color: #ed1c24;
    width: 1.25713rem;
    height: 1.56169rem;
  }

  @media ${device.md} {
    font-size: 1.875rem;
    gap: 3.31rem;
    & > svg {
      width: 4.49888rem;
      height: 5.58869rem;
    }
  }
`;

const PointsBox = styled(Flex)`
  @media ${device["2xl"]} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PartnersElevatingRetention = () => {
  const { t } = useTranslation();
  return (
    <section>
      <PaddedContainer>
        <Flex $mobileGap="4.25rem" $desktopGap="7.25rem">
          <ShadowCard>
            <Flex $mobileGap="2.38rem">
              <Heading>{t("Retention_title")}</Heading>
              <PointsBox $mobileGap="2.38rem">
                <ElDescription>
                  <BlankPepperIcon />
                  {HTMLReactParser(t("Retention_text-1"))}
                </ElDescription>
                <ElDescription>
                  <BlankPepperIcon />
                  {HTMLReactParser(t("Retention_text-2"))}
                </ElDescription>
                <ElDescription>
                  <BlankPepperIcon />
                  {HTMLReactParser(t("Retention_text-3"))}
                </ElDescription>
              </PointsBox>
            </Flex>
          </ShadowCard>
          <ElRetentionDescBox $mobileGap="1.38rem">
            <Heading>{t("Retention_subtitle")}</Heading>
            <Description>{t("Guarantees_description")}</Description>
          </ElRetentionDescBox>
        </Flex>
      </PaddedContainer>
    </section>
  );
};
