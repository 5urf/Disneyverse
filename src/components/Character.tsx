import styled from "styled-components";

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const CharacterImg = styled.img`
  width: 100%;
  height: 40rem;
  object-fit: cover;
  border-radius: 2rem;
`;

const CharacterAnchor = styled.a`
  transition: color 0.15s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.accentColor};
    transition: color 0.15s ease-in-out;
    text-decoration: underline;
  }
`;

const CharacterName = styled.h3`
  font-size: 3.6rem;
  font-weight: 600;
`;

const CharacterFilms = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const CharacterFilm = styled.li`
  font-size: 1.6rem;

  transition: color 0.2s ease, text-decoration 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.cardHoverColor};
  }
`;

interface ICharacterProps {
  character: IDisneyCharacterDetail;
}

const Character = ({
  character: { name, imageUrl, films, sourceUrl },
}: ICharacterProps) => {
  return (
    <CharacterContainer>
      <CharacterImg src={imageUrl} alt={name} />
      <CharacterAnchor href={sourceUrl} target='_blank'>
        <CharacterName>{name}</CharacterName>
      </CharacterAnchor>
      <CharacterFilms>
        {films.map((film) => (
          <CharacterFilm>{film}</CharacterFilm>
        ))}
      </CharacterFilms>
    </CharacterContainer>
  );
};

export default Character;
