import styled from "@emotion/styled";
import howItWorksimg from "../../assest/image/orange-bg.png";

export const BannerSection = styled.section`
  background-image: linear-gradient(
    110.53deg,
    #8d3edf 0.32%,
    #8d3ddf 23.82%,
    rgba(103, 221, 215, 0.82) 69.55%,
    #3afec8 116.31%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  @media (min-width: 640px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1920px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;
export const Container = styled.div`
  max-width: 1920px;
  position: relative;
  @media (min-width: 1536px) {
    max-width: 1920px;
  }
  margin-left: auto;
  margin-right: auto;
`;

export const ResumeSection = styled.div`
  position: relative;
  padding-top: 2.5rem;
  @media (min-width: 1536px) {
    padding-top: 5rem;
  }

  padding-bottom: 4rem;

  @media (min-width: 1280px) {
    padding-bottom: 8rem;
  }
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  gap: 1rem;
`;

export const ImageWithPlanetsWrapper = styled.div`
  mix-blend-mode: Luminosity;
  position: absolute;
  left: 0px;
  top: 0px;
  max-width: 50%;
  height: 100%;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ResumeOrder = styled.div`
  z-index: 1;
  order: 2;
  @media (min-width: 1024px) {
    order: 1;
  }
`;

export const Heading = styled.h1`
  font-weight: 800;
  color: #ffffff;
  font-size: 1.87rem;
  line-height: 45px;
  font-family: "Baloo Chettan 2", sans-serif;

  @media (min-width: 768px) {
    font-size: 45px;
    line-height: 57px;
  }

  @media (min-width: 1536px) {
    font-size: 66px;
    line-height: 72px;
  }
`;

export const TextWrapper = styled.div`
  margin-top: 1rem;
  @media (min-width: 768px) {
    margin-top: 34px;
  }
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  @media (min-width: 768px) {
    gap: 1.5rem;
  }
  position: relative;
`;

export const HR = styled.hr`
  border: 1px dotted white;
  position: absolute;
  left: 10px;
  top: 1.3rem;
  transform: rotate(180deg);
  height: 80%;
`;

export const ImageWrapper = styled.div`
  z-index: 10;
  width: 24px;
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  @media (min-width: 1536px) {
    font-size: 25px;
  }
  font-weight: 600;
  @media (min-width: 1536px) {
    font-weight: 800;
  }
  color: white;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2.5rem;
  @media (min-width: 640px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Image = styled.img`
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.25);
  max-width: fit-content;
  border-radius: 50%;
  height: 1.25rem;
  @media (min-width: 1440px) {
    height: 25px;
  }
`;

export const Order = styled.div`
marign-left:auto:
width:100%;
  order: 1;
  @media (min-width: 1024px) {
    order: 2;
    width:100%;
    margin-left:auto;
  }
