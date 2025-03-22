import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const SkeletonCharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const SkeletonImage = styled.div`
  width: 100%;
  max-width: 40rem;
  height: 40rem;
  border-radius: 2rem;
  background: linear-gradient(90deg, #003b5c 25%, #006d8f 50%, #003b5c 75%);
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 1.5s infinite linear;
  object-fit: cover;
`;

const SkeletonName = styled.div`
  width: 30%;
  height: 3.6rem;
  background: linear-gradient(90deg, #003b5c 25%, #006d8f 50%, #003b5c 75%);
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 1.5s infinite linear;
  border-radius: 1rem;
`;

const SkeletonFilms = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SkeletonFilm = styled.li`
  width: 80%;
  height: 1.6rem;
  background: linear-gradient(90deg, #003b5c 25%, #006d8f 50%, #003b5c 75%);
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 1.5s infinite linear;
  border-radius: 1rem;
`;

const SkeletonCharacter = () => {
  return (
    <SkeletonCharacterContainer>
      <SkeletonImage />
      <SkeletonName />
      <SkeletonFilms>
        <SkeletonFilm />
      </SkeletonFilms>
    </SkeletonCharacterContainer>
  );
};

export default SkeletonCharacter;
