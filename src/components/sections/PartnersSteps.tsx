"use client";

import React from "react";
import { Flex, Grid, PaddedContainer } from "../styles/Container.styled";
import { Heading } from "../styles/Heading.styled";
import Image from "next/image";
import { RedButton } from "../styles/Button.styled";

export const PartnersSteps = () => {
  return (
    <PaddedContainer>
      <Flex $desktopGap="6.25rem" $mobileGap="1.87rem">
        <Heading>How to start</Heading>
        <Grid $mobileCols="1fr" $desktopCols="1fr 1fr 1fr">
          <Flex $mobileGap="1rem" $desktopGap="1.62rem">
            <Image src="/images/steps/1.svg" width={89} height={120} alt="" />
            <h2>Initial Consultation</h2>
            <p>Discuss your specific needs and goals with our team.</p>
          </Flex>
          <Flex $mobileGap="1rem" $desktopGap="1.62rem">
            <Image src="/images/steps/2.svg" width={89} height={120} alt="" />
            <h2>Initial Consultation</h2>
            <p>We create a tailored strategy, aligning with your objectives.</p>
          </Flex>
          <Flex $mobileGap="1rem" $desktopGap="1.62rem">
            <Image src="/images/steps/3.svg" width={89} height={120} alt="" />
            <h2>Initial Consultation</h2>
            <p>
              Launch, continuous monitoring and optimisation for peak
              performance.
            </p>
          </Flex>
        </Grid>
        <RedButton>Become a partner</RedButton>
      </Flex>
    </PaddedContainer>
  );
};
