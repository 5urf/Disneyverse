import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import Character from "../components/Character";
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
  console.log("📢[Detail.tsx:17]: state: ", state);
  console.log("📢[Detail.tsx:16]: id: ", id);
  const { data: characterData, isLoading } = useGetDisneyCharacterDetail(
    id ?? state.id
  );

  //FIXME - 임시
  if (isLoading || !characterData) return <div>Loading</div>;

  return (
    <DetailContainer>
      <Character character={characterData} />
    </DetailContainer>
  );
};

export default Detail;
