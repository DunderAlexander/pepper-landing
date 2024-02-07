"use client";

import styled from "styled-components";
import { Container, Flex } from "../styles/Container.styled";
import { Heading } from "../styles/Heading.styled";

import { testimonialData } from "../../lib/data";
import { PartnerCard } from "../ui/PartnerCard";
import useEmblaCarousel from "embla-carousel-react";

const CardContainer = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 764px) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    gap: 7rem;
  }
`;

const Embla = styled.div`
  overflow: hidden;
  padding: 40px 10px;
  margin: -40px -10px;
`;

export const Testimonial = () => {
  const [ref] = useEmblaCarousel();

  return (
    <section>
      <Container>
        <Flex $mobileGap="4.25rem" $desktopGap="6.25rem">
          <Heading>What our partners & industry leaders say</Heading>
          <Embla ref={ref}>
            <CardContainer>
              {testimonialData.map((item, idx) => (
                <PartnerCard key={idx} {...item} />
              ))}
            </CardContainer>
          </Embla>
        </Flex>
      </Container>
    </section>
  );
};
