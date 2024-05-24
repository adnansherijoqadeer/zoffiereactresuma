import React from "react";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  border-radius: 10px;
  background-color: white;
`;

const Image = styled.img`
  width: 100%;
`;

const TagButton = styled.button`
  margin-top: 1rem;
  display: block;
  height: 22px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 0.75rem;
  border-radius: 3px;
  padding: 0 0.75rem;
  background-color: #764DD4;
  color: white;
`;

const Title = styled.p`
  font-size: 1rem;
  @media (min-width: 640px) {
    font-size: 1.125rem;
    margin-top: 0.25rem;
  }
  @media (min-width: 1536px) {
    font-size: 1.5rem;
  }
  font-weight: 600;
  font-family: "Manrope", sans-serif;
  margin-top: 0.5rem;
`;

const DateDataContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.25rem 0;
  @media (min-width: 640px) {
    padding: 0.5rem 0;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem; 
  
  @media (min-width: 1536px) {
    flex-direction: row;
    gap: 1.75rem; 
  }
`;

const CustomFlex = styled.div`
  display: flex;
  gap: 0.25rem; 
`;

const BlackText = styled.p`
  font-size: 0.75rem; 
  font-weight: 400; 
  font-family: 'Inter', sans-serif; 
  color: #8c8c8c; 
`;
const GrayText = styled.p`
  font-weight: 400; 
  font-size: 0.75rem; 
  font-family: 'Inter', sans-serif; 
  color: #000000; 
`;
const PriceText = styled.p`
  font-weight: 700;
  font-size: 0.875rem;
  font-family: 'Inter'; 
  color: #000000;
  @media (min-width: 1536px) {
    font-size: 1.25rem; 
  }
`;
const OriginalPriceText = styled.p`
  text-decoration: line-through;
  font-weight: 400; 
  font-size: 0.875rem; 
  font-family: 'Inter';
  color: #8c8c8c; 
  @media (min-width: 768px) {
    font-size: 0.875rem; 
  }
  @media (min-width: 1536px) {
    font-size: 1.25rem; 
  }

`;
const Card = ({
    imageUrl,
  title,
  updatedDate,
  downloadCount,
  price,
  originalPrice,
  data,
  count,
  tag,
}) => {
  return (
    <CardContainer>
    <div style={{ padding: '16px 12px' }}>
        <Image src={imageUrl} alt="alt" />
        <TagButton>{tag}</TagButton>
        <Title>{title}</Title>
        <DateDataContainer>
          <FlexContainer>
          
            <CustomFlex>
              <GrayText>{data}</GrayText>
              <BlackText>{updatedDate}</BlackText>
            </CustomFlex>

            <CustomFlex>
              <BlackText>{updatedDate}</BlackText>
            <GrayText>{data}</GrayText>
            </CustomFlex>

          </FlexContainer>
        </DateDataContainer>

        <PriceContainer>

          <PriceText>{price}</PriceText>
          <OriginalPriceText>{originalPrice}</OriginalPriceText>

        </PriceContainer>
      </div>
      <div>{/* Add additional content here if needed */}</div>
    </CardContainer>
  );
};

export default Card;
