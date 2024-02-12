import styled from "styled-components";
import BlankIcon from "/public/blank-pepper.svg";
import { useTranslation } from "react-i18next";
import { device } from "@/src/lib/mediaQueries";

const Grid = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 6rem;

  @media ${device.lg} {
    gap: 14.88rem;
  }
`;

const EmptyIconContainer = styled.div`
  position: relative;
`;

const FiiledIconContainer = styled.div`
  top: 0;
  position: absolute;
`;

const RoadMapText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  h2 {
    font-family: var(--font-encode-sans-sc);
    font-size: 0.9375rem;
    font-weight: 700;
  }
  p {
    font-size: 0.625rem;
    font-weight: 500;
  }
  @media ${device.md} {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.385rem;
    }
  }

  @media ${device.lg} {
    gap: 1.91rem;
    font-size: 5rem;
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.875rem;
    }
  }
`;

const FilledIcon = styled(BlankIcon)`
  fill: white;
  color: white;
  width: 1.23794rem;
  height: 1.53781rem;

  @media ${device.md} {
    width: 3.5rem;
    height: 4.5rem;
  }

  @media ${device.lg} {
    width: 4.5rem;
    height: 5.5rem;
  }
`;

const EmptyIcon = styled(FilledIcon)`
  opacity: 20%;
`;

export const RoadMapBlock = ({
  title,
  description,
  starCount,
}: {
  title: string;
  description: string;
  starCount: number;
}) => {
  const { t } = useTranslation();
  const filledIcons = Array.from({ length: starCount }, (_, index) => (
    <FilledIcon key={index} />
  ));
  return (
    <Grid>
      <EmptyIconContainer>
        <EmptyIcon />
        <EmptyIcon />
        <EmptyIcon />
        <EmptyIcon />
        <FiiledIconContainer>{filledIcons}</FiiledIconContainer>
      </EmptyIconContainer>
      <RoadMapText>
        <h2>{t(title)}</h2>
        <p>{t(description)}</p>
      </RoadMapText>
    </Grid>
  );
};
