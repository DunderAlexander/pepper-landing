import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.2rem 1.4rem;
  font-size: 0.625rem;
  background: ${(props) => (props.$primary ? "black" : "white")};
  border-radius: 0.3125rem;
  border: 1.331px solid #fff;
  color: ${(props) => (props.$primary ? "white" : "black")};
  @media screen and (min-width: 400) {
    padding: 0.2rem 1.75rem;
  }
  @media screen and (min-width: 764px) {
    font-size: 1.25rem;
    padding: 0.5rem 3.74rem;
  }
`;

export const RedButton = styled(Button)`
  background-color: #ed1c24;
  color: white;
  width: fit-content;
  border: 1px solid #ed1c24;
  padding: 0.75rem 2rem;

  @media screen and (min-width: 764px) {
    font-size: 1.875rem;
    padding: 1.5rem 3.75rem;
    border-radius: 0.625rem;
  }
`;
