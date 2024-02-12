"use client";

import React from "react";
import { Flex, Grid, PaddedContainer } from "../styles/Container.styled";
import { Heading } from "../styles/Heading.styled";
import Image from "next/image";
import { RedButton } from "../styles/Button.styled";
import { useTranslation } from "react-i18next";

export const PartnersSteps = () => {
  const { t } = useTranslation();
  return (
    <PaddedContainer>
      <Flex $desktopGap="6.25rem" $mobileGap="1.87rem">
        <Heading>{t("Start_title")}</Heading>
        <Grid $mobileCols="1fr" $desktopCols="1fr 1fr 1fr">
          <Flex $mobileGap="1rem" $desktopGap="1.62rem">
            <Image src="/images/steps/1.svg" width={89} height={120} alt="" />
            <h2>{t("Start_subtitle-1")}</h2>
            <p>{t("Start_text-1")}</p>
          </Flex>
          <Flex $mobileGap="1rem" $desktopGap="1.62rem">
            <Image src="/images/steps/2.svg" width={89} height={120} alt="" />
            <h2>{t("Start_subtitle-2")}</h2>
            <p>{t("Start_text-2")}</p>
          </Flex>
          <Flex $mobileGap="1rem" $desktopGap="1.62rem">
            <Image src="/images/steps/3.svg" width={89} height={120} alt="" />
            <h2>{t("Start_subtitle-3")}</h2>
            <p>{t("Start_text-3")}</p>
          </Flex>
        </Grid>
        <RedButton href="https://lk.pepper.partners/register">
          {t("Start_button")}
        </RedButton>
      </Flex>
    </PaddedContainer>
  );
};
