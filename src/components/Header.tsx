import { useMatch, useNavigate } from "react-router";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const HeaderTxtWrapper = styled.button<{ $isDetail: boolean }>`
  background: none;
  border: none;
  padding: 0;
  cursor: ${({ $isDetail }) => ($isDetail ? "pointer" : "default")};
`;

const HeaderTxt = styled.p`
  text-shadow: 0.4rem 0.4rem 0.6rem rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.textColor};
  font-weight: 600;
  font-size: 3.6rem;
`;

const PreviousBtn = styled.button`
  position: absolute;
  left: 20px;
  background: none;
  padding: 1rem;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  font-size: 2.6rem;
  font-weight: 500;
  text-shadow: 0.4rem 0.4rem 0.6rem rgba(0, 0, 0, 0.5);

  transition: color 0.15s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Header = () => {
  const navigation = useNavigate();
  const detailMatch = useMatch("character/:id");
  const isDetail = Boolean(detailMatch);
  const onPrevious = () => isDetail && navigation("/");

  return (
    <StyledHeader>
      {detailMatch && <PreviousBtn onClick={onPrevious}>←</PreviousBtn>}
      <HeaderTxtWrapper $isDetail={isDetail} onClick={onPrevious}>
        <HeaderTxt>Disneyverse</HeaderTxt>
      </HeaderTxtWrapper>
    </StyledHeader>
  );
};

export default Header;
