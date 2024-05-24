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
  background: linear-gradient(90deg, #6c63ff, #2ac1bc);
  padding: 50px 0;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 60%;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
`;

const SubHeading = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #4f4f4f;
`;

const HighlightText = styled.span`
  color: #6c63ff;
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
    width: 50px;
    height: 50px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #000;
  }

  p {
    font-size: 16px;
    color: #4f4f4f;
  }
`;

const ImageContainer = styled.div`
  width: 35%;
  img {
    max-width: 100%;
  }
`;

// React Component
const CareerGoalsSection = () => {
  return (
    <Container>
      <Section>
        <TextContainer>
          <Heading>Take the leap toward your career goals with CV Builder.</Heading>
          <SubHeading>
            Build resume that <HighlightText>demands attention</HighlightText> and <HighlightText>accelerates</HighlightText> your journey to success. Your dream job awaits – seize the opportunity today!
          </SubHeading>
          <FeatureList>
            <FeatureItem>
              <img src={profile} alt="Secure Icon" />
              <div>
                <h3>Secure and Confidential</h3>
                <p>
                  Rest easy knowing that your personal information is secure. Our platform prioritizes your privacy, ensuring that your sensitive details are well protected throughout the resume-building process.
                </p>
              </div>
            </FeatureItem>
            <FeatureItem>
              <img src={profile} alt="Templates Icon" />
              <div>
                <h3>Profession Specific Resume Templates</h3>
                <p>
                  Download professionally crafted resume templates in a polished PDF, providing a library of diverse styles that streamline the process to fit any career path and sharing with employers.
                </p>
              </div>
            </FeatureItem>
            <FeatureItem>
              <img src={profile} alt="AI Enhancement Icon" />
              <div>
                <h3>Use AI for Enhancement</h3>
                <p>
                  Stand out with AI-enhanced language and key phrases that catch attention. Elevate your message, leading to strong impressions with recruiters.
                </p>
              </div>
            </FeatureItem>
            <FeatureItem>
              <img src={profile} alt="Instant Creation Icon" />
              <div>
                <h3>Create Instantly</h3>
                <p>
                  Our platform is accessible online, making it convenient for you to work on your resume whenever inspiration strikes.
                </p>
              </div>
            </FeatureItem>
          </FeatureList>
        </TextContainer>
        <ImageContainer>
          <img src={resume11} alt="Resume Preview" />
        </ImageContainer>
      </Section>
    </Container>
  );
};

export default CareerGoalsSection;
