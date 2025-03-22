import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 26rem;
  height: 30rem;
  padding: 2rem;
`;

interface ISkeletonContent {
  width?: string;
  height?: string;
  $borderRadius?: string;
}

const SkeletonContent = styled.div<ISkeletonContent>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "1rem"};
  border-radius: ${(props) => props.$borderRadius};
  background: linear-gradient(90deg, #003b5c 25%, #006d8f 50%, #003b5c 75%);
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 1.5s infinite linear;
  margin: 0.5rem 0;
`;

const SkeletonCharacterCard = () => (
  <SkeletonWrapper>
    <SkeletonContent width='100%' height='26rem' $borderRadius='50%' />
    <SkeletonContent width='60%' height='1.4rem' $borderRadius='0.5rem' />
  </SkeletonWrapper>
);

export default SkeletonCharacterCard;
