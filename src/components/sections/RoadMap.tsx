"use client";

import styled from "styled-components";
import { Container, Flex } from "../styles/Container.styled";
import { Heading } from "../styles/Heading.styled";
import { roadMapData } from "../../lib/data";
import { RoadMapBlock } from "../ui/RoadMapBlock";
import { RedButton } from "../styles/Button.styled";

const RoadMapContainer = styled(Container)`
  padding-block: 3.44rem;
  @media screen and (min-width: 764px) {
    padding-block: 7.5rem;
  }
`;

const BorderFlex = styled(Flex)`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 8rem;
    height: 100%;
    width: 1.5px;
    background: linear-gradient(180deg, #ed1c24 0%, rgba(237, 28, 36, 0) 100%);
  }

  @media screen and (min-width: 764px) {
    &::after {
      left: 26rem;
    }
  }
`;

export const RoadMap = () => {
  return (
    <section>
      <RoadMapContainer>
        <Flex $desktopGap="6.25rem" $mobileGap="1.88rem" $alignItems="center">
          <Heading>Being a partner with us is easy</Heading>
          <BorderFlex $mobileGap="2rem">
            {roadMapData.map((data, idx) => (
              <RoadMapBlock key={idx} starCount={idx + 1} {...data} />
            ))}
          </BorderFlex>
          <RedButton>Become an affiliate</RedButton>
        </Flex>
      </RoadMapContainer>
    </section>
  );
};
