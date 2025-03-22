import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

interface ISkeletonWrapperProps {
  wrapperWidth?: string;
  wrapperHeight?: string;
}

const SkeletonWrapper = styled.div<ISkeletonWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.wrapperWidth || "100%"};
  height: ${(props) => props.wrapperHeight || "auto"};
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
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 1.5s infinite linear;
  margin: 0.5rem 0;
`;

interface ISkeletonProps {
  wrapperWidth?: string;
  wrapperHeight?: string;
}

const SkeletonCharacterCard = ({
  wrapperWidth = "26rem",
  wrapperHeight = "30rem",
}: ISkeletonProps) => (
  <SkeletonWrapper wrapperWidth={wrapperWidth} wrapperHeight={wrapperHeight}>
    <SkeletonContent width='100%' height='26rem' $borderRadius='50%' />
    <SkeletonContent width={"60%"} height={"1.4rem"} $borderRadius={"0.5rem"} />
  </SkeletonWrapper>
);

export default SkeletonCharacterCard;
