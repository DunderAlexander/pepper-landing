"use client";

import styled from "styled-components";
import { Flex, PaddedContainer } from "../styles/Container.styled";
import { Heading } from "../styles/Heading.styled";
import { ShadowCard } from "../styles/ShadowCard.styled";
import { Description } from "../styles/Description.styled";
import { useTranslation } from "react-i18next";
import HTMLReactParser from "html-react-parser";
import { device } from "@/src/lib/mediaQueries";

const GuaranteeCard = styled(Flex)`
  font-family: var(--font-encode-sans-sc);

  line-height: 120%;
  font-size: 0.625rem;
  font-weight: 300;

  h3 {
    font-size: 0.9375rem;
    font-weight: 700;
  }

  @media ${device.md} {
    padding: 2.12rem;
    border-radius: 1.25rem;
    box-shadow: 0px -19px 39.2px 0px rgba(255, 2, 0, 0.5);

    h3 {
      font-size: 1.3rem;
      line-height: normal;
    }

    font-size: 1.1rem;
    line-height: normal;
  }

  @media ${device.xl} {
    padding: 3.12rem;
    border-radius: 1.25rem;

    h3 {
      font-size: 1.875rem;
    }

    font-size: 1.5625rem;
  }
`;

const GuaranteeFlex = styled(Flex)`
  gap: 4.38rem;
  @media ${device.lg} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.12rem;
  }
  @media ${device.xl} {
    gap: 5.12rem;
  }
`;

const GuaranteeBox = styled(ShadowCard)`
  @media ${device.md} {
    box-shadow: none;
    padding: 0;
  }
`;

const GuaranteeDesc = styled(Description)`
  max-width: 18.1875rem;
  letter-spacing: -0.00938rem;
  font-size: 0.9375rem;
  font-weight: 400;
  @media ${device.md} {
    max-width: initial;
    font-size: 2.5rem;
  }
`;

export const PartnersOurGuarantees = () => {
  const { t } = useTranslation();
  return (
    <section>
      <PaddedContainer>
        <Flex $mobileGap="4.25rem" $desktopGap="6.25rem" $alignItems="center">
          <GuaranteeBox>
            <Flex $mobileGap="2.38rem" $desktopGap="6.25rem">
              <Heading>{t("Guarantees_title")}</Heading>
              <GuaranteeFlex>
                <GuaranteeCard $mobileGap="2.38rem">
                  <h3>{t("Guarantees_subtitle-1")}</h3>
                  <Flex $mobileGap="1.3rem">
                    {HTMLReactParser(t("Guarantees_text-1"))}
                  </Flex>
                </GuaranteeCard>
                <GuaranteeCard $mobileGap="2.38rem">
                  <h3>{t("Guarantees_subtitle-2")}</h3>
                  <Flex $mobileGap="1.3rem">
                    {HTMLReactParser(t("Guarantees_text-2"))}
                  </Flex>
                </GuaranteeCard>
                <GuaranteeCard $mobileGap="2.38rem">
                  <h3>{t("Guarantees_subtitle-3")}</h3>
                  <Flex $mobileGap="1.3rem">
                    {HTMLReactParser(t("Guarantees_text-3"))}
                  </Flex>
                </GuaranteeCard>
              </GuaranteeFlex>
            </Flex>
          </GuaranteeBox>
          <GuaranteeDesc>{t("Guarantees_description")}</GuaranteeDesc>
        </Flex>
      </PaddedContainer>
    </section>
  );
};
