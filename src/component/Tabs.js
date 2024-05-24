import React, { useState } from "react";
import styled from "@emotion/styled";

const TabDiv = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (min-width: 768px) {
    gap: 1.25rem;
  }

  justify-content: flex-start;
  border-bottom-width: 4px;

  @media (min-width: 1536px) {
    border-bottom-width: 5px;
    gap: 24px;
  }

  border-color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const TabChild = styled.div`
  padding: 1.25rem 8px;

  @media (min-width: 640px) {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
`;
const ContentWrapper = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

export function Tabs({ children }) {
  function findActiveTab(a) {
    return a.reduce((accumulator, currentValue, i) => {
      if (currentValue.props.active) {
        return i;
      }

      return accumulator;
    }, 0);
  }

  function tabValidator(tab) {
    return tab.type.displayName === "Tab" ? true : false;
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children));
  return (
    <>
      <TabDiv>
        {children.map((item, i) => {
          return (
            <>
              {tabValidator(item) && (
                <Tab
                  key={`tab-{i}`}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {item.props.children}
                </Tab>
              )}
            </>
          );
        })}
      </TabDiv>
      <TabChild>
        {children.map((item, i) => {
          return (
            <ContentWrapper isVisible={i === activeTab}>
              {item.props.component}
            </ContentWrapper>
          );
        })}
      </TabChild>
    </>
  );
}

const StyledTabDiv = styled.div`
  padding-right: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  display: flex;
  position: relative;
  top: 3.6px;
  text-align: center;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    text-align: left;
    font-size: 1rem;
  }

  @media (min-width: 1536px) {
    top: 4.8px;
    font-size:24px;
    line-height:29px;
    gap:64px;
  }

  &.active {
    border-bottom-width: 4px;
    border-bottom-color: #9727f5;
    color: #9727f5;
    font-weight: 600;
    font-family: "Inter", sans-serif;

    @media (min-width: 1536px) {
      border-bottom-width: 5px;
    }
  }

  &.inactive {
    color: #000; /* Assuming "text-dark-black" translates to black */
    font-weight: 600;
    font-family: "Inter", sans-serif;
  }
`;

export function Tab({ children, activeTab, currentTab, setActiveTab }) {
  const isActive = activeTab === currentTab;

  return (
    <StyledTabDiv
      className={`${
        isActive ? "active" : "inactive"
      }`}
      onClick={() => setActiveTab(currentTab)}
    >
      {children}
    </StyledTabDiv>
  );
}

Tab.displayName = "Tab";
