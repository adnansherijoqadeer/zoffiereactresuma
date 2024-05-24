import styled from '@emotion/styled';
import Button from "../../component/Button";
import { Tabs, Tab } from "../../component/Tabs";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1280px;

  @media (min-width: 1536px) {
    max-width: 1440px;
  }

  margin-left: auto;
  margin-right: auto;
`;


export const StyledSection = styled.section`
  overflex-x:hidden;
  position:relative;
  min-height:100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
  background: linear-gradient(321.54deg, #3AFDC6 8.03%, #9727F5 105.78%);

  `;
// background-image: url("${bgimg}");



export const SectionContent = styled.div`
  @media (min-width: 768px) {
    width: 80%;
  }
  margin-left: auto;
  margin-right: auto;
`;


export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 2rem auto; 
  border-radius: 0.75rem; 
  backdrop-filter: blur(4px); 
  background-color: rgba(255, 255, 255, 0.5); 
  padding: 1.25rem; 
`;




export const FlexInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;




export const Heading = styled.h1`
  font-size: 36px;
  font-weight: 600; 

  @media (min-width: 1280px) {
    font-size: 54px; 
    line-height:73px;
  }

  @media (max-width: 639px) {
    margin-bottom: 1rem; 
  }
`;




export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; 

  @media (min-width: 640px) {
    gap: 1.75rem; 
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;



export const StyledButton = styled(Button)`
  font-size: 9px;
  font-weight: 600;
  height: 75px;
  color: #F93BFD; 
  background: linear-gradient(to right, #F93BFD, #A350FF); 
  padding: 0.5rem 1rem; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
  @media (min-width: 640px) {
    font-size: 1rem; 
    padding: 0.625rem 1.25rem; 
  }
`;

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.25rem; 

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr)); 
  }
`;


export const TabsContainer = styled(Tabs)`
  margin-top: 1rem; /* mt-4 */
`;




export const StyledTab = styled(Tab)`
  margin-top: 1rem; /* mt-4 */
`;


export const StyledCardLink = styled(Link)`
  display: flex;
  `


export const StyledCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.25rem; /* gap-5 */

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr)); /* lg:grid-cols-4 */
  }
`;


export const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.25rem; /* gap-5 */

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr)); /* xl:grid-cols-4 */
  }
`;


export const SeeMoreButton = styled(Button)`
  font-weight: 600;
  font-size: 1rem;
  background-color: #FFFFFF;
  color: #000000; 
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 120px; 
  height: 45px; 
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  margin-top: 38px; 

  @media (min-width: 1536px) {
    font-size: 1.5rem; 
    width: 167px; 
    height: 75px; 
  }
`;

export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px; 
    @media (min-width: 1280px) {
      grid-template-columns: repeat(4, 1fr);
    }`;

export const StyledDivWithPlanet = styled.div`
  position: absolute;
  left: -10px;
  display: none;

  @media (min-width: 1024px) { /* Assuming lg breakpoint is 1024px */
    display: block;
  }
`;
export const StyledDivWithPlanetFooter = styled.div`
  position: absolute;
  right: -10px;
  bottom:0;
  display: none;

  @media (min-width: 1024px) { /* Assuming lg breakpoint is 1024px */
    display: block;
  }
`;