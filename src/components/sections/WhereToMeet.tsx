"use client";

import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000; /* Assuming a black background */
  color: #fff; /* Assuming white text */
  padding: 20px;
`;

const EventCard = styled.div`
  background: #333; /* Dark grey background */
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  flex-basis: 45%; /* Adjust based on your layout */
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const EventTitle = styled.h2`
  font-size: 20px;
  color: #f00; /* Red text for the 'upcoming event' section */
`;

const EventLocation = styled.p`
  font-size: 18px;
`;

const EventDate = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const FindOutMoreButton = styled.button`
  background: #f00; /* Red background */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: #e00; /* Darker red on hover */
  }
`;

const EventCardComponent = ({ title, location, date }) => (
  <EventCard>
    <EventTitle>upcoming event</EventTitle>
    <Title>{title}</Title>
    <EventLocation>{location}</EventLocation>
    <EventDate>{date}</EventDate>
    <FindOutMoreButton>Find out more</FindOutMoreButton>
  </EventCard>
);

export const WhereToMeet = () => {
  return (
    <SectionContainer>
      <EventCardComponent
        title="SIGMA Europe"
        location="MALTA, MFCC"
        date="13-17 Nov 2023"
      />
      <EventCardComponent
        title="AW"
        location="THAILAND, BANGKOK"
        date="07-08 Dec 2023"
      />
    </SectionContainer>
  );
};
