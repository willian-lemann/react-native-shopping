import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import api from "../../config/axios";

import styled from "styled-components/native";

import ListItem from "../../components/ListItem";
import SubHeaderList from "../../components/SubHeaderList";

interface Product {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await api.get("/categories.php");
      setProducts(response.data.categories);
    };

    loadProducts();
  }, []);

  return (
    <Container>
      <SubHeaderList />
      <ProductList
        keyExtractor={(item: Product) => item.idCategory}
        data={products}
        numColumns={2}
        renderItem={({ item: product }: { item: Product }) => (
          <ListItem item={product} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

const ProductList = styled.FlatList`
  width: 100%;
`;

const Container = styled.View`
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
`;

export default Home;
