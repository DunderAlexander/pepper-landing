"use client";

import { Flex, PaddedContainer } from "../styles/Container.styled";
import { Heading } from "../styles/Heading.styled";

import { testimonialData } from "../../lib/data";
import { PartnerCard } from "../ui/PartnerCard";
import useEmblaCarousel from "embla-carousel-react";
import { CardContainer, Embla } from "../styles/Embla.styled";
import { useTranslation } from "react-i18next";

export const Testimonial = () => {
  const [ref] = useEmblaCarousel();
  const { t } = useTranslation();

  return (
    <section>
      <PaddedContainer>
        <Flex $mobileGap="4.25rem" $desktopGap="6.25rem">
          <Heading>{t("Testimonial_title")}</Heading>
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
