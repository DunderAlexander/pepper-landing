import styled from "styled-components";
import { ShadowCard } from "../styles/ShadowCard.styled";
import Image from "next/image";
import { Flex } from "../styles/Container.styled";
import LinkedInIcon from "/public/linkedin.svg";
import MailIcon from "/public/mail.svg";
import { Description } from "../styles/Description.styled";
import { useTranslation } from "react-i18next";
import { device } from "@/src/lib/mediaQueries";

const PerformanceTeamCardStyled = styled(ShadowCard)`
  display: flex;
  flex: 0 0 100%;
  min-width: 0;
  flex-direction: column;
  gap: 1.75rem;
  padding: 1.7rem;

  @media ${device.md} {
    padding: 2.3rem;
    gap: 2.38rem;
    justify-content: space-between;
  }
`;

const LogoBoxSocial = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.19613rem;
  height: 1.10413rem;

  @media ${device.md} {
    width: 1.625rem;
    height: 1.5rem;
  }
`;

const LogoBoxMail = styled(LogoBoxSocial)`
  width: 1.51813rem;
  height: 1.10413rem;

  @media ${device.md} {
    width: 2.0625rem;
    height: 1.5rem;
  }
`;

const TeamPic = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 266459 / 333442;
  border-radius: 1.25rem;
  overflow: hidden;
  background: var(--white-10, rgba(255, 255, 255, 0.1));
`;

const Name = styled.h2`
  order: 2;
  font-size: 0.9375rem;
  font-weight: 700;
  @media ${device.md} {
    order: 1;
    font-size: 1.875rem;
    font-weight: 500;
  }
`;

const Title = styled(Name)`
  order: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.md} {
    order: 2;
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

const TeamDescription = styled(Description)`
  order: 3;
  @media ${device.md} {
    font-family: var(--font-encode-sans);
    text-transform: none;
  }
`;

const DeskLogoContainer = styled(Flex)`
  order: 4;
`;

export const PerformanceTeamCard = ({
  photo,
  title,
  name,
  description,
  email,
  linkedIn,
}) => {
  const { t } = useTranslation();
  return (
    <PerformanceTeamCardStyled>
      <TeamPic>
        <Image src={photo} alt={t(name)} fill={true} />
      </TeamPic>
      <Title>
        <p>{title}</p>
        <Flex $row $alignItems="center" $mobileGap="0.69rem" $deskHidden>
          <LogoBoxSocial href={linkedIn}>
            <LinkedInIcon />
          </LogoBoxSocial>
          <LogoBoxMail href={`mailto:${email}`}>
            <MailIcon />
          </LogoBoxMail>
        </Flex>
      </Title>
      <Name>{t(name)}</Name>
      <TeamDescription $fontSizeMobile="0.625rem" $fontSizeDesktop="1.25rem">
        {t(description)}
      </TeamDescription>
      <DeskLogoContainer
        $row
        $alignItems="center"
        $mobileGap="0.69rem"
        $mobHidden
      >
        <LogoBoxSocial href={linkedIn}>
          <LinkedInIcon />
        </LogoBoxSocial>
        <LogoBoxMail href={`mailto:${email}`}>
          <MailIcon />
        </LogoBoxMail>
      </DeskLogoContainer>
    </PerformanceTeamCardStyled>
  );
};
