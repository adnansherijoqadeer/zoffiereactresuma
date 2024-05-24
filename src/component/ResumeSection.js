/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

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
  resume11,
} from "../assest/index";

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.section`
  background: linear-gradient(to right, #76f3d5, #a1eafb);
  padding: 50px 0;
  text-align: center;
  color: white;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubHeading = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #4f4f4f;
`;

const HighlightText = styled.span`
  color: #6c63ff;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const TextWrapper = styled.div`
  width: 50%;
  text-align: left;
`;

const ImageWrapper = styled.div`
  width: 40%;
  text-align: left;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    margin-right: 15px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    font-size: 16px;
    color: #4f4f4f;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: left;
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

const ResumeImage = styled.img`
  width: 100%;
`;

// React Component
const ResumeSection = () => {
  return (
    <Container>
      <Section>
        <Heading>Create your Top resume with Zoffie AI & be different</Heading>
        <SubHeading>
          Take your resume to the next level with the <HighlightText>game-changing power of Zoffie AI</HighlightText>
        </SubHeading>
        <ContentWrapper>
          <ImageWrapper>
            <ResumeImage src={resume11} alt="Resume Example" />
            <ButtonWrapper>
              <Button primary>Upload Your CV</Button>
              <Button>
                Connect with LinkedIn
                <img src={finger1} alt="LinkedIn Icon" />
              </Button>
            </ButtonWrapper>
          </ImageWrapper>
          <TextWrapper>
            <FeatureList>
              <FeatureItem>
                <img src={finger1} alt="Icon" />
                <div>
                  <h3>Game-changing. Intuitive. Powerful</h3>
                  <p>
                    Explore professionally curated templates tailored to your industry & style. From finance to
                    technology, healthcare, & beyond, find the perfect template to set yourself apart.
                  </p>
                </div>
              </FeatureItem>
              <FeatureItem>
                <img src={finger1} alt="Icon" />
                <div>
                  <h3>Pursue Your Dream Career</h3>
                  <p>
                    With a polished resume, pursue your dream job confidently. Highlight your skills and
                    experiences, taking the next step toward your professional goals.
                  </p>
                </div>
              </FeatureItem>
              <FeatureItem>
                <img src={finger1} alt="Icon" />
                <div>
                  <h3>Pre-written Phrases</h3>
                  <p>
                    Elevate your resume with AI-driven content enhancement. Our algorithms analyze and optimize your
                    content, making it more compelling and impactful to catch recruiters' attention.
                  </p>
                </div>
              </FeatureItem>
              <FeatureItem>
                <img src={finger1} alt="Icon" />
                <div>
                  <h3>Templates that stand out</h3>
                  <p>
                    Forge your path to success with us. Craft a resume that commands attention and accelerates your
                    journey to success. Your dream job awaits – seize the opportunity today!
                  </p>
                </div>
              </FeatureItem>
            </FeatureList>
           
          </TextWrapper>
        </ContentWrapper>
      </Section>
    </Container>
  );
};

export default ResumeSection;
