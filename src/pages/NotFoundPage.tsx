import { Link } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
`;

const ErrorCode = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const Message = styled.p`
  margin: 0;
  font-size: 24px;
  color: "#666";
`;

const HomeBtn = styled(Link)`
  padding: 12px 24px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: ${({ theme }) => theme.accentColor};
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.bgColor};
  }
`;

const StyledImg = styled.img``;

const NotFoundPage = () => {
  return (
    <Container>
      <StyledImg src='https://secure.cdn3.wdpromedia.com/media/pep/live/media/site/img/content/error/2311e7-stitch.jpg' />
      <ErrorCode>404</ErrorCode>
      <Message>페이지를 찾을 수 없어요!</Message>
      <HomeBtn to='/'>홈으로 돌아가기</HomeBtn>
    </Container>
  );
};

export default NotFoundPage;
