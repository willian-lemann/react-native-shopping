import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useTheme } from "@react-navigation/native";
import useSearch from "../../hooks/useSearch";

interface HomeScreenActionProps {
  isProfile?: boolean;
}

const HomeScreenAction = ({ isProfile = false }: HomeScreenActionProps) => {
  const theme = useTheme();
  const { activeSearch } = useSearch();

  return (
    <ActionContainer>
      <IconButton>
        {isProfile ? (
          <MaterialIcons name="notifications-none" size={30} />
        ) : (
          <MaterialIcons name="search" size={30} onPress={activeSearch} />
        )}
        {isProfile && (
          <NotificationsIndicator color={theme.colors.primary}>
            <NotificationsNumber>4</NotificationsNumber>
          </NotificationsIndicator>
        )}
      </IconButton>

      <IconButton>
        <MaterialIcons name="filter-list" size={30} />
      </IconButton>
    </ActionContainer>
  );
};

const ActionContainer = styled.View`
  flex: 1;
  width: 130px;
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

const NotificationsIndicator = styled.View`
  background-color: ${({ color }) => color};
  border-radius: 100px;
  height: 18px;
  width: 18px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -2px;
  right: -2px;
`;

const NotificationsNumber = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #fff;
`;

const IconButton = styled.TouchableOpacity``;

export default HomeScreenAction;
