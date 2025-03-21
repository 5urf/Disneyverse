import styled from "styled-components";
import CharacterGrid from "../components/CharacterGrid";
import useGetDisneyCharacters from "../hooks/useGetDisneyCharacters";

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Home = () => {
  const { data: disneyCharacters, isLoading } = useGetDisneyCharacters();
  //NOTE - 임시
  const filteredDisneyCharacters = disneyCharacters
    ?.filter((characters) => characters.imageUrl)
    .slice(0, 50);

  //NOTE - 스켈레톤 UI 적용할 것
  if (isLoading || !filteredDisneyCharacters) return <p>Loading...</p>;

  return (
    <HomeContainer>
      <CharacterGrid characters={filteredDisneyCharacters} />
    </HomeContainer>
  );
};

export default Home;
