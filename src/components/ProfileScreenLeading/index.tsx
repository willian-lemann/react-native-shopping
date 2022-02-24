import React from "react";
import { useNavigation } from "@react-navigation/core";
import { MaterialIcons } from "@expo/vector-icons";

import styled from "styled-components/native";

const ProfileScreenLeading = () => {
  const navigation = useNavigation();

  return (
    <LeadingContainer>
      <IconButton onPress={() => navigation.goBack()}>
        <MaterialIcons name="chevron-left" size={40} />
      </IconButton>
    </LeadingContainer>
  );
};

const LeadingContainer = styled.View`
  height: 100%;
  width: 70px;
  justify-content: center;
  align-items: center;
`;

const IconButton = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default ProfileScreenLeading;
