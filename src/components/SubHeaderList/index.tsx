import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface Category {
  id: number;
  value: string;
  isSelected: boolean;
}

const SubHeaderList = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      value: "All categories",
      isSelected: true,
    },
    {
      id: 2,
      value: "Doughnuts",
      isSelected: false,
    },
    {
      id: 3,
      value: "Cookie",
      isSelected: false,
    },
    {
      id: 4,
      value: "Cheesecakes",
      isSelected: false,
    },
  ]);

  function handleSelectItem(id: number) {
    const newCategoriesArray = [...categories];
    const specificIndex = categories.findIndex(
      (category) => category.id === id
    );

    newCategoriesArray.map((item) => {
      item.isSelected = false;
    });

    newCategoriesArray[specificIndex] = {
      ...newCategoriesArray[specificIndex],
      isSelected: !newCategoriesArray[specificIndex].isSelected,
    };

    setCategories(newCategoriesArray);
  }

  return (
    <FlatList
      style={styles.subHeaderList}
      keyExtractor={(item) => String(item.id)}
      data={categories}
      renderItem={({ item: category, index }) => (
        <View
          style={[
            styles.category,
            category.isSelected && {
              borderBottomWidth: 4,
            },
            categories.length - 1 === index && {
              marginRight: 20,
            },
          ]}
        >
          <RectButton
            rippleColor="transparent"
            style={styles.categoryButton}
            onPress={() => handleSelectItem(category.id)}
          >
            <Text
              style={[
                styles.categoryText,
                category.isSelected && { opacity: 1 },
              ]}
            >
              {category.value}
            </Text>
          </RectButton>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
};

const styles = StyleSheet.create({
  subHeaderList: {
    marginTop: 10,
    marginBottom: 20,
    minHeight: 50,
  },

  category: {
    height: 50,
    minHeight: 50,
    width: "auto",
    marginLeft: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  categoryButton: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  categoryText: {
    fontSize: 17,
    fontWeight: "bold",
    opacity: 0.2,
  },
});

export default SubHeaderList;
