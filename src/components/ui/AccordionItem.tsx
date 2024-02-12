import * as Accordion from "@radix-ui/react-accordion";
import styled from "styled-components";

import Arrow from "/public/arrow-accordion.svg";
import { useTranslation } from "react-i18next";
import { device } from "@/src/lib/mediaQueries";

const ItemStyled = styled(Accordion.Item)`
  display: flex;
  flex-direction: column;
  gap: 1.19rem;

  @media ${device.md} {
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
  text-align: left;
  color: white;
  font-size: 0.9375rem;
  font-weight: 500;
  text-transform: uppercase;

  &[data-state="open"] > svg {
    transform: rotate(180deg);
  }

  @media ${device.md} {
    font-size: 1.875rem;
  }
`;

const ContentStyled = styled(Accordion.Content)`
  font-family: var(--font-encode-sans-sc);
  font-size: 0.625rem;
  font-weight: 500;

  @media ${device.md} {
    padding-top: 2.95rem;
    font-family: var(--font-encode-sans);
    font-size: 1.25rem;
  }
`;

const AccArrow = styled(Arrow)`
  transition: transform 200ms cubic-bezier(0.87, 0, 0.13, 1);
  width: 1rem;
  height: 1rem;

  @media ${device.md} {
    width: 1.77056rem;
    height: 1.77056rem;
  }
`;

export const AccordionItem = ({ title, text }) => {
  const { t } = useTranslation();
  return (
    <ItemStyled value={title}>
      <Accordion.Header>
        <TriggerStyled>
          {t(title)}
          <AccArrow />
        </TriggerStyled>
      </Accordion.Header>
      <ContentStyled>{t(text)}</ContentStyled>
    </ItemStyled>
  );
};
