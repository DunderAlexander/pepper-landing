"use client";

import {
  Contact,
  FooterContainer,
  FooterStyled,
  InfoContainer,
  LinksContainer,
  MainContainer,
  Office,
  PrivacyContainer,
  SocialsContainer,
} from "../styles/Footer.styled";

import LinkedInIcon from "/public/linkedin.svg";
import XIcon from "/public/x.svg";
import TelegramIcon from "/public/telegram.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <MainContainer>
          <InfoContainer>
            <Office>
              <h2>OFFICE</h2>
              <div>
                <p>Address</p>
                <p>82 Amerige St. Poughkeepsie, NY 12603</p>
              </div>
              <div>
                <p>Phone</p>
                <p>+1 848 493 944</p>
              </div>
            </Office>
            <Contact>
              <h2>CONTACT</h2>
              <div>
                <p>Email</p>
                <a href="mailto:support@pepper.partners">
                  support@pepper.partners
                </a>
              </div>
              <div>
                <h4>Socials</h4>
                <SocialsContainer>
                  <LinkedInIcon />
                  <XIcon />
                  <TelegramIcon />
                </SocialsContainer>
              </div>
            </Contact>
          </InfoContainer>
          <LinksContainer>
            <div>
              <Link href="#">For affiliates</Link>
              <Link href="#">For advertisers</Link>
            </div>
            <div>
              <Link href="#">About us</Link>
              <Link href="#">Blog</Link>
            </div>
          </LinksContainer>
        </MainContainer>
        <PrivacyContainer>
          <p>
            Copyright © 2023 Pepper Partners. All rights reserved and protected
            by law
          </p>
          <p>Privacy Policy | Terms & Conditions</p>
        </PrivacyContainer>
      </FooterContainer>
    </FooterStyled>
  );
};
