import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import LanguageSelector from "./LanguageSelector";
import styled from "@emotion/styled";

import avatar from "../assest/image/Avatar.png";
import ZoffieLogo from "../assest/icons/Zoffer.svg";

// const NavBarContainer = styled.div`
//   width: 100%;
//   left: 0;
//   right: 0;
//   z-index: 9999;
//   border-bottom: 1px solid transparent;
//   padding: 5px;

//   ${({ useLinearGradient }) => (useLinearGradient? `
//     background: linear-gradient(321.54deg, #3afdc6 8.03%, #9727f5 105.78%), #0000001A;
//   ` : `
//     background-color: #0000001A;
//   `)}
// `;
const NavBarContainer = styled.div`
  width: 100%;
  left: 0;
  right: 0;
  z-index: 9999;
  border-bottom: 1px solid transparent;
  padding: 5px;
  background-color: #0000001A;
`;
const NavBarContent = styled.div`
  margin: 0 auto;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 640px) {
  }
`;

// const NavBarContent = styled.div`
//   max-width: 90rem;
//   margin: 0 auto;
//   ${'' /* padding: 0.5rem; */}
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   @media (min-width: 640px) {
//   }
// `;

const MobileMenuButton = styled.button`
  background-image: linear-gradient(to bottom right, #8b5cf6, #38bdf8);
  border-radius: 0.375rem;
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  &:hover {
    color: #ffffff;
    background-image: linear-gradient(to bottom right, #8b5cf6, #38bdf8);
  }
  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px #3b82f6;
  }
`;

const NavMenu = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 1.25rem;
  }
`;

const NavMenuItem = styled.p(({ isActive }) => ({
  cursor: "pointer",
  fontSize: "1.125rem",
  fontFamily: "Inter",
  fontWeight: "600",
  borderRadius: "20px",
  position: "relative",
  color: "#fff",
  ...(isActive
    ? {
        "::after": {
          content: '""',
          borderBottomWidth: "6px",
          borderStyle: "solid",
          position: "absolute",
          bottom: "-22px",
          width: "100%",
          left: 0,
          borderRadius: "10px",
          borderColor: "#B9FA34",
        },
      }
    : {
        borderColor: "transparent",
      }),
}));

const MobileMenuContainer = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuContent = styled.div`
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: scale(${({ open }) => (open ? 1 : 0.95)});
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  z-index: 9;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuCloseButton = styled.button`
  background-image: linear-gradient(to bottom right, #2ecc71, #9b59b6);
  border-radius: 0.375rem;
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  &:hover {
    color: white;
    background-color: #9b59b6;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5),
      0 0 0 4px rgba(66, 153, 225, 0.6);
  }
`;

const MobileMenuItem = styled.p`
  cursor: pointer;
  font-size: 1.125rem;
  font-family: Inter;
  font-weight: 600;
  color: white;
`;

const ConditionalRenderContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }
`;

const HiddenSpan = styled.span`
  display: none;
`;

const LogoImage = styled.img`
  height: 2rem;
  width: auto;

  @media (min-width: 640px) {
    height: 2.5rem;
  }
`;

const SrOnlySpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const MenuIcon = styled.svg`
  height: 1rem;
  width: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const UserImage = styled.img`
  /* Add any additional styling for the image */
`;

const UserName = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  color: #ffffff;
  @media (min-width: 2xl) {
    font-size: 1.125rem;
  }
`;

const StyledDiv = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);
  border-style: solid;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-color: #f9fafb;
  background-image: linear-gradient(to bottom right, #38b2ac, #805ad5);
`;

const WrapdDiv = styled.div`
  padding-top: 1.25rem;
  padding-bottom: 1.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`;

const FlexDev = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  height: 1.8rem;
  width: auto;
`;

const LinkDiv = styled.div`
  padding-top: 1rem;
  padding-right: 1.25rem;
  padding-bottom: 1.5rem;
  padding-left: 1.25rem;
  & > * + * {
    margin-top: 1.5rem;
  }
`;

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonDEv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
`;
const SignupButton = styled.button`
 background-color: #E2FF6;
  color: white;
  border: 1px solid #fff;
  border-radius: 6px;
  width: 100px;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 1536px) {
    border-radius: 15px;
    font-size: 1.25rem;
  }
`;
const LoginButton = styled.button`
  background-color: #e2ff6f ;
  color: #000;
  border: 1px solid #fff;
  border-radius: 6px;
  width: 100px;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 1536px) {
    font-size: 1.25rem;
  }
`;
export const Container = styled.div`
  max-width: 1920px;

  @media (min-width: 1536px) {
    max-width: 1920px;
  }

  margin-left: auto;
  margin-right: auto;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const activeTab = location.pathname;

  const isActive = (path) => {
    return activeTab === path;
  };
 
  const isHome = location.pathname === '/'

  const user =
    location.pathname === "/templates" || location.pathname === "/view_design";
const handleclick = ()=>{

}
  return (
    <NavBarContainer useLinearGradient={isHome}>
      <Container>
        <NavBarContent>
          <div>
            <Link to="/">
              <HiddenSpan>logo</HiddenSpan>
              <LogoImage src={ZoffieLogo} alt="logo" />
            </Link>
          </div>
          <MobileMenuContainer>
            <MobileMenuButton onClick={() => setOpen(!open)}>
              <SrOnlySpan>Open menu</SrOnlySpan>
              <MenuIcon
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </MenuIcon>
            </MobileMenuButton>
          </MobileMenuContainer>
          <NavMenu>
            <Link to="/">
              <NavMenuItem isActive={isActive("/")}>Plans</NavMenuItem>
            </Link>
            <Link to="/templates">
              <NavMenuItem
                isActive={isActive("/templates") || isActive("/view_design")}
              >
                Templates
              </NavMenuItem>
            </Link>
          </NavMenu>
          <ConditionalRenderContainer>
            {!user ? (
              <>
                <SignupButton>Signup</SignupButton>
                <LoginButton>Login</LoginButton>
              </>
            ) : (
              <>
                <LanguageSelector />
                <FlexContainer>
                  <UserImage src={avatar} alt="user" />
                  <UserName>
                    Hello <br /> John!
                  </UserName>
                </FlexContainer>
              </>
            )}
          </ConditionalRenderContainer>
        </NavBarContent>

        <MobileMenuContent open={open}>
          <StyledDiv>
            <WrapdDiv>
              <FlexDev>
                <div>
                  <StyledImage src={ZoffieLogo} alt="ZOffer" />
                </div>
                <div style={{ marginRight: "-8px" }}>
                  <MobileMenuCloseButton onClick={() => setOpen(!open)}>
                    <SrOnlySpan>Close menu</SrOnlySpan>
                    <MenuIcon
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </MenuIcon>
                  </MobileMenuCloseButton>
                </div>
              </FlexDev>
            </WrapdDiv>

            <LinkDiv>
              <StyledGrid>
                <Link to="/">
                  <MobileMenuItem>Plans</MobileMenuItem>
                </Link>
                <Link to="/templates">
                  <MobileMenuItem>Templates</MobileMenuItem>
                </Link>
              </StyledGrid>
              <ButtonDEv>
                <Button
                  variant={'transparent'}
                  text="Signup"
                  onClick={handleclick}
                />
                <Button
                  variant={'yellow'}
                  text="Login"
                  onClick={handleclick}
                />
              </ButtonDEv>
            </LinkDiv>
          </StyledDiv>
        </MobileMenuContent>
        </Container>
    </NavBarContainer>
  );
};

export default Navbar;
