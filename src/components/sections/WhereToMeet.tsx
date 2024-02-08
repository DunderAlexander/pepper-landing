"use client";

import styled from "styled-components";
import { Flex, PaddedContainer } from "../styles/Container.styled";
import { RedButton } from "../styles/Button.styled";
import { Embla } from "../styles/Embla.styled";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "../../useDotButton";
import { Heading } from "../styles/Heading.styled";

import BlankIcon from "/public/blank-pepper.svg";

const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  background: #3d3d3d;
  padding: 0.61rem 0.47rem;
  border-radius: 0.36rem;
  flex: 0 0 70%;
  min-width: 0;

  @media screen and (min-width: 764px) {
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

  @media screen and (min-width: 764px) {
    font-family: var(--font-encode-sans);
    font-size: 1.875rem;
  }
`;

const Title = styled.h1`
  font-family: var(--font-encode-sans-sc);

  font-size: 0.9375rem;
  font-weight: 700;

  @media screen and (min-width: 764px) {
    font-size: 5rem;
  }
`;

const EventLocation = styled.p`
  font-family: var(--font-encode-sans-sc);

  font-size: 0.9375rem;
  font-weight: 500;
  text-transform: uppercase;

  @media screen and (min-width: 764px) {
    font-size: 2.5rem;
  }
`;

const EventDate = styled.p`
  font-size: 0.625rem;
  font-weight: 500;

  @media screen and (min-width: 764px) {
    font-size: 1.875rem;
  }
`;

const FindOutMoreButton = styled(RedButton)`
  padding: 0.3rem 0.5rem;

  @media screen and (min-width: 764px) {
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

  @media screen and (min-width: 764px) {
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
    fill: ${({ $isLit }) => ($isLit ? "#ED1C24" : "white")};
  }

  @media screen and (min-width: 764px) {
    &::before {
      height: 3px;
    }
  }
`;

const Indicator = styled.div`
  width: 0.86038rem;
  height: 1.06881rem;

  @media screen and (min-width: 764px) {
    width: 2.15663rem;
    height: 2.67906rem;
  }
`;

const EventCardComponent = ({
  title,
  location,
  date,
  upcoming,
}: {
  title: string;
  location: string;
  date: string;
  upcoming?: string;
}) => (
  <EventCard>
    <Upcoming>{upcoming ? upcoming : "-"}</Upcoming>
    <Title>{title}</Title>
    <EventLocation>{location}</EventLocation>
    <Flex $row $alignItems="center" $justifyContent="space-between">
      <EventDate>{date}</EventDate>
      <FindOutMoreButton>Find out more</FindOutMoreButton>
    </Flex>
  </EventCard>
);

export const WhereToMeet = () => {
  const [ref, emblaApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section>
      <PaddedContainer>
        <Flex $mobileGap="2.44rem" $desktopGap="6.25rem">
          <Heading>Where to meet us</Heading>
          <Embla ref={ref}>
            <Flex
              $row
              $alignItems="center"
              $mobileGap="1.28rem"
              $desktopGap="4.36rem"
            >
              <EventCardComponent
                upcoming="upcoming event"
                title="SIGMA Europe"
                location="MALTA, MFCC"
                date="13-17 Nov 2023"
              />
              <EventCardComponent
                title="AW"
                location="THAILAND, BANGKOK"
                date="07-08 Dec 2023"
              />
              <EventCardComponent
                title="Sigma Eurasia"
                location="UAE, Dubai"
                date="13-16 Mar 2024"
              />
            </Flex>
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
