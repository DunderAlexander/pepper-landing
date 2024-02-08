import styled from "styled-components";
import { ShadowCard } from "../styles/ShadowCard.styled";
import Image from "next/image";
import { Flex } from "../styles/Container.styled";
import LinkedInIcon from "/public/linkedin.svg";
import MailIcon from "/public/mail.svg";
import { Description } from "../styles/Description.styled";

const PerformanceTeamCardStyled = styled(ShadowCard)`
  display: flex;
  flex: 0 0 100%;
  min-width: 0;
  flex-direction: column;
  gap: 1.75rem;

  @media screen and (min-width: 764px) {
    gap: 2.38rem;
  }
`;

const LogoBoxSocial = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.19613rem;
  height: 1.10413rem;

  @media screen and (min-width: 764px) {
    width: 1.625rem;
    height: 1.5rem;
  }
`;

const LogoBoxMail = styled(LogoBoxSocial)`
  width: 1.51813rem;
  height: 1.10413rem;

  @media screen and (min-width: 764px) {
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
  font-size: 0.9375rem;
  font-weight: 700;
  @media screen and (min-width: 764px) {
    font-size: 2.5rem;
  }
`;

const Title = styled(Name)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 764px) {
    font-size: 1.875rem;
  }
`;

export const PerformanceTeamCard = ({
  photo,
  title,
  name,
  description,
  email,
  linkedIn,
}) => {
  return (
    <PerformanceTeamCardStyled>
      <TeamPic>
        <Image src={photo} alt={name} fill={true} />
      </TeamPic>
      <Title>
        <p>{title}</p>
        <Flex $row $alignItems="center" $mobileGap="0.69rem">
          <LogoBoxSocial href={linkedIn}>
            <LinkedInIcon />
          </LogoBoxSocial>
          <LogoBoxMail href={`mailto:${email}`}>
            <MailIcon />
          </LogoBoxMail>
        </Flex>
      </Title>
      <Name>{name}</Name>
      <Description $fontSizeMobile="0.625rem" $fontSizeDesktop="1.25rem">
        {description}
      </Description>
    </PerformanceTeamCardStyled>
  );
};
