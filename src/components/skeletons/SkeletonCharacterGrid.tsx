import SkeletonCharacterCard from "./SkeletonCharacterCard";

interface ISkeletonCharacterGridProps {
  length?: number;
}

const SkeletonCharacterGrid = ({
  length = 20,
}: ISkeletonCharacterGridProps) => {
  return Array.from({ length }).map((_, index) => (
    <SkeletonCharacterCard key={index} />
  ));
};

export default SkeletonCharacterGrid;
