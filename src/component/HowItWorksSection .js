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
  background: #f39c12;
  padding: 50px 0;
  text-align: center;
  color: white;
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  width: 70%;
  text-align: left;
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

// React Component
const HowItWorksSection = () => {
  return (
    <Container>
      <Section>
        <Heading>How it works?</Heading>
        <SubHeading>
          Create your best resume yet & download in minutes
        </SubHeading>
        <ContentWrapper>
          <IconWrapper>
            <img src={contact} alt="Simple Icon" />
          </IconWrapper>
          <FeatureList>
            <FeatureItem>
              <img src={contact} alt="Simple Icon" />
              <div>
                <h3>Simple. Stylish. Effective.</h3>
                <p>
                  Select from a variety of professionally designed resume templates that suit your style and industry.
                </p>
              </div>
            </FeatureItem>
            <FeatureItem>
              <img src={contact} alt="AI Icon" />
              <div>
                <h3>Power Up with AI Enhancement</h3>
                <p>
                  Take your resume to the next level with our AI-powered content enhancement feature. Our algorithms analyze your content and suggest improvements to make it more compelling and prominent to recruiters.
                </p>
              </div>
            </FeatureItem>
            <FeatureItem>
              <img src={contact} alt="Job Icon" />
              <div>
                <h3>Land Your Dream Job!</h3>
                <p>
                  Craft your ideal resume, download it in a professional PDF, and confidently apply for dream jobs. Your enhanced resume showcases your skills for a successful job search.
                </p>
              </div>
            </FeatureItem>
          </FeatureList>
        </ContentWrapper>
      </Section>
    </Container>
  );
};

export default HowItWorksSection;
