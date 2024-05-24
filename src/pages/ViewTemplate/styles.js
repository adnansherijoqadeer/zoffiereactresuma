import styled from "@emotion/styled";

export const StyledSection = styled.section`
position:relative;
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
  padding-bottom: 20px;
  background:linear-gradient(321.54deg, #3AFDC6 8.03%, #9727F5 105.78%);
;

`;


export const Container = styled.div`
  max-width: 1920px;
  @media (min-width: 1280px) {
    max-width: 1920px;
  }
  @media (min-width: 1440px) {
    max-width: 1920px;
  }
  margin-left: auto;
  margin-right: auto;
`;

export const FlexContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 26px;
  backdrop-filter: blur(4px);
  background-color: #FFFFFFB2;
  padding: 20px;
  padding-bottom: 40px;

  @media (min-width: 640px) {
    margin-right: 40px;
    margin-left: 40px;
  }
  @media (min-width: 768px) {
    margin-right: auto;
    margin-left: auto;
  }
`;



export const FlexInnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;
`;


export const StyledHeading = styled.h1`
  font-size: 16px;
  font-weight: 600; 
  padding-bottom: 12px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media (min-width: 640px) {
    font-size: 22px; 
    padding-bottom: 0; 
    flex-direction: row;
    column-gap: 0.75rem;
  }
  @media (min-width: 1280px) {
    font-size: 34px; 
  }
  @media (min-width: 1920px) {
    font-size:54px ;
    line-hight: 73px;
  }
`;


export const DesignTemplate = styled.div`
  @media (max-width: 768px) {
    background: linear-gradient(135deg, #874ded 0%, #3bfdc6 100%);
  }
  padding: 20px; 
  @media (min-width: 768px) {
    padding: 54px 40px;
  }

  border-radius: 0.75rem; 
  @media (min-width: 1024px) {
    border-radius: 27px; 
  }
  background: linear-gradient(135deg, #874ded 0%, #3bfdc6 100%);
`;


export const DesignContainer = styled.div`
  display: flex;
  gap: 20px; 
  @media (min-width: 1024px) {
    gap: 40px; 
  }
`;


export const DesignImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const DesignImage = styled.div`
  border-radius: 0.375rem;
  padding: 4px;
  height: fit-content; 
  cursor: pointer;
  border: ${(props) => (props.isActive ? "1px solid white" : "none")};
`;


export const SimilarTemplatesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  gap: 23px; 
  padding-top: 30px; 
`;


export const ShareNowContainer = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding-top: 40px;
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    align-items: flex-start;
    justify-content: space-between;
  }
  gap: 20px; 
  @media (min-width: 1024px) {
    gap: 0; 
  }
`;

export const AvatarContainer = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items: center; 
  gap: 24px; 
`;


export const SocialLinksIcon = styled.img`
  width: 52px; 
  height: 54px; 
  padding: 12px; 
  background-color: #21213d; 
  border-radius: 9999px; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  @media (max-width: 640px) {
    width: 44px;
    height: 44px;
  }
`;


export const ShareNowText = styled.p`
  display: none; 

  @media (min-width: 768px) {
    display: block;
  }
  font-weight: bold; 
  font-size: 1rem; 
  font-family: "Inter", sans-serif; 
  line-height: 45px;
  color: #21213d; 

  @media (min-width: 1280px) {
    font-size: 30px; 
    line-height: 45px;
  }
`;


export const StyledHr = styled.hr`
  color: #000;
  height: 3px;
  margin-top: 1rem; 
  @media (min-width: 768px) {
    margin-top: 54px;
  }
  background-color: #fff; 
`;


export const StyledHeading2 = styled.h2`
  text-align: center; 
  line-height: 54px; 
  color: #292a36; 
  font-weight: 700;
  font-size: 20px; 
  @media (min-width: 768px) {
    text-align: start; 
    font-size: 30px; 
  }
  @media (min-width: 1280px) {
    font-size: 40px;
    line-height:54px;
  }
`;


export const SimilarTemplatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto, 1fr));
  gap: 20px;
  padding-top: 23px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(auto, 1fr));
  }
`;



