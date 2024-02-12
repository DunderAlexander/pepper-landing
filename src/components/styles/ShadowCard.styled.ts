import { device } from "@/src/lib/mediaQueries";
import styled from "styled-components";

export const ShadowCard = styled.div`
  box-shadow: 0px -19px 39.2px 0px rgba(255, 2, 0, 0.5);
  border-radius: 1.25rem;
  padding: 1.5rem;

  @media ${device.md} {
    padding: 5rem 4rem;
  }
`;
