import { Link } from "react-router";
import styled from "styled-components";
import useValidImage from "../hooks/useImageValidation";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border-radius: 1.5rem;
  max-width: 26rem;

  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out,
    color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    background-color: ${({ theme }) => theme.hoverColor};
    box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.2);
    p {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 26rem;
  padding: 2rem;
  object-fit: cover;
  border-radius: 50%;
  aspect-ratio: 1;
`;

const CardName = styled.p`
  margin-bottom: 2rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
`;

interface ICharacterCardProps {
  character: IDisneyCharacter;
}

const CharacterCard = ({
  character,
}: ICharacterCardProps): React.JSX.Element | null => {
  const { id, imageUrl, name } = character;
  const { data: isValid } = useValidImage(imageUrl);

  if (!isValid) return null;

  return (
    <Link key={id} to={`character/${id}`} state={{ id }}>
      <Card>
        <CardImage src={imageUrl} alt={name} />
        <CardName>{name}</CardName>
      </Card>
    </Link>
  );
};

export default CharacterCard;
