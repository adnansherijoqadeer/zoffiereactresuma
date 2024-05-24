import React from "react";
import { linkedin } from "../../assest/index";
import Button from "../../component/Button";
import { Tabs, Tab } from "../../component/Tabs";
import Card from "../../component/Card";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";

import { Link } from "react-router-dom";
import { CardData } from "../../mockdata/index";
import planets from "../../assest/image/bgimg.png";

import {
  StyledSection,
  FlexContainer,
  FlexInnerContainer,
  Heading,
  ButtonsContainer,
  Container,
  GridDiv,
  StyledDivWithPlanet,
} from "./styles";
const Templates = () => {
  const handleclick = () => {};
  return (
    <StyledSection>
      <Navbar />
      <StyledDivWithPlanet>
        <img src={planets} alt="planets" />
      </StyledDivWithPlanet>
      <Container>
        <FlexContainer>
          <FlexInnerContainer>
            <Heading>Hello Simar</Heading>
            <ButtonsContainer>
              {/* StyledButton */}
              <Button
                variant={"gradient"}
                text="Upload Your CV"
                onClick={handleclick}
              />
              <Button
                variant={"templatewhite"}
                text="Connect with LinkedIn"
                onClick={handleclick}
                img={linkedin}
              />
            </ButtonsContainer>
          </FlexInnerContainer>
          <Tabs>
            <Tab
              component={
                <div>
                  <GridDiv>
                    {CardData.map((item, index) => (
                      <Link to="/view_design">
                        <Card
                          key={index}
                          imageUrl={item.imageUrl}
                          category={item.category}
                          title={item.title}
                          updatedDate={item.updatedDate}
                          downloadCount={item.downloadCount}
                          price={item.price}
                          originalPrice={item.originalPrice}
                          data={item.data}
                          tag={item.tag}
                          // time={d.time}
                        />
                      </Link>
                    ))}
                  </GridDiv>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "38px",
                    }}
                  >
                    <Button
                      variant={"white"}
                      text="See More"
                      onClick={handleclick}
                    />
                  </div>
                </div>
              }
            >
              Resume Templates
            </Tab>

            <Tab
              component={
                <div>
                  <GridDiv>
                    {CardData.map((item, index) => (
                      <Link to="/view_design">
                        <Card
                          key={index}
                          imageUrl={item.imageUrl}
                          category={item.category}
                          title={item.title}
                          updatedDate={item.updatedDate}
                          downloadCount={item.downloadCount}
                          price={item.price}
                          originalPrice={item.originalPrice}
                          data={item.data}
                          tag={item.tag}
                          // time={d.time}
                        />
                      </Link>
                    ))}
                  </GridDiv>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "38px",
                    }}
                  >
                    <Button
                      variant={"white"}
                      text="See More"
                      onClick={handleclick}
                    />
                  </div>
                </div>
              }
            >
              My Resumes (Draft)
            </Tab>

            <Tab component="Downloaded Resumes">Downloaded Resumes</Tab>
          </Tabs>
        </FlexContainer>
      </Container>
      <Footer />
    </StyledSection>
  );
};

export default Templates;
