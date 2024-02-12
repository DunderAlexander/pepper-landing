import { device } from "@/src/lib/mediaQueries";
import styled from "styled-components";

export const Heading = styled.h2<{
  $maxWidth?: string;
  $deskMaxWidth?: string;
}>`
  font-family: var(--font-encode-sans-sc-ext);
  font-stretch: expanded;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-wrap: balance;
  /* text-transform: capitalize; */
  max-width: ${(props) => props.$maxWidth};

  @media ${device.md} {
    font-size: 5rem;
    max-width: ${(props) => props.$deskMaxWidth};
  }
`;
