import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const TitleTextView = styled.View`
  height: 120px;
  margin: 15px;
  border-bottom-width: 2px;
  border-bottom-color: black;
`;

const TitleBigText = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
`;

const TitleMiddleText = styled.Text`
  flex: 1;
  font-size: 20px;
`;

const ProductDetailHeader = ({ product }) => {
  return (
    <Container>
      <Image
        source={{
          uri: `https:${product.mainimage}`,
        }}
        style={{ height: 550, width: '100%' }}
      />
      <TitleTextView>
        <TitleBigText>{product.prodname}</TitleBigText>
        <TitleMiddleText>Unisex</TitleMiddleText>
        <TitleMiddleText>{product.prodprice}</TitleMiddleText>
      </TitleTextView>
    </Container>
  );
};

export default ProductDetailHeader;
