import styled from "styled-components";
import { theme } from "../../themeVariables"

import logo from "../../assets/image/logo.svg";

import Button from "../Button/Button";

const HeaderContainer = styled.div`
  background-color: ${theme.main};
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  align-items: center;

  font-family: "Roboto", sans-serif;
  color: ${theme.fontColorDark};
`;

const Box = styled.div`
  display: flex;
`;
const Logo = styled.div``;
const ImgAnalystics = styled.img``;

const NavBar = styled.nav``;
const NavList = styled.ol`
  display: flex;
  margin-left: 30px;
`;
const NavItem = styled.li`
  margin: 10px;
  border-bottom: 2px solid ${theme.borderButtonDark} trasnparent;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid ${theme.borderButtonDark};
  }
`;

const SignBox = styled.div``;

export default function Header() {
  return (
    <HeaderContainer>
      <Box>
        <Logo>
          <ImgAnalystics src={logo} />
        </Logo>

        <NavBar>
          <NavList>
            <NavItem>Products</NavItem>
            <NavItem>Pricing</NavItem>
            <NavItem>FAQ</NavItem>
            <NavItem>Blog</NavItem>
          </NavList>
        </NavBar>
      </Box>

      <SignBox>
        <Button dark text="Sign In" />
        <Button dark text="Sign Up" />
      </SignBox>
    </HeaderContainer>
  );
}
