"use client";

import {
  BurgerButton,
  BurgerMenu,
  ButtonContainer,
  ButtonLanguages,
  HeaderContainer,
  HeaderStyled,
  LogoButton,
} from "../styles/Header.styled";
import LogoIcon from "/public/logo.svg";
import BurgerIcon from "/public/burger.svg";
import GlobeIcon from "/public/globe.svg";
import { Nav } from "../styles/Nav.styled";
import { Button } from "../styles/Button.styled";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderStyled>
      <HeaderContainer>
        <LogoButton>
          <LogoIcon />
          <p>PepperPartners</p>
        </LogoButton>
        <Nav>
          <ul>
            <li>
              <Link href="/advertising">For advertisers</Link>
            </li>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <button>
                <GlobeIcon />
              </button>
            </li>
          </ul>
        </Nav>
        <ButtonContainer>
          <Button $primary={true}>Login</Button>
          <Button>Sign Up</Button>
        </ButtonContainer>
        <BurgerButton onClick={() => setIsOpen((prev) => !prev)}>
          <BurgerIcon />
        </BurgerButton>
        <BurgerMenu $isOpen={isOpen}>
          <ul>
            <li>
              <Link href="/advertising">For advertisers</Link>
            </li>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          <div>
            <ButtonLanguages>English</ButtonLanguages>
            <ButtonLanguages>Russian</ButtonLanguages>
            <ButtonLanguages>
              Ukranian <GlobeIcon />
            </ButtonLanguages>
          </div>
        </BurgerMenu>
      </HeaderContainer>
    </HeaderStyled>
  );
};
