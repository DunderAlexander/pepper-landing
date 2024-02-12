import styled from "styled-components";
import { ShadowCard } from "../styles/ShadowCard.styled";
import BlankIcon from "/public/blank-pepper.svg";
import { Flex } from "../styles/Container.styled";
import { useTranslation } from "react-i18next";
import { device } from "@/src/lib/mediaQueries";
import HTMLReactParser from "html-react-parser";

const PartnerCardStyled = styled(ShadowCard)`
  display: flex;
  flex: 0 0 100%;
  min-width: 0;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.38rem;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  padding: 2.5rem;

  @media ${device.md} {
    gap: 3.5rem;
    flex: initial;
    min-width: initial;
    padding: 2.75rem;

    font-size: 1.25rem;
  }
`;

const TestimonialCardIcon = styled(BlankIcon)`
  width: 1.78081rem;
  height: 2.21219rem;
  color: white;
  fill: white;

  @media ${device.md} {
    width: 2.15663rem;
    height: 2.67906rem;
  }
`;

export const PartnerCard = ({
  text,
  // pSecond,
  Logo,
}: {
  text: string;
  // pSecond: string;
  Logo: any;
}) => {
  const { t } = useTranslation();
  return (
    <PartnerCardStyled>
      <Flex $desktopGap="4.14rem" $mobileGap="2.375rem">
        <div>
          <TestimonialCardIcon />
          <TestimonialCardIcon />
        </div>
        <Flex $mobileGap="1rem" $desktopGap="2rem">
          {HTMLReactParser(t(text))}
          {/* <p>{pSecond}</p> */}
        </Flex>
      </Flex>
      <Logo />
    </PartnerCardStyled>
  );
};