export const DesignStyledButton = styled.button`
  display: flex;
  font-weight: 700;
  font-size: 16px; 
  padding-right: 16px;
  padding-left: 16px;
  @media (min-width: 1440px) {
    font-size: 21px; 
    line-height:31px;
  }
  background-color: #764dd4;
  align-items: center;
  gap: 6px;
  color: white; 
  padding-top: 12px; 
  padding-bottom: 12px; 
  height: 38px; 
  width: 100%; 
border-radius: 12px;
  @media (min-width: 768px) {
    border-radius: 69px;
    with: auto;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  @media (min-width: 1536px) {
    font-size: 21px; 
    line-height:31px;
  }
`;


export const InlineFlexRow = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 0.12px; 
  margin-top: 16px; 
   column-gap: 16px;
  @media (min-width: 640px) {
    margin-top: 0; 
    gap: 28px;
  
  }
`;


export const StyledH3 = styled.h3`
  text-align: center;
  @media (min-width: 768px) {
    text-align: start;
  }
  font-family: "Manrope";
  font-weight: bold;
  color: #ffffff;
  font-size: 21px;
  margin-top: 20px;
  @media (min-width: 640px) {
    margin-top: 56px;
  font-size: 24px;
    
  }
`;

export const Simpletemplates = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 180px;
  }
`;


export const ImgDiv = styled.div`
  padding-top: 14px;
  padding-left: 12px; 
  padding-right: 12px; 
`;


export const ImgPara = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 16px; 
  @media (min-width: 1536px) {
    font-size: 24px;
  }
  padding-top: 18px;
  padding-bottom: 24px;
  color: ${(props) => (props.color ? props.color : "green")};
`;

export const ZlogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
    padding-bottom: 16px;
    padding-top: 60px;
  }
  padding-top: 16px;
  padding-bottom: 16px;
`;


export const MinimalDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  align-items: center;
  gap: 12px;
`;


export const MiniHeading = styled.h1`
  font-size: 16px; 
  @media (min-width: 1280px) {
    font-size: 30px; 
    line-height:45px;
  }
  font-weight: 700;
`;


export const MiniButton = styled.button`
  display: block;
  height: 22px;
  font-weight: 400;
  font-size: 12px;
  font-family: "Inter";
  border-radius: 3px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #764dd4;
  color: white;
`;


export const Div10 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
  @media (min-width: 640px) {
    justify-content: start;
  }
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Div10para = styled.p`
  font-weight: 700;
  font-size: 14px;
  @media (min-width: 640px) {
    font-size: 16px;
  }
  @media (min-width: 1536px) {
    font-size: 24px;
    line-height:36px;
  }
  font-family: "Inter";
  color: #333333;
`;


export const MiniPrice = styled.p`
  font-weight: 400;
  font-size: 14px;
  font-family: "Inter";
  color: #92959b;
  @media (min-width: 640px) {
    font-size: 18px;
  }
  @media (min-width: 1536px) {
    font-size: 16px;
    line-height:24px;
  }
`;



export const MiniFinal = styled.p`
  font-weight: normal;
  font-size: 14px;
  font-family: "Inter";
  color: #92959b;
  @media (min-width: 640px) {
    font-size: 16px;
  }
  @media (min-width: 1536px) {
    font-size: 20px;
  }
`;

export const Zlogopara = styled.p`
  text-align: center;
  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 34px; 
  }
  @media (min-width: 768px) {
    text-align: start; 
    font-size: 18px; 
    line-height: 32px; 
  }
  font-weight: 400;
  font-size: 14px;
  color: #5c6169;
`;
export const MainDiv = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 12px; 
  @media (min-width: 640px) {
    gap: 28px; 
     flex-direction: row;
  }
`;

export const DivStyle = styled.div`
  padding-top: 1rem; 
  @media (min-width: 768px) {
    padding-top: 2.625rem; 
  }
`;
export const StyledDivWithPlanet = styled.div`
  position: absolute;
  left: -10px;
  display: none;

  @media (min-width: 1024px) { /* Assuming lg breakpoint is 1024px */
    display: block;
  }
`;