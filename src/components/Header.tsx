import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor};
  font-weight: 600;
  font-size: 3.6rem;
  padding: 2rem 0;
  text-shadow: 0.4rem 0.4rem 0.6rem rgba(0, 0, 0, 0.5);
`;

const Header = () => {
  return <StyledHeader>Disneyverse</StyledHeader>;
};

export default Header;