`;

export const FeaturesSection = styled.section`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  @media (min-width: 640px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1280px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  background-image: linear-gradient(81.18deg, #fbe41b 0%, #76f3d5 99.58%);
`;

export const FeaturesContainer = styled.div`
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 27px;
`;

export const FeatureHeading = styled.h3`
  font-size: 2.875rem;
  line-height: 3.3125rem;
  text-align: center;
  padding-bottom: 18px;
  color: #000;
  font-weight: 700;
  font-family: "Manrope";
  margin-left: auto;
  margin-right: auto;
  padding-top: 71px;
 

  @media (min-width: 1920px) {
    line-height: 72px;
    font-size: 66px;
  }

  @media (max-width: 1400px){
    font-size: 45px
  }
`;

export const SubHeading = styled.p`
  color: #000000;
  text-align: center;
  font-family: "Inter";
  font-weight: 400;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  poistion: relative;
  z-index: 9;
  font-size: 30px;
  @media (min-width: 768px) {
    display: block;
  }
  @media (max-width: 1920px) {
    font-size: 2.375rem;
  }
  @media (max-width: 1400px){
    font-size: 30px
  }
`;

export const FlexContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
  gap: 10px;
  ${'' /* @media (min-width: 1024px) {
    flex-direction: column;
    margin-top: 2.5rem;
    margin-top: 40px;
    margin-bottom: 40px;
    justify-content: space-between;
    align-items: center;
  } */}

  @media (max-width: 1200px){
    flex-direction: column;
    align-items: center;
  }
`;
export const BrStyle = styled.br`
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }
`;

export const GameChangingPowerOfZoffieAI = styled.span`
  color: #9251fc;
  margin-left: 0.25rem;
  font-weight: 700;
  font-size: 2.375rem;

  @media (max-width: 1400px){
    font-size: 30px
  }
`;
export const CustomImage = styled.img``;
export const FeatureImageWrapper = styled.div``;

export const Flexdiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin: 2.5rem auto  auto auto;
  flex-direction: column;
  @media (min-width: 640px) { 
      flex-direction: row;
      margin:20px auto  auto auto:
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const HowItWorksSection = styled.section`
  background-color: #fdc842;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding 0 5rem;


  @media (min-width: 640px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1280px) {
    background-image: url("${howItWorksimg}");
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  padding-top: 24px;
  padding-bottom: 24px;
  @media (min-width: 640px) {
    padding-top: 45px;
    padding-bottom: 60px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: grid;
  }
  @media (min-width: 1024px) {
    align-items: start;
    justify-content: start;
    flex-direction: row;
    padding-top: 128px;
    padding-bottom: 199px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1920px) {
    padding-top: 192px;
    padding-bottom: 210px;
  }
`;

export const TextContainer = styled.div``;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  column-gap: 1rem;
  @media (min-width: 1280px) {
    column-gap: 0;
    justify-content: start;
    align-items: start;
  }
  padding-bottom: 2.5rem;
`;

export const Title = styled.h4`
 
  font-weight: 700;
  color: #000;
  font-size: 4.125rem;
  line-hight: 72px;
  font-family: "Manrope";
  @media (min-width: 1536px) {
    font-size: 4.125rem;
    line-hight: 72px;
  }
  @media (max-width: 1400px) {
    font-size: 45px;
  }
`;
export const Description = styled.p`

  font-weight: 500;
  font-size: 40px;
  line-height: 50px;
  color: #000;
  font-family: "Manrope", sans-serif;

  @media (min-width: 1536px) {
    font-size: 40px;
    line-height: 50px;
  }
  @media (max-width: 1400px) {
    font-size: 30px;
    line-height: 39px;
  }
`;

export const Yetspan = styled.span`
  color: #9251fc;
  font-weight: 700;
`;

export const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  @media (min-width: 1536px) {
    justify-content: start;
    align-items: start;
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items-center;
  gap: 50px;
  align-items: center;
  justify-content: center;
  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
  }

  margin-bottom: 4px;
`;

export const StepIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 180px;
  height: 150px;
  border-radius: 50%;
  background-color: white;
  padding: 2px;
  @media (min-width: 1920px) {
    width: 200px;
    height: 200px;
  }
`;

export const StepIcon = styled.img``;

export const StepTextWrapper = styled.div`
  width: auto;
  gap: 3px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1280px) {
    align-items: start;
    gap: 10px;
  }
  @media (min-width: 1920px) {
    width: 650px;
  }
`;

export const StepTitle = styled.h3`
  @media (max-width: 640px) {
    font-size: 27px;
    line-height: 39px;
  }
  font-size: 32px;
  line-height: 29px;
  color: #292a36;
  font-weight: 700;
  font-family: "Manrope";
  padding-bottom: 0.5rem;
  text-align: center;

  @media (min-width: 1280px) {
    text-align: start;
    font-size: 22px;
    line-height: 29px;
  }
  @media (min-width: 1920px) {
    font-size: 30px;
    line-height: 42px;
  }

  @media (max-width: 1200px){
    font-size: 35px
  }
`;

export const StepDescription = styled.p`
  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 39px;
  }

  @media (max-width: 1200px){
    font-size: 25px
  }
  
  color: #292a36;
  font-size: 33px;
  font-weight: 400;
  font-family: "Inter";
  text-align: center;
  line-height: 60px;

  @media (min-width: 1280px) {
    text-align: start;
    font-size: 18px;
    line-height: 25px;
  }
  @media (min-width: 1920px) {
    text-align: start;
    font-size: 24px;
    line-height: 31px;
  }
`;

export const PinkSection = styled.section`
  background-color: #fd86ff;
  padding: 0px 15px;
`;

export const SectionHeading = styled.h3`
  @media (max-width: 640px) {
    font-size: 21px;
    line-height: 37px;
    padding-top: 40px;
  }
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  line-height: 58px;
  color: #000000;
  font-family: "Manrope";
  padding-bottom: 16px;
  padding-top: 100px;

  @media (min-width: 1024px) {
    font-size: 46px;
    line-height: 73px;
  }
  @media (min-width: 1536px) {
    font-size: 66px;
    line-height: 77px;
    padding-top: 132px;
  }
`;

export const SectionContentContainer = styled.div`
  height: 100%;
  padding-bottom: 70px;
  max-width: 1920px;
  margin-top: auto;
  marign-right: auto;
`;

export const PinkSectionButtonGroup = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 32px;
  padding-left: 32px;
  padding-right: 32px;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
  @media (min-width: 1280px) {
    margin-top: 2.5rem;
  }
`;

export const GradientSection = styled.section`
  padding-bottom: 2.5rem;
  background-image: linear-gradient(137.41deg, #28caf4 0%, #d0ff1c 198.31%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (min-width: 768px) {
    padding-left: 5rem;
    // padding-right: 5rem;
  }
`;

export const LastSectionHeading = styled.h3`
  font-size: 25px;
  font-weight: 700;
  text-align: start;
  padding-top: 46px;
  padding-bottom: 14px;
  color: #000000;
  font-family: "Manrope";
  @media (min-width: 640px) {
    font-size: 34px;
    padding-top: 56px;
  }
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 67px;
  }
  @media (min-width: 1536px) {
    text-align: start;
    font-size: 66px;
    line-height: 72px;
    padding-top: 97px;
    padding-bottom: 16px;
  }
`;

export const LastSectionParagraph = styled.p`
  font-size: 30px;
  line-height: 38px;
  font-weight: 400;
  font-family: "Inter";
  white-space: pre-wrap;
  text-align: start;
  color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  margin-bottom: 40px;

  & > br {
    display: none;
  }

  @media (min-width: 1536px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 38px;
  }
  @media (min-width: 768px) {
    text-align: start;
    & > br {
      display: block;
    }
  }
`;

export const Buildspan = styled.span`
  color: #8629e5;
  font-size: 30px;
  margin-right: 3px;
  font-weight: 700;
  @media (min-width: 1536px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    text-align: start;
    font-size: 20px;
  }
`;

export const LastContentWrapper = styled.div`
  @media (min-width: 768px) {
  }
  @media (min-width: 1536px) {
    padding-top: 97px;
    padding-bottom: 52px;
  }
`;

export const BuilderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  column-gap: 16px;

  @media (max-width: 1200px){
    flex-direction: column;
  }
`;

export const LastSectionImageContainer = styled.div`
  order: 1;
  width: 750px;
 @media (max-width: 1400px){
  width: 550px;
 }
  @media (min-width: 1024px) {
    order: 2;
  }

  @media (max-width: 1200px){
    width: 100%;
  }
`;

export const LastSectionImage = styled.img`
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ListContainer = styled.div`
  z-index: 0;
  order: 2;
  width: 750px;
  @media (max-width: 1400px){
    width: 550px;
   }
  @media (min-width: 1024px) {
    order: 1;
  }

  @media (max-width: 1200px){
    width: 100%;
  }
  &.list {
  }
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin-bottom: 42px;

  position: relative;

  &::after {
    content: "";
    height: 102px;
    width: 2px;
    border: 1.5px dotted white;
    left: 50px;
    position: absolute;
    bottom: -60px;
  }

  &:last-child::after {
    display: none;
  }

  @media (max-width: 1868px) {
    &::after {
      display: none;
    }
  }

  @media (min-width: 1868px) {
    flex-direction: row;
    gap: 24px;
  }

  @media (min-width: 1536px) {
    gap: 48px;
    margin-bottom: 48px;
  }

  @media (max-width: 1200px){
    flex-direction: column;
    padding: 0 25px
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffffff;
  // padding: 22px;
  @media (min-width: 1926px) {
    width: 194px;
    height: 106px;
  }
`;

export const ListItemContent = styled.div`
  width: auto;
  dispaly: flex;
  justify-content: center;
  align-items: start;
  @media (max-width: 1780px) {
    dispaly: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1780px) {
    justify-content: start;
  align-items: start;
  }
`;

export const ListItemHeading = styled.h3`
  font-size: 16px;
  line-height: 39px;
  color: #292a36;
  font-weight: 700;
  font-family: "Manrope";
  text-align: start;
  padding-bottom: 10px;
  @media (min-width: 1400px) {
    font-size: 28px;
    text-align: start;
  }
  @media (max-width: 1200px){
    text-align: center;
  }
`;

export const ListItemDescription = styled.p`
  color: #292a36;
  line-size: 20px;
  font-weight: 400;
  font-family: "Inter";
  text-align: start;
  width: 100%;


  @media (min-width: 1400px){
    font-size: 22px;
  }

  @media (max-width: 1200px){
    text-align: center;
  }
`;

export const LastSectionImageWithPlanetsWrapper = styled.div`
  mix-blend-mode: Luminosity;
  z-index: 1;
  position: absolute;
  ${"" /* left: -16%; */}
  top: 35%;
  max-width: 60%;
  /* height: 100%; */
  transform: translateX(-20%);
  @media (max-width: 1024px) {
    display: none;
  }
`;
