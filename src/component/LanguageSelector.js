import React from 'react';
import { useTranslation } from 'react-i18next';
import flag from '../assest/icons/flag.svg';
import styled from "@emotion/styled";

const LanguageSelectorContainer = styled.div`
  display: flex;
  column-gap: 0.25rem;
  z-index: 9999;
  background: transparent;
`;

const CustomSelect = styled.select`
  background-color: transparent;
  outline: none;
  border: none;
  padding-left: 0;
  color:#fff;
  ${props => props.className}
`;

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <LanguageSelectorContainer className={'language-selector'}>
            <img src={flag} alt="" />
            <CustomSelect onChange={(e) => changeLanguage(e.target.value)} className={'custom-select'}>
                <option value="en">EN</option>
                {/* Add more options for other languages if needed */}
            </CustomSelect>
        </LanguageSelectorContainer>
    );
};

export default LanguageSelector;