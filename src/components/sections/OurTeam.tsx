"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Flex, PaddedContainer } from "../styles/Container.styled";
import { CardContainer, Embla } from "../styles/Embla.styled";
import { Heading } from "../styles/Heading.styled";
import { PartnerCard } from "../ui/PartnerCard";
import { ourTeamData, testimonialData } from "../../lib/data";
import { PerformanceTeamCard } from "../ui/PerformanceTeamCard";

export const OurTeam = () => {
  const [ref] = useEmblaCarousel();
  return (
    <section>
      <PaddedContainer>
        <Flex $mobileGap="4.25rem" $desktopGap="6.25rem">
          <Heading>Meet your performance team!</Heading>
          <Embla ref={ref}>
            <CardContainer>
              {ourTeamData.map((item, idx) => (
                <PerformanceTeamCard key={idx} {...item} />
              ))}
            </CardContainer>
          </Embla>
        </Flex>
      </PaddedContainer>
    </section>
  );
};
