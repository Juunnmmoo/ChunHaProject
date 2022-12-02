import { StatusBar } from 'react-native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
  ImageBackground,
  Image,
} from 'react-native';
import {
  Fontisto,
  Ionicons,
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';
import styled from 'styled-components/native';

import DeleteButton from '../DeleteButton';

const ProductView1 = styled.View`
  //background: gray;
  height: 400px;
  flex-direction: row;
  //justify-content: space-around;
`;

const ProductView2 = styled.View`
  //background-color: pink;
  flex: 1;
  margin: 10px;
`;

const ProductView3 = styled.View`
  background-color: #e3e3e3;
  height: 300px;
`;

const ProductName = styled.Text`
  height: 25px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  line-height: 25px;
`;

const ProductDetail = styled.Text`
  height: 15px;
  font-size: 10px;
  text-align: center;
  line-height: 15px;
`;

const ProductViewRight = ({ navigation, product, id, deleteProd }) => {
  const click1 = () => {
    navigation.navigate('ProductDetail', {
      product: product,
    });
  };

  return (
    <View>
      <ProductView2>
        <TouchableOpacity onPress={click1}>
          <ProductView3>
            <Image
              source={{
                uri: `https:${product.mainimage}`,
              }}
              style={{ height: 300, width: '100%' }}
            />
          </ProductView3>
        </TouchableOpacity>
        <ProductName>{product.prodname}</ProductName>
        <ProductDetail>Unisex</ProductDetail>
        <ProductDetail>{product.prodprice}</ProductDetail>
        <DeleteButton id={id} onPress={deleteProd} />
      </ProductView2>
    </View>
  );
};

export default ProductViewRight;
