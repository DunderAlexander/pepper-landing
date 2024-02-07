import styled from "styled-components";
import { ShadowCard } from "../styles/ShadowCard.styled";
import BlankIcon from "/public/blank-pepper.svg";
import { Flex } from "../styles/Container.styled";

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

  @media screen and (min-width: 764px) {
    gap: 4.14rem;
    flex: initial;
    min-width: initial;

    font-size: 1.25rem;
  }
`;

const TestimonialCardIcon = styled(BlankIcon)`
  width: 1.78081rem;
  height: 2.21219rem;

  @media screen and (min-width: 764px) {
    width: 2.15663rem;
    height: 2.67906rem;
  }
`;

export const PartnerCard = ({
  pFirst,
  pSecond,
  Logo,
}: {
  pFirst: string;
  pSecond: string;
  Logo: any;
}) => {
  return (
    <PartnerCardStyled>
      <div>
        <TestimonialCardIcon />
        <TestimonialCardIcon />
      </div>
      <Flex $mobileGap="1rem" $desktopGap="2rem">
        <p>{pFirst}</p>
        <p>{pSecond}</p>
      </Flex>
      <Logo />
    </PartnerCardStyled>
  );
};
