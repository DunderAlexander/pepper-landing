import styled from "styled-components";

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;

  svg {
    max-width: 2rem;
  }

  /* &:first-child > svg {
    max-width: 2rem;
  }
  &:last-child > svg {
    max-width: 9.2rem; */
  /* } */
  @media screen and (min-width: 764px) {
    svg {
      max-width: initial;
    }
    /* &:last-child > svg {
      max-width: initial;
    }
    &:first-child > svg {
      max-width: 6.5rem;
    } */
    font-size: 2.5rem;
    gap: 4rem;
  }
`;
