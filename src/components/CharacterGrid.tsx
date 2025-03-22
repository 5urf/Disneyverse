import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import SkeletonCharacterGrid from "./skeletons/SkeletonCharacterGrid";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 2.5rem;
  padding: 2rem;
  justify-items: center;
`;

interface ICharacterGridProps {
  characters: IDisneyCharacter[];
  isLoading: boolean;
}

const CharacterGrid = ({
  characters,
  isLoading,
}: ICharacterGridProps): React.JSX.Element | null => {
  return (
    <CardGrid>
      {isLoading ? (
        <SkeletonCharacterGrid />
      ) : (
        characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))
      )}
    </CardGrid>
  );
};

export default CharacterGrid;
