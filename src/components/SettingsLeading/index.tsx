import React from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";

interface SettingsLeadingProps {
  title: string;
}

const SettingsLeading = ({ title }: SettingsLeadingProps) => {
  return (
    <LeadingContainer>
      <LeadingTitle>{title}</LeadingTitle>
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

export default SettingsLeading;
