import Navbar from "../../component/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import ImageSlider from "../../component/Slider";
import Button from "../../component/Button";

// import Features from "../../component/Features";/
import planets from "../../assest/image/bgimg.png";
import styled from "@emotion/styled";
// images and icons
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
} from "../../assest/index";

// styled-componets
import {
  BannerSection,
  Container,
  ResumeSection,
  ResumeOrder,
  Heading,
  TextWrapper,
  HR,
  ImageWrapper,
  Paragraph,
  ButtonWrapper,
  Image,
  Order,
  FeatureHeading,
  FeaturesContainer,
  FeaturesSection,
  FeatureImageWrapper,
  SubHeading,
  ButtonGroup,
  HowItWorksSection,
  GridContainer,
  StepContainer,
  StepDescription,
  StepIconWrapper,
  TextContainer,
  DescriptionContainer,
  StepWrapper,
  Title,
  Description,
  StepIcon,
  StepTextWrapper,
  StepTitle,
  PinkSection,
  SectionHeading,
  SectionContentContainer,
  GradientSection,
  LastSectionHeading,
  ListItemContent,
  LastSectionParagraph,
  LastContentWrapper,
  LastSectionImageContainer,
  ListContainer,
  Timeline,
  AvatarContainer,
  ListItemHeading,
  ListItemDescription,
  GameChangingPowerOfZoffieAI,
  FlexContainerDiv,
  BrStyle,
  Flexdiv,
  Yetspan,
  Buildspan,
  BuilderWrapper,
  LastSectionImageWithPlanetsWrapper,
  ImageWithPlanetsWrapper,
  CustomImage,
} from "./styles";

function Home() {
  const howItWorks = [
    {
      img: avatar1,
      text: " Simple. Stylish. Effective.",
      description:
        " Select from a variety of professionally designed resume templates that suit your style and industry.",
    },
    {
      img: avatar2,
      text: " Power Up with AI Enhancement",
      description:
        " Take your resume to the next level with our AI-powered content enhancement feature. Our algorithms analyze your content and suggest improvements to make it more compelling and prominent to recruiters.",
    },
    {
      img: avatar3,
      text: " Land Your Dream Job!",
      description:
        "Craft your ideal resume, download it in a professional PDF, and confidently apply for dream jobs. Your enhanced resume showcases your skills for a successful job search.",
    },
  ];
  //
  const SliderImages = [
    {
      id: 1,
      src: cvwhite2,
      alt: "cvwhite2 ",
    },
    {
      id: 2,
      src: resume53,
      alt: "cvactive",
    },
    {
      id: 3,
      src: cvyellow,
      alt: "cvyellow",
    },
    {
      id: 4,
      src: cvdark,
      alt: "cvdark",
    },
    {
      id: 5,
      src: cvactive,
      alt: "cvactive",
    },
  ];

  const CVBuildersFeatures = [
    {
      id: 1,
      text: "Secure and Confidential",
      description:
        "Rest easy knowing that your personal information is secure. Our platform prioritizes data privacy, ensuring that your sensitive details are kept confidential throughout the resume-building process.",
      img: hand,
    },
    {
      id: 2,
      img: profile,
      text: "Profession Specific Resume Templates",
      description:
        "Download professionally. Get your masterpiece in a polished PDF, ensuring integrity on all devices. Streamline the recruitment process for easy review and sharing with employers.",
    },
    {
      id: 3,
      img: ratio,
      text: "Use AI for Enhancement",
      description:
        "Stand out with AI-enhanced language and key phrases that captivate attention. Elevate your message, leaving a lasting impression effortlessly.",
    },
    {
      id: 4,
      img: contact,
      text: "Create Instantly",
      description:
        "Our platform is accessible online, making it convenient for you to work on your resume whenever inspiration strikes.",
    },
  ];

  const FlexContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
  `;

  const DivContent = styled.div`
    width: 350px;

    @media (max-width: 1750px) {
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;
    }
    @media (min-width: 1756px) {
      justify-content: start;
      align-items: start;
      flex-direction: column;
    }

    @media (max-width: 1500px) {
      width: 250px;
    }

    @media (max-width: 1200px) {
      width:400px;
    }
  `;
  const DivH3 = styled.h3`
    color: #292a36;
    font-size: 30px;
    line-height: 42px;
    font-weight: 700;
    padding-top: 30px;
    paddin-bottom: 10px;
    @media (max-width: 1500px) {
     font-size: 20px;
     line-height: 30px;
    }
  `;
  const DivPara = styled.p`
    color: #292a36;
    font-size: 20px;
    line-height: 29px;
    font-weight: 400;
    text-align: start;

    @media (max-width: 1500px) {
      font-size:16px;
      line-height: 24px
     }
  `;

  const handleclick = () => {};
  return (
    <div>
      {/* home section */}
      <BannerSection>
        <Navbar />
        <Container>
          <ResumeSection>
            <ImageWithPlanetsWrapper>
              <img src={planets} alt="planets" />
            </ImageWithPlanetsWrapper>
            <ResumeOrder>
              <Heading>
                Transform your resume <br /> instantly with Zoffie AI. <br />
                Elevate to the Top 2%
              </Heading>
              <TextWrapper>
                <HR />
                {[
                  "Unique Resume Templates to get your dream Job!",
                  "Be in top of 2% with Zoffie Resume",
                  "Dare to be different.",
                ].map((item, index) => (
                  <FlexContainer key={index}>
                    <ImageWrapper>
                      <Image src={roundimg} alt="alt" />
                    </ImageWrapper>
                    <div style={{ height: "fit-content" }}>
                      <Paragraph
                        style={index === 1 ? { color: "#76F3D5" } : {}}
                      >
                        {item}
                      </Paragraph>
                    </div>
                  </FlexContainer>
                ))}
              </TextWrapper>
              <ButtonWrapper>
                <Button
                  variant={"yellow"}
                  text="Upload Your CV"
                  onClick={handleclick}
                />
                <Button
                  variant={"white"}
                  text="Connect with LinkedIn"
                  onClick={handleclick}
                  img={linkedin}
                />
                <source />
              </ButtonWrapper>
            </ResumeOrder>
            <Order>
              <img
                src={resumagroupimg}
                alt="alt"
                style={{ marginLeft: "auto" }}
              />
            </Order>
          </ResumeSection>
        </Container>
      </BannerSection>

      {/* features section */}
      <FeaturesSection>
        <FeaturesContainer>
          <div>
            <FeatureHeading>
              Create your Top resume with Zoffie AI <BrStyle /> & be different
            </FeatureHeading>
            <SubHeading>
              Take your resume to the next level with the
              <GameChangingPowerOfZoffieAI>
                game-changing power of Zoffie AI
              </GameChangingPowerOfZoffieAI>
            </SubHeading>
          </div>

          <FlexContainerDiv>
            <FeatureImageWrapper>
              <CustomImage src={sendsectionresuma} alt="Gaming" />
              <ButtonGroup>
                <Button
                  variant={"yellow"}
                  text="Upload Your CV"
                  onClick={handleclick}
                />
                <Button
                  variant={"white"}
                  text="Connect with LinkedIn"
                  onClick={handleclick}
                  img={linkedin}
                />
              </ButtonGroup>
            </FeatureImageWrapper>
            <div style={{ display: `flex`, gap: "3rem" }}>
              <div>
                <DivContent>
                  <img src={finger1} alt="figure" />
                  <DivH3>
                    Game-changing. <br />s Intuitive. Powerful
                  </DivH3>
                  <DivPara>
                    Explore professionally curated templates tailored to your
                    industry & style. From finance to technology, healthcare, &
                    beyond, find the perfect template to set yourself apart.
                  </DivPara>
                </DivContent>
                <DivContent>
                  <img
                    src={finger3}
                    alt="figure"
                    style={{ paddingTop: "41px" }}
                  />
                  <DivH3>
                  Pre-Written Phrases
                  </DivH3>
                  <DivPara>
                    Explore professionally curated templates tailored to your
                    industry & style. From finance to technology, healthcare, &
                    beyond, find the perfect template to set yourself apart.
                  </DivPara>
                </DivContent>
              </div>

              <div>
                <div>
                  <DivContent>
                    <img
                      src={finger2}
                      alt="figure"
                      style={{ marginTop: "45px" }}
                    />
                    <DivH3>
                      Purchase Your Dream Career
                    </DivH3>
                    <DivPara>
                      Explore professionally curated templates tailored to your
                      industry & style. From finance to technology, healthcare,
                      & beyond, find the perfect template to set yourself apart.
                    </DivPara>
                  </DivContent>
                  <DivContent>
                    <img
                      src={finger4}
                      alt="figure"
                      style={{ paddingTop: "48px" }}
                    />
                    <DivH3>
                     Templates that stand out
                    </DivH3>
                    <DivPara>
                      Explore professionally curated templates tailored to your
                      industry & style. From finance to technology, healthcare,
                      & beyond, find the perfect template to set yourself apart.
                    </DivPara>
                  </DivContent>
                </div>
              </div>
            </div>
          </FlexContainerDiv>
        </FeaturesContainer>
      </FeaturesSection>

      {/* how it works section */}
      <HowItWorksSection>
        <Container>
          <GridContainer>
            <TextContainer>
              <DescriptionContainer>
                <Title>How it works?</Title>
                <Description>
                  <Yetspan>Create your best resume</Yetspan>
                  <br /> yet & download in minutes
                </Description>
              </DescriptionContainer>
            </TextContainer>

            <StepContainer>
              {howItWorks.map((data) => (
                <StepWrapper key={data.id}>
                  <StepIconWrapper>
                    <StepIcon src={data.img} alt="Step Icon" />
                  </StepIconWrapper>
                  <StepTextWrapper>
                    <StepTitle>{data.text}</StepTitle>
                    <StepDescription>{data.description}</StepDescription>
                  </StepTextWrapper>
                </StepWrapper>
              ))}
            </StepContainer>
          </GridContainer>
        </Container>
      </HowItWorksSection>

      {/*select a resume template */}
      <PinkSection>
        <Container>
          <SectionHeading>
            Select your unique powerful template & <br /> be different with
            Zoffie
          </SectionHeading>
          <SectionContentContainer>
            <ImageSlider images={SliderImages} />

            <ButtonGroup>
              <Button
                variant={"yellow"}
                text="Upload Your CV"
                onClick={handleclick}
              />
              <Button
                variant={"white"}
                text="Upload Your CV"
                onClick={handleclick}
                img={linkedin}
              />
            </ButtonGroup>
          </SectionContentContainer>
        </Container>
      </PinkSection>

      {/* last section */}
      <GradientSection>
        <Container>
          <LastContentWrapper>
            <LastSectionHeading>
              Take the leap toward your career
            goals with CV Builder.
            </LastSectionHeading>
            <LastSectionParagraph>
              <Buildspan>
                Build resume that demands attention and accelerates
              </Buildspan>
              your journey to success. Your dream job awaits – seize the
              opportunity today!
            </LastSectionParagraph>
          </LastContentWrapper>

          <LastSectionImageWithPlanetsWrapper>
            <img src={planets} alt="planets" />
          </LastSectionImageWithPlanetsWrapper>

          <BuilderWrapper>
            <LastSectionImageContainer>
              <img src={resume12} alt="alt" />
            </LastSectionImageContainer>
            <ListContainer>
              {CVBuildersFeatures.map((data, index) => {
                const isLastItem = index === CVBuildersFeatures.length - 1;
                const lastItemClass = isLastItem ? "last-item" : "";

                return (
                  <Timeline key={index} className={`${lastItemClass}`}>
                    <AvatarContainer>
                      <img src={data.img} alt="alt" style={{width: "40px", height:"40px"}} />
                    </AvatarContainer>
                    <ListItemContent>
                      <ListItemHeading>{data.text}</ListItemHeading>
                      <ListItemDescription>
                        {data.description}
                      </ListItemDescription>
                    </ListItemContent>
                  </Timeline>
                );
              })}
            </ListContainer>
          </BuilderWrapper>
        </Container>
      </GradientSection>
    </div>
  );
}

export default Home;
