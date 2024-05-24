import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  font-weight: 600;
  color: white;
  width: 100%;
  height:65px;
  padding:0 18px;
  font-weight:600;
  font-family:Inter;
  font-size:1rem;
  border-radius:10px;
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  @media (min-width: 1536px) {
    height:75px;
    font-size:21px;
    border-radius:15px;
    padding:0 20px;
    line-height:24px;
  }

  @media (min-width: 768px) {
    width: fit-content; 
  }
 
  ${(props) =>
        props.variant === 'white' &&
        `
      background-color: white;
      color: black ; /* Adjust the text color for better contrast */
    `}

  ${(props) =>
        props.variant === 'yellow' &&
        `
      background-color: #E2FF6F;
      color: black; /* Adjust the text color for better contrast */
    `}
  
  ${(props) =>
        props.variant === 'transparent' &&
        `
      background-color: transparent;
      border: 1px solid white; /* Optional: adds a border for visibility */
    `}
  
  ${(props) =>
        props.variant === 'gradient' &&
        `
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.1);
    background: linear-gradient(265.62deg, #A350FF 0.41%, #F93BFD 98.46%);
      color: white ;  height: 55px ;
    `}

    ${(props) =>
        props.variant === 'templatewhite' &&
        `
      background-color: white;
      color: black; /* Adjust the text color for better contrast */
      height: 55px;
    `}

  ${(props) =>
        props.variant === 'yellow-gradient' &&
        `
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.1);
    background: linear-gradient(86.3deg, #FFF961 1.8%, #DEFF11 97.08%);
      color:#000000;
      height: 55px;
    `}
`;

const StyledImage = styled.img`
  padding-right: 0.5rem; /* pr-2 */
`;

function Button({ variant, text, img, onClick }) {
    return (
        <StyledButton variant={variant} role="button" onClick={onClick}>
            {img && <StyledImage src={img} alt="img" />} {text}
        </StyledButton>
    );
}

export default Button;