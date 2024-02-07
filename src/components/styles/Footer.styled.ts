import styled from "styled-components";
import { Container } from "./Container.styled";

export const FooterStyled = styled.footer``;

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 3.44rem;
  @media screen and (min-width: 764px) {
    gap: 6.19rem;
  }
`;

export const PrivacyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    color: var(--White, #fff);
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    max-width: 13.3125rem;
  }

  p:first-child {
    order: 1;
  }
  p:last-child {
    order: 2;
  }
  @media screen and (min-width: 764px) {
    gap: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    p {
      max-width: max-content;
      color: var(--White, #fff);
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    p:first-child {
      order: 2;
    }
    p:last-child {
      order: 1;
    }
  }
`;

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.94rem;
  }
  a {
    color: white;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  @media screen and (min-width: 764px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 11.94rem;
    & a {
      color: var(--White, #fff);
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 764px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    gap: 0;
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  @media screen and (min-width: 764px) {
    display: flex;
    flex-direction: row;
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.44rem;
  svg {
    width: 1rem;
    height: 1rem;
  }

  @media screen and (min-width: 764px) {
    svg {
      width: 1.4375rem;
      height: 1.5rem;
    }
  }
`;

export const Office = styled.div`
  h2 {
    color: var(--White, #fff);
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
  p {
    color: var(--White, #fff);
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.31rem;
  }
  & > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 0.88rem;
  }

  @media screen and (min-width: 764px) {
    display: none;
  }
`;

export const Contact = styled.div`
  h2 {
    color: var(--White, #fff);
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
  p,
  a {
    color: var(--White, #fff);
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  h4 {
    color: white;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.31rem;
  }
  & > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 0.88rem;
  }
  @media screen and (min-width: 764px) {
    h2 {
      color: var(--White, #fff);
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-transform: uppercase;
    }
    p,
    a {
      color: var(--White, #fff);
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    h4 {
      color: var(--White, #fff);
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    gap: 2.5rem;
  }
`;
