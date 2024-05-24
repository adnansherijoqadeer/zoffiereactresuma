import React from "react";
import styled from "@emotion/styled";
const FooterContainer = styled.footer`
  margin-top: 71px;
  padding-bottom:40px;
  @media (max-width: 640px) { 
    margin-top: 23px;
   }
`;

const HorizontalRule = styled.hr`
   color: white;
`;

const FooterText = styled.p`
  font-weight: 600; 
  font-size: 1.25rem; 
  color: white;
  padding-top: 2rem; 
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <HorizontalRule />
      <FooterText>
        2021 Zoffie - All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
