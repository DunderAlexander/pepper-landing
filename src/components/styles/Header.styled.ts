import styled from "styled-components";
import { Container } from "./Container.styled";
import { Button } from "./Button.styled";
import { device } from "@/src/lib/mediaQueries";

export const HeaderStyled = styled.header`
  position: relative;
  background-color: black;
  z-index: 2;
  ul {
    display: none;
  }
  @media ${device.md} {
    padding-block: 4rem;
    ul {
      display: flex;
      gap: 1rem;
      align-items: center;
      list-style: none;
    }
  }
  @media screen and (min-width: 1024px) {
    ul {
      gap: 3.33rem;
    }
  }

  display: flex;
  align-items: center;
  padding-block: 1.44rem;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.88rem;

  @media ${device.md} {
    gap: 2rem;
  }
`;

export const BurgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.md} {
    display: none;
  }
`;

export const LogoButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  p {
    color: white;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: -0.015rem;
    font-size: 0.75rem;
  }
  svg {
    width: 1.86181rem;
    height: 2.22756rem;
  }

  @media ${device.md} {
    gap: 0.66rem;
    svg {
      width: 1.9rem;
      height: 2.4rem;
    }
    p {
      font-size: 0.9rem;
      letter-spacing: -0.025rem;
    }
  }

  @media ${device.lg} {
    svg {
      width: 2.31006rem;
      height: 3.3125rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

export const BurgerMenu = styled(Container)<{ $isOpen: boolean }>`
  transform: translateY(${(props) => (props.$isOpen ? "0%" : "-235%")});
  z-index: 1;
  position: absolute;
  transition: all;
  transition-duration: 300ms;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 1.56rem;
  align-items: end;
  padding-top: 1.26rem;
  padding-bottom: 1.84rem;
  color: white;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 1.56rem;
    li {
      width: fit-content;
      text-transform: uppercase;
      font-size: 0.9375rem;
      font-weight: 500;
    }
  }
  div {
    display: flex;
  }
`;

export const ButtonLanguages = styled(Button)`
  background: transparent;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  font-size: 0.625rem;
  font-weight: 500;
  padding: 0.62rem 1rem;
  border-radius: 0;
  margin-left: -1px;
  margin-right: -1px;
  &:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
    margin: 0;
    padding-left: 1.1rem;
  }
  &:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
    margin: 0;
    padding-right: 0.38rem;
  }
  svg {
    width: 17px;
    height: 17px;
  }
`;
