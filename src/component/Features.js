import React from "react";
import styled from "@emotion/styled";
import { finger1, finger2, finger3, finger4 } from "../assest/index";
const FeaturesContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  justify-content: flex-start;
  gap: 40px;
  margin-top: 20px;
`;

const FeatureColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 40px;
  @media (min-width: 768px) {
    padding-top: 0px;
  }
`;
const Content = styled.div`
  width: auto;
  @media (min-width: 768px) {
    width: 270px;
  }
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const FeatureTextContainer = styled.div`
  padding-bottom: 0.625rem;
  padding-top: 1.75rem;
`;

const FeatureImage = styled.img`
  @media (max-width:768px) {
   margin:auto;
  }
`;
// =====================
const Text = styled.p`
  color: #292A36;
  font-size: 1.25rem;
  font-weight: 700;
  line-height:42px;
`;

const Paragraph = styled.p`
font-family:'Inter';
  color: #292A36;
  font-size: 1.25rem;
  font-weight: 400;
    @media (min-width: 1536px) {
    line-height: 29px;
  }
`;

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
  @media (min-width: 1024px) {
    margin-top: 5.25rem;
    text-align: start;
    gap: 2.5rem;
  }

  text-align: center;
`;

const StyledDiv = styled.div`
  width: auto;
  @media (min-width: 768px) {
    width: auto;
  }
  @media (max-width: 1920px) {
    width: 350px;
  }
 
`;
 const FirstText = styled.p`
  color: #292A36;
  font-size: 1.25rem;
  font-weight: 700;
`;
const Features = () => {
  return (
    <FeaturesContainer> 
      <FeatureColumn>
        <Content>
          <FeatureImage src={finger1} alt="figure" />
          <div>
            <FeatureTextContainer>
              <FirstText>Game-changing.</FirstText>
              <FirstText> Intuitive. Powerful</FirstText>
            </FeatureTextContainer>
            <Paragraph>
              Explore professionally curated templates tailored to your industry
              & style. From finance to technology, healthcare, & beyond, find
              the perfect template to set yourself apart.
            </Paragraph>
          </div>
        </Content>
        <Content>
          <FeatureImage src={finger3} alt="figure" />
          <div>
            <FeatureTextContainer>
              <Text>Pre-written Phrases</Text>
            </FeatureTextContainer>
            <Paragraph>
              Elevate your resume with AI-driven content enhancement. Our
              algorithms analyze and optimize your content, making it more
              compelling and impactful to catch recruiters' attention.
            </Paragraph>
          </div>
        </Content>
      </FeatureColumn>

      <FeatureColumn>
        <FeatureWrapper>
          <div>
            <FeatureImage src={finger2} alt="figure" />
            <StyledDiv>
              <FeatureTextContainer>
                <Text>Pursue Your Dream Career</Text>
              </FeatureTextContainer>
              <Paragraph>
                With a polished resume, pursue your dream job confidently.
                Highlight your skills and experiences, taking the next step
                toward your professional goals.
              </Paragraph>
            </StyledDiv>
          </div>
          <StyledDiv>
            <FeatureImage src={finger4} alt="figure" />
            <div>
              <FeatureTextContainer>
                <Text>Templates that stand out</Text>
              </FeatureTextContainer>
              <Paragraph>
                Forge Your Path to Success with us. Craft a resume that commands
                attention and accelerates your journey to success. Your dream
                job awaits – seize the opportunity today!
              </Paragraph>
            </div>
          </StyledDiv>
        </FeatureWrapper>
      </FeatureColumn>
    </FeaturesContainer>
  );
};

export default Features;
