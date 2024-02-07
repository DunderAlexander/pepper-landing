import styled from "styled-components";
import BlankIcon from "/public/blank-pepper.svg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 6rem;

  @media screen and (min-width: 764px) {
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

  @media screen and (min-width: 764px) {
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
  width: 1.23794rem;
  height: 1.53781rem;

  @media screen and (min-width: 764px) {
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
        <h2>{title}</h2>
        <p>{description}</p>
      </RoadMapText>
    </Grid>
  );
};
