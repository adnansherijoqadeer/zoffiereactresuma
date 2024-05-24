/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
// import linkedinIcon from '../../assest/icons/linkedin.svg'; // Adjust path as necessary
import {
  resumagroupimg,
  finger1,
  finger2,
  finger3,
  finger4,
  roundimg,
  cvwhite2,
  cvyellow,
  cvactive,
  resume53,
  sendsectionresuma,
  cvdark,
  linkedin,
  avatar1,
  avatar2,
  avatar3,
  hand,
  profile,
  ratio,
  contact,
  resume12,
} from "../assest/index";
// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const BannerSection = styled.section`
  background: linear-gradient(to right, #76f3d5, #a1eafb);
  padding: 50px 0;
  text-align: center;
  color: white;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubHeading = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const BulletPoints = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
`;

const BulletPoint = styled.li`
  font-size: 18px;
  margin-bottom: 5px;

  &:before {
    content: '•';
    margin-right: 10px;
    color: #f39c12; // Yellow color for the bullet point
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#f39c12' : '#ffffff')};
  color: ${(props) => (props.primary ? '#ffffff' : '#000000')};
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;

  &:hover {
    opacity: 0.9;
  }

  img {
    margin-left: 10px;
  }
`;

const TemplatesImage = styled.img`
  margin-top: 20px;
  width: 80%;
`;

// React Component
const Banner = () => {
  return (
    <Container>
      <BannerSection>
        <Heading>Transform your resume instantly with Zoffie AI. Elevate to the Top 2%</Heading>
        <SubHeading>Unique Resume Templates to get your dream Job!</SubHeading>
        <SubHeading>Be in top of 2% with Zoffie Resume</SubHeading>
        <SubHeading>Dare to be different.</SubHeading>
        <BulletPoints>
          <BulletPoint>Unique Resume Templates to get your dream Job!</BulletPoint>
          <BulletPoint>Be in top of 2% with Zoffie Resume</BulletPoint>
          <BulletPoint>Dare to be different.</BulletPoint>
        </BulletPoints>
        <ButtonWrapper>
          <Button primary>Upload Your CV</Button>
          <Button>
            Connect with LinkedIn
            <img src={resume12} alt="LinkedIn Icon" />
          </Button>
        </ButtonWrapper>
        {/* <TemplatesImage src={linkedinIcon} alt="Resume Templates" /> */}
      </BannerSection>
    </Container>
  );
};

export default Banner;
