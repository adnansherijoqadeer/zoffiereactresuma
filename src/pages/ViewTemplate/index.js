import React, { useState } from "react";
import {
  arrow,
  degsinecv,
  columcv,
  cvinrow2,
  rowcv,
  zeeelogo,
  facbook,
  twiter,
  linkedinWhite,
} from "../../assest";

import Button from "../../component/Button";
import Card from "../../component/Card";
import Navbar from "../../component/Navbar";
import planets from '../../assest/image/bgimg.png'

// mock data
import { CardData } from "../../mockdata/index";

import {
  StyledSection,
  Container,
  FlexContainer,
  FlexInnerContainer,
  StyledHeading,
  DesignTemplate,
  DesignContainer,
  DesignImageContainer,
  DesignImage,
  SimilarTemplatesContainer,
  ShareNowContainer,
  AvatarContainer,
  SocialLinksIcon,
  ShareNowText,
  StyledHr,
  StyledHeading2,
  SimilarTemplatesGrid,
  DesignStyledButton,
  StyledSpan,
  InlineFlexRow,
  StyledH3,
  ImgDiv,
  ImgPara,
  Simpletemplates,
  ZlogoDiv,
  MinimalDiv,
  MiniHeading,
  MiniButton,
  Div10,
  Div10para,
  MiniPrice,
  MiniFinal,
  DivStyle,
  Zlogopara,
  MainDiv,
  StyledDivWithPlanet,
} from "./styles";

const ViewTemplate = () => {
  const [activeDesign, setActiveDesign] = useState(0);

  const simpletemplates = [
    {
      img: cvinrow2,
      text: "PINK",
      color: "#D6A3C3",
    },
    {
      img: cvinrow2,
      text: "ORANGE",
      color: "#FFC38B",
    },
    {
      img: rowcv,
      text: "GREEN",
      color: "#479977",
    },
  ];

  const socialLinks = [
    {
      img: facbook,
      alt: "fac",
    },
    {
      img: twiter,
      alt: "fac",
    },
    {
      img: linkedinWhite,
      alt: "fac",
    },
  ];
 const handleclick=()=>{}
  return (
    <>
      <StyledSection>
        <Navbar />
        
      <StyledDivWithPlanet>
        <img src={planets} alt="planets" />
      </StyledDivWithPlanet>
        <Container>
          <FlexContainer>
            <FlexInnerContainer>
              <StyledHeading>
                Graphic Design Resume (Minimal)
                <div>
                  <DesignStyledButton>
                    <img src={arrow} alt="alt" />
                    120
                    <StyledSpan>Downloads</StyledSpan>
                  </DesignStyledButton>
                </div>
              </StyledHeading>
              <InlineFlexRow>
              <Button
                variant={'gradient'}
                text="Download"
                onClick={handleclick}
              />
              <Button
                variant={'yellow-gradient'}
                text="Edit Now"
                onClick={handleclick}
              />
              </InlineFlexRow>
            </FlexInnerContainer>

            <DesignTemplate>
              <DesignContainer>
                <DesignImageContainer>
                  {[1, 2, 3, 4].map((item, index) => (
                    <DesignImage
                      key={index}
                      isActive={activeDesign === index}
                      onClick={() => setActiveDesign(index)}
                    >
                      <img src={columcv} alt="alt" />
                    </DesignImage>
                  ))}
                </DesignImageContainer>
                <div>
                  <img src={degsinecv} alt="alt" />
                </div>
              </DesignContainer>
              <StyledH3>Similar Template in Different Color</StyledH3>

              <SimilarTemplatesContainer>
                {simpletemplates.map((data, index) => (
                  <Simpletemplates key={index}>
                    <ImgDiv>
                      <img style={{ width: "100%" }} src={data.img} alt="alt" />
                    </ImgDiv>
                    <ImgPara>{data.text}</ImgPara>
                  </Simpletemplates>
                ))}
              </SimilarTemplatesContainer>
            </DesignTemplate>

            <ZlogoDiv>
              <img src={zeeelogo} alt="alt" />
              <div>
                <MinimalDiv>
                  <MiniHeading>Graphic Design Resume ( Minimal)</MiniHeading>
                  <MiniButton>Most picked</MiniButton>
                </MinimalDiv>
                <Div10>
                  <Div10para>
                    $10,00
                  </Div10para>
                  <MiniPrice>
                    $23,00
                  </MiniPrice>
                  <MiniFinal>
                    Updated Jun 12, 2023
                  </MiniFinal>
                </Div10>
              </div>
            </ZlogoDiv>
            <Zlogopara>
              Use this designer portfolio template to organize your work and
              accomplishments. Easily showcase your achievements and share with
              prospective employers or clients. This designer portfolio template
              is flexible enough to work for any visual creative, from graphic
              designers and illustrators to architects and fashion designers.
            </Zlogopara>

            <ShareNowContainer>
              <MainDiv>
              <Button
                variant={'gradient'}
                text="Download"
                onClick={handleclick}
              />
              <Button
                variant={'yellow-gradient'}
                text="Edit Now"
                onClick={handleclick}
              />
              </MainDiv>
              <AvatarContainer>
                <ShareNowText>Share Now:</ShareNowText>
                {socialLinks.map((data) => (
                  <SocialLinksIcon
                    key={data.alt}
                    src={data.img}
                    alt={data.alt}
                  />
                ))}
              </AvatarContainer>
            </ShareNowContainer>
            <StyledHr />

            <DivStyle>
              <StyledHeading2>Discover similar templates</StyledHeading2>
              <SimilarTemplatesGrid>
                {CardData.map((item, index) => (
                  <Card
                    key={index}
                    imageUrl={item.imageUrl}
                    category={item.category}
                    title={item.title}
                    updatedDate={item.updatedDate}
                    downloadCount={item.downloadCount}
                    price={item.price}
                    originalPrice={item.originalPrice}
                    tag={item.tag}
                    data={item.data}
                  />
                ))}
              </SimilarTemplatesGrid>
            </DivStyle>
          </FlexContainer>
        </Container>
      </StyledSection>
    </>
  );
};

export default ViewTemplate;
