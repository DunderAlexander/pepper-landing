import styled from "styled-components";
import { Container } from "./Container.styled";
import { device } from "@/src/lib/mediaQueries";
import { Blob } from "./Blob.styled";

export const FooterStyled = styled.footer`
  position: relative;
  overflow: hidden;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 3.44rem;
  @media ${device.md} {
    gap: 6.19rem;
  }
`;

export const PrivacyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;

  p {
    color: var(--White, #fff);
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    max-width: 13.3125rem;
  }

  span:first-child {
    font-weight: 700;
    font-size: 0.625rem;
    /* order: 1; */
  }
  span:last-child {
    font-size: 0.625rem;
    /* order: 2; */
  }
  @media ${device.md} {
    gap: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    p {
      max-width: max-content;
      color: var(--White, #fff);
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    span:first-child {
      font-weight: 600;
      font-size: 1.32775rem;
      /* order: 2; */
    }
    span:last-child {
      font-weight: 600;
      font-size: 1.32775rem;
      /* order: 1; */
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
  @media ${device.md} {
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

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    gap: 0;
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  @media ${device.md} {
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

  @media ${device.md} {
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

  @media ${device.md} {
    display: none;
  }
`;

export const Contact = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: normal;
  h2 {
    color: var(--White, #fff);
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: normal;
  }

  a {
    display: block;
    font-size: 0.625rem;
  }

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  @media ${device.md} {
    h2 {
      color: var(--White, #fff);
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
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

export const FooterBlob = styled(Blob)`
  top: 50%;
`;
