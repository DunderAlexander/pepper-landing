import * as Accordion from "@radix-ui/react-accordion";
import { FAQContent } from "../../lib/data";
import { AccordionItem } from "./AccordionItem";
import styled from "styled-components";
import { device } from "@/src/lib/mediaQueries";

const RootStyled = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  @media ${device.md} {
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
