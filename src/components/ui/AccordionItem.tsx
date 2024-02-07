import * as Accordion from "@radix-ui/react-accordion";
import styled from "styled-components";

import Arrow from "/public/arrow-accordion.svg";

const ItemStyled = styled(Accordion.Item)`
  display: flex;
  flex-direction: column;
  gap: 1.19rem;

  @media screen and (min-width: 764px) {
    gap: 0;
    padding-block: 2.95rem;
    &:not(:last-child) {
      border-bottom: 1.18px solid rgba(255, 255, 255, 0.1);
    }
  }
`;

const TriggerStyled = styled(Accordion.Trigger)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 0.9375rem;
  font-weight: 500;
  text-transform: uppercase;

  &[data-state="open"] > svg {
    transform: rotate(180deg);
  }

  @media screen and (min-width: 764px) {
    font-size: 1.875rem;
  }
`;

const ContentStyled = styled(Accordion.Content)`
  font-family: var(--font-encode-sans-sc);
  font-size: 0.625rem;
  font-weight: 500;

  @media screen and (min-width: 764px) {
    padding-top: 2.95rem;
    font-family: var(--font-encode-sans);
    font-size: 1.25rem;
  }
`;

const AccArrow = styled(Arrow)`
  transition: transform 200ms cubic-bezier(0.87, 0, 0.13, 1);
  width: 1rem;
  height: 1rem;

  @media screen and (min-width: 764px) {
    width: 1.77056rem;
    height: 1.77056rem;
  }
`;

export const AccordionItem = ({ title, text }) => {
  return (
    <ItemStyled value={title}>
      <Accordion.Header>
        <TriggerStyled>
          {title}
          <AccArrow />
        </TriggerStyled>
      </Accordion.Header>
      <ContentStyled>{text}</ContentStyled>
    </ItemStyled>
  );
};
