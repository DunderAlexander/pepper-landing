"use client";

import {
  Contact,
  FooterBlob,
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
import { useTranslation } from "react-i18next";
import { Flex, Grid } from "../styles/Container.styled";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterStyled>
      <FooterContainer>
        <MainContainer>
          <InfoContainer>
            {/* <Office>
              <h2>OFFICE</h2>
              <div>
                <p>Address</p>
                <p>82 Amerige St. Poughkeepsie, NY 12603</p>
              </div>
              <div>
                <p>Phone</p>
                <p>+1 848 493 944</p>
              </div>
            </Office> */}
            <Contact>
              <h2>{t("default:Footer_title")}</h2>
              <Grid
                $mobileCols="repeat(2, 1fr)"
                $desktopCols="initial"
                $desktopGap="2.5rem"
              >
                <Flex $mobileGap="0.94rem">
                  <p>{t("default:Footer_item-1")}</p>
                  <a href="mailto:support@pepper.partners">
                    support@pepper.partners
                  </a>
                </Flex>
                <Flex $mobileGap="0.94rem">
                  <p>{t("default:Footer_item-2")}</p>
                  <SocialsContainer>
                    <a href="https://www.linkedin.com/company/pepper-partners/">
                      <LinkedInIcon />
                    </a>
                    <a href="#">
                      <XIcon />
                    </a>
                    <a href="https://t.me/joinchat/UF486GaNNHmEwMbB">
                      <TelegramIcon />
                    </a>
                  </SocialsContainer>
                </Flex>
              </Grid>
            </Contact>
          </InfoContainer>
          <LinksContainer>
            <div>
              <Link href="/">{t("default:Footer_link-1")}</Link>
              <Link href="/partners">{t("default:Footer_link-2")}</Link>
            </div>
            <div>
              {/* <Link href="#">{t("default:Footer_link-3")}</Link> */}
              {/* <Link href="#">{t("default:Footer_link-4")}</Link> */}
            </div>
          </LinksContainer>
        </MainContainer>
        <PrivacyContainer>
          <span>
            <a href="https://lk.pepper.partners/policy-en.pdf">
              {t("default:Footer_item-3")}
            </a>
          </span>
          <span>{t("default:Footer_item-4")}</span>
        </PrivacyContainer>
      </FooterContainer>
      <a href="">
        <FooterBlob />
      </a>
    </FooterStyled>
  );
};
