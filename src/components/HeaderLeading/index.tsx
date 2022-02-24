import React from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";

import useSearch from "../../hooks/useSearch";
import AnimatedTextField from "../animated/AnimatedTextField";

interface HeaderleadingProps {
  title: string;
}

const HeaderLeading = ({ title }: HeaderleadingProps) => {
  const { isSearching, opacityAnimation } = useSearch();

  return (
    <LeadingContainer>
      <AnimatedTextField />

      <LeadingTitle
        style={{
          opacity: opacityAnimation,
          display: isSearching ? "none" : "flex",
        }}
      >
        {title}
      </LeadingTitle>
    </LeadingContainer>
  );
};

const LeadingContainer = styled.View`
  flex: 1;
  width: 150px;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
`;

const LeadingTitle = styled(Animated.Text)`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 10px;
`;

export default HeaderLeading;
