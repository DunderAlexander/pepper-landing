"use client";

import { Flex, PaddedContainer } from "../styles/Container.styled";
import { Heading } from "../styles/Heading.styled";

import { testimonialData } from "../../lib/data";
import { PartnerCard } from "../ui/PartnerCard";
import useEmblaCarousel from "embla-carousel-react";
import { CardContainer, Embla } from "../styles/Embla.styled";

export const Testimonial = () => {
  const [ref] = useEmblaCarousel();

  return (
    <section>
      <PaddedContainer>
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
      </PaddedContainer>
    </section>
  );
};
