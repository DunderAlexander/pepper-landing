"use client";

import styled from "styled-components";
import { Flex, PaddedContainer } from "../styles/Container.styled";
import { Heading } from "../styles/Heading.styled";
import { ShadowCard } from "../styles/ShadowCard.styled";
import { Description } from "../styles/Description.styled";

export const PartnersOurGuarantees = () => {
  const GuaranteeCard = styled(Flex)`
    font-family: var(--font-encode-sans-sc);
    line-height: 120%;

    h3 {
      font-size: 0.9375rem;
      font-weight: 700;
    }

    p {
      font-size: 0.625rem;
      font-weight: 300;
    }

    @media screen and (min-width: 764px) {
      padding: 3.12rem;
      border-radius: 1.25rem;
      box-shadow: 0px -19px 39.2px 0px rgba(255, 2, 0, 0.5);

      h3 {
        font-size: 1.875rem;
        line-height: normal;
      }
      p {
        font-size: 1.5625rem;
        line-height: normal;
      }
    }
  `;

  const GuaranteeFlex = styled(Flex)`
    @media screen and (min-width: 764px) {
      flex-direction: row;
      gap: 5.12rem;
    }
  `;

  const GuaranteeBox = styled(ShadowCard)`
    @media screen and (min-width: 764px) {
      box-shadow: none;
      padding: 0;
    }
  `;

  const GuaranteeDesc = styled(Description)`
    max-width: 18.1875rem;
    letter-spacing: -0.00938rem;
    font-size: 0.9375rem;
    font-weight: 400;
    @media screen and (min-width: 764px) {
      max-width: initial;
      font-size: 2.5rem;
    }
  `;

  return (
    <section>
      <PaddedContainer>
        <Flex $mobileGap="4.25rem" $desktopGap="6.25rem" $alignItems="center">
          <GuaranteeBox>
            <Flex $mobileGap="2.38rem" $desktopGap="6.25rem">
              <Heading>Our guarantees</Heading>
              <GuaranteeFlex>
                <GuaranteeCard $mobileGap="2.38rem">
                  <h3>Affiliate Proficiency</h3>
                  <Flex $mobileGap="1.3rem">
                    <p>
                      We ensure that every affiliate undergoes a rigorous
                      probation period to demonstrate their expertise before
                      they start working with us.
                    </p>
                    <p>
                      This process guarantees that only{" "}
                      <strong>
                        the most skilled and knowledgeable affiliates
                      </strong>{" "}
                      handle your campaigns, ensuring professional execution and
                      optimal results.
                    </p>
                  </Flex>
                </GuaranteeCard>
                <GuaranteeCard $mobileGap="2.38rem">
                  <h3>Affiliate Proficiency</h3>
                  <Flex $mobileGap="1.3rem">
                    <p>
                      We ensure that every affiliate undergoes a rigorous
                      probation period to demonstrate their expertise before
                      they start working with us.
                    </p>
                    <p>
                      This process guarantees that only{" "}
                      <strong>
                        the most skilled and knowledgeable affiliates
                      </strong>{" "}
                      handle your campaigns, ensuring professional execution and
                      optimal results.
                    </p>
                  </Flex>
                </GuaranteeCard>
                <GuaranteeCard $mobileGap="2.38rem">
                  <h3>Affiliate Proficiency</h3>
                  <Flex $mobileGap="1.3rem">
                    <p>
                      We ensure that every affiliate undergoes a rigorous
                      probation period to demonstrate their expertise before
                      they start working with us.
                    </p>
                    <p>
                      This process guarantees that only{" "}
                      <strong>
                        the most skilled and knowledgeable affiliates
                      </strong>{" "}
                      handle your campaigns, ensuring professional execution and
                      optimal results.
                    </p>
                  </Flex>
                </GuaranteeCard>
              </GuaranteeFlex>
            </Flex>
          </GuaranteeBox>
          <GuaranteeDesc>
            We are ready to act as independent arbitrators and protect the
            interests of our partners in case of disputes.
          </GuaranteeDesc>
        </Flex>
      </PaddedContainer>
    </section>
  );
};
