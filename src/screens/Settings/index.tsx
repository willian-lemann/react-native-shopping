import React, { useState } from "react";
import { SectionList, Switch } from "react-native";
import { useTheme } from "@react-navigation/native";

import styled from "styled-components/native";

import profile from "../../../assets/profile.jpg";
import { MaterialIcons } from "@expo/vector-icons";

const Settings = () => {
  const theme = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);

  const data = [
    {
      title: "",
      data: [
        {
          id: 1,
          leadingIcon: "event-note",
          value: "My order",
          actionIcon: "chevron-right",
        },
      ],
    },

    {
      title: "Management",
      data: [
        {
          id: 1,
          leadingIcon: "notifications-none",
          value: "Notifications",
          actionIcon: "switch",
        },
        {
          id: 2,
          leadingIcon: "border-color",
          value: "My information",
          actionIcon: "chevron-right",
        },

        {
          id: 3,
          leadingIcon: "credit-card",
          value: "Payment method",
          actionIcon: "chevron-right",
        },
      ],
    },

    {
      title: "Support",
      data: [
        {
          id: 1,
          leadingIcon: "chat-bubble-outline",
          value: "Reviews",
          actionIcon: "chevron-right",
        },
        {
          id: 2,
          leadingIcon: "help-outline",
          value: "Help",
          actionIcon: "chevron-right",
        },
      ],
    },
  ];

  return (
    <Container>
      <ImageContainer>
        <ProfileImage source={profile} />

        <GreetingText>Hello,</GreetingText>
        <GreetingName>Willian Leman Rocha</GreetingName>

        <IconButton color={theme.colors.primary}>
          <MaterialIcons name="edit" size={20} color="#fff" />
        </IconButton>
      </ImageContainer>

      <SectionList
        sections={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListItem key={item.id}>
            <ListItemLeading>
              <MaterialIcons name={item.leadingIcon} size={28} />
              <ItemText>{item.value}</ItemText>
            </ListItemLeading>

            <ActionIconButton>
              {item.actionIcon === "switch" ? (
                <Switch
                  trackColor={{ false: "#767577", true: theme.colors.primary }}
                  thumbColor={isEnabled ? "#fff" : theme.colors.primary}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => setIsEnabled(!isEnabled)}
                  value={isEnabled}
                />
              ) : (
                <MaterialIcons name={item.actionIcon} size={30} />
              )}
            </ActionIconButton>
          </ListItem>
        )}
        renderSectionHeader={({ section: { title } }) =>
          title !== "" ? (
            <ListItemHeader>
              <ListItemHeaderText>{title}</ListItemHeaderText>
            </ListItemHeader>
          ) : null
        }
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #f0f0f0;
`;

const ImageContainer = styled.View`
  height: 180px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 7px;
`;

const GreetingText = styled.Text`
  font-size: 16px;
  margin-top: 7px;
`;

const GreetingName = styled.Text`
  font-size: 23px;
  font-weight: bold;
`;

const ProfileImage = styled.Image`
  height: 130px;
  width: 130px;
  border-radius: 100px;
  position: relative;
`;

const IconButton = styled.TouchableOpacity`
  background-color: ${({ color }) => color};
  height: 40px;
  width: 40px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
  right: 115px;
`;

const ListItem = styled.View`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

const ListItemLeading = styled.View`
  height: 100%;
  width: 300px;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

const ListItemHeader = styled.View`
  height: 50px;
  justify-content: center;
  padding-left: 20px;
`;

const ListItemHeaderText = styled.Text`
  font-size: 17px;
  text-transform: uppercase;
  opacity: 0.5;
`;

const ItemText = styled.Text`
  padding-left: 10px;
  font-size: 17px;
`;

const ActionIconButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export default Settings;
