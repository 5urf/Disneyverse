import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const HeaderTxtWrapper = styled.button<{ isDetail: boolean }>`
  background: none;
  border: none;
  padding: 0;
  cursor: ${(props) => (props.isDetail ? "pointer" : "default")};
`;

const HeaderTxt = styled.p`
  text-shadow: 0.4rem 0.4rem 0.6rem rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.textColor};
  font-weight: 600;
  font-size: 3.6rem;
`;

const PreviousBtn = styled.button`
  position: absolute;
  left: 20px;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  font-size: 2.6rem;
  font-weight: 500;
  text-shadow: 0.4rem 0.4rem 0.6rem rgba(0, 0, 0, 0.5);
`;

const Header = () => {
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const [isDetail, setIsDetail] = useState(false);

  const onPrevious = () => isDetail && navigation("/");

  useEffect(() => {
    if (pathname.includes("character")) setIsDetail(true);
    else setIsDetail(false);
  }, [pathname]);

  return (
    <StyledHeader>
      {isDetail && <PreviousBtn onClick={onPrevious}>←</PreviousBtn>}
      <HeaderTxtWrapper isDetail={isDetail} onClick={onPrevious}>
        <HeaderTxt>Disneyverse</HeaderTxt>
      </HeaderTxtWrapper>
    </StyledHeader>
  );
};

export default Header;
