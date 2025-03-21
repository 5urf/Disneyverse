import { Link } from "react-router";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 2.5rem;
  padding: 2rem;
  justify-items: center;
`;

interface ICharacterGridProps {
  characters: DisneyCharacter[];
}

const CharacterGrid = ({
  characters,
}: ICharacterGridProps): React.JSX.Element | null => {
  return (
    <CardGrid>
      {characters.map((character) => (
        <Link key={character.id} to={`character/${character.id}`}>
          <CharacterCard name={character.name} imageUrl={character.imageUrl} />
        </Link>
      ))}
    </CardGrid>
  );
};

export default CharacterGrid;
