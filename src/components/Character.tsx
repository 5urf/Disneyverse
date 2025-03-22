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
  max-width: 40rem;
  height: 40rem;
  object-fit: cover;
  border-radius: 2rem;
`;

const CharacterAnchor = styled.a`
  transition: color 0.15s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accentColor};
    transition: color 0.15s ease-in-out;
    text-decoration: underline;
  }
`;

const CharacterName = styled.h3`
  font-size: 3.6rem;
  font-weight: 500;
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

  transition: color 0.2s ease, text-decoration 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.hoverColor};
  }
`;

const StyledHr = styled.hr`
  width: 100%;
  margin: 0;
`;

const CharacterAppearances = styled.h4`
  font-size: 2.6rem;
  font-weight: 400;
`;

interface ICharacterProps {
  character: IDisneyCharacterDetail;
}

const Character = ({
  character: { name, imageUrl, films, sourceUrl },
}: ICharacterProps) => {
  const getAppearanceLabel = (length: number) => {
    return length > 1 ? "Appearances" : "Appearance";
  };
  return (
    <CharacterContainer>
      <CharacterImg src={imageUrl} alt={name} />
      <CharacterAnchor href={sourceUrl} target='_blank'>
        <CharacterName>{name}</CharacterName>
      </CharacterAnchor>
      <StyledHr />
      <CharacterAppearances>
        {getAppearanceLabel(films.length)}
      </CharacterAppearances>
      <CharacterFilms>
        {films.map((film, index) => (
          <CharacterFilm key={index}>{film}</CharacterFilm>
        ))}
      </CharacterFilms>
    </CharacterContainer>
  );
};

export default Character;
