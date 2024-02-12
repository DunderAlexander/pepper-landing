"use client";

import styled from "styled-components";
import { Flex, Grid, PaddedContainer } from "../styles/Container.styled";
import { RedButton } from "../styles/Button.styled";
import { Embla } from "../styles/Embla.styled";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "../../useDotButton";
import { Heading } from "../styles/Heading.styled";

import BlankIcon from "/public/blank-pepper.svg";
import { useTranslation } from "react-i18next";
import { device } from "@/src/lib/mediaQueries";

const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  background: #3d3d3d;
  padding: 0.61rem 0.47rem;
  border-radius: 0.36rem;
  flex: 0 0 70%;
  min-width: 0;

  @media ${device.md} {
    gap: 2.25rem;
    padding: 2.12rem 1.62rem;
    border-radius: 1.25rem;
  }
`;

const Upcoming = styled.h2`
  font-family: var(--font-encode-sans-sc);

  font-size: 0.625rem;
  font-weight: 500;

  color: #ed1c24;

  @media ${device.md} {
    font-family: var(--font-encode-sans);
    font-size: 1.875rem;
  }
`;

const Title = styled.h1`
  font-family: var(--font-encode-sans-sc);

  font-size: 0.9375rem;
  font-weight: 700;

  @media ${device.md} {
    font-size: 5rem;
  }
`;

const EventLocation = styled.p`
  font-family: var(--font-encode-sans-sc);

  font-size: 0.9375rem;
  font-weight: 500;
  text-transform: uppercase;

  @media ${device.md} {
    font-size: 2.5rem;
  }
`;

const EventDate = styled.p`
  font-size: 0.625rem;
  font-weight: 500;

  @media ${device.md} {
    font-size: 1.875rem;
  }
`;

const FindOutMoreButton = styled(RedButton)`
  padding: 0.3rem 0.5rem;

  @media ${device.md} {
    padding: 1.5rem 3.75rem;
  }
`;

const ButtonsContainer = styled.div<{ $isLastSelected?: boolean }>`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 1rem;

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background: ${({ $isLastSelected }) =>
      $isLastSelected
        ? "linear-gradient(45deg, #ED1C24 40%, white 100%)"
        : "white"};
  }

  @media ${device.md} {
    &::after {
      height: 3px;
    }
  }
`;

const CardDotButton = styled.button<{ $isLit?: boolean }>`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr min-content;
  align-items: center;

  &::before {
    content: "";
    width: 100%;
    height: 2px;
    background: ${({ $isLit }) =>
      $isLit ? "linear-gradient(45deg, #ED1C24 40%, white 100%)" : "white"};
  }
  & svg {
    color: ${({ $isLit }) => ($isLit ? "#ED1C24" : "white")};
    fill: ${({ $isLit }) => ($isLit ? "#ED1C24" : "white")};
  }

  @media ${device.md} {
    &::before {
      height: 3px;
    }
  }
`;

const Indicator = styled.div`
  width: 0.86038rem;
  height: 1.06881rem;

  @media ${device.md} {
    width: 2.15663rem;
    height: 2.67906rem;
  }
`;

const EventCardComponent = ({
  title,
  location,
  date,
  link,
  upcoming,
}: {
  title: string;
  location: string;
  date: string;
  link: string;
  upcoming?: string;
}) => {
  const { t } = useTranslation();

  return (
    <EventCard>
      <Upcoming>{upcoming ? upcoming : "-"}</Upcoming>
      <Title>{title}</Title>
      <EventLocation>{location}</EventLocation>
      <Flex $row $alignItems="center" $justifyContent="space-between">
        <EventDate>{date}</EventDate>
        <FindOutMoreButton href={link}>
          {t("WhereToMeet_slide_button")}
        </FindOutMoreButton>
      </Flex>
    </EventCard>
  );
};

export const WhereToMeet = () => {
  const [ref, emblaApi] = useEmblaCarousel();
  const { t } = useTranslation();

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section>
      <PaddedContainer>
        <Flex $mobileGap="2.44rem" $desktopGap="6.25rem">
          <Heading>{t("WhereToMeet_title")}</Heading>
          <Embla ref={ref}>
            <Grid
              $mobileCols="repeat(3, max-content)"
              $mobileGap="1.28rem"
              $desktopGap="4.36rem"
            >
              <EventCardComponent
                link="https://kinza360.com/"
                upcoming={t("WhereToMeet_slide_text")}
                title={t("WhereToMeet_slide_title-1")}
                location={t("WhereToMeet_slide_place-1")}
                date={t("WhereToMeet_slide_date-1")}
              />
              <EventCardComponent
                link="https://sigma.world"
                title={t("WhereToMeet_slide_title-2")}
                location={t("WhereToMeet_slide_place-2")}
                date={t("WhereToMeet_slide_date-2")}
              />
              <EventCardComponent
                link="https://london.igbaffiliate.com/"
                title={t("WhereToMeet_slide_title-3")}
                location={t("WhereToMeet_slide_place-3")}
                date={t("WhereToMeet_slide_date-3")}
              />
            </Grid>
          </Embla>
          <ButtonsContainer
            $isLastSelected={selectedIndex === scrollSnaps.length - 1}
          >
            {scrollSnaps.map((_, idx) => (
              <CardDotButton
                $isLit={idx <= selectedIndex}
                key={idx}
                onClick={() => onDotButtonClick(idx)}
              >
                <Indicator>
                  <BlankIcon />
                </Indicator>
              </CardDotButton>
            ))}
          </ButtonsContainer>
        </Flex>
      </PaddedContainer>
    </section>
  );
};
