import { device } from "@/src/lib/mediaQueries";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  gap: 3rem;
  @media ${device.md} {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  @media ${device.lg} {
    gap: 5rem;
  }
  @media ${device.xl} {
    gap: 7rem;
  }
`;

export const Embla = styled.div`
  overflow: hidden;
  padding: 40px 10px;
  margin: -40px -10px;
`;
