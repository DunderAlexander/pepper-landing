import * as Accordion from "@radix-ui/react-accordion";
import { FAQContent } from "../../lib/data";
import { AccordionItem } from "./AccordionItem";
import styled from "styled-components";

const RootStyled = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  @media screen and (min-width: 764px) {
    gap: 0;
  }
`;

export const FAQAccordion = () => {
  return (
    <RootStyled type="multiple">
      {FAQContent.map((item, idx) => (
        <AccordionItem key={idx} {...item} />
      ))}
    </RootStyled>
  );
};
