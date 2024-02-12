"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Flex, PaddedContainer } from "../styles/Container.styled";
import { CardContainer, Embla } from "../styles/Embla.styled";
import { Heading } from "../styles/Heading.styled";
import { ourTeamData } from "../../lib/data";
import { PerformanceTeamCard } from "../ui/PerformanceTeamCard";
import { useTranslation } from "react-i18next";

export const OurTeam = () => {
  const [ref] = useEmblaCarousel();
  const { t } = useTranslation();

  return (
    <section>
      <PaddedContainer>
        <Flex $mobileGap="4.25rem" $desktopGap="6.25rem">
          <Heading>{t("Team_title")}</Heading>
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
