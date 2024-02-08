import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 764px) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    gap: 7rem;
  }
`;

export const Embla = styled.div`
  overflow: hidden;
  padding: 40px 10px;
  margin: -40px -10px;
`;
