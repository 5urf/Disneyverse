import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import Character from "../components/Character";
import SkeletonCharacter from "../components/skeletons/SkeletonCharacter";
import useGetDisneyCharacterDetail from "../hooks/useGetDisneyCharacterDetail";

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Detail = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const characterId = id || state.id;

  const { data: characterData, isLoading } =
    useGetDisneyCharacterDetail(characterId);

  if (isLoading || !characterData) return <SkeletonCharacter />;

  return (
    <DetailContainer>
      <Character character={characterData} />
    </DetailContainer>
  );
};

export default Detail;
