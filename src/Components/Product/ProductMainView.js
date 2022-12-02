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

const ProductView1 = styled.View`
  //background: gray;
  height: 300px;
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
  height: 200px;
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

const ProductMainView = ({
  imageSouce1,
  imageSouce2,
  name1,
  name2,
  gender1,
  gender2,
  price1,
  price2,
  navigation,
}) => {
  return (
    <View>
      <ProductView1>
        <ProductView2>
          <TouchableOpacity onPress={() => alert(name1)}>
            <ProductView3>
              <Image
                source={imageSouce1}
                style={{ height: 200, width: '100%' }}
              />
            </ProductView3>
            <ProductName>{name1}</ProductName>
            <ProductDetail>{gender1}</ProductDetail>
            <ProductDetail>{price1}</ProductDetail>
          </TouchableOpacity>
        </ProductView2>

        <ProductView2>
          <TouchableOpacity onPress={() => alert(name2)}>
            <ProductView3>
              <Image
                source={imageSouce2}
                style={{ height: 200, width: '100%' }}
              />
            </ProductView3>
            <ProductName>{name2}</ProductName>
            <ProductDetail>{gender2}</ProductDetail>
            <ProductDetail>{price2}</ProductDetail>
          </TouchableOpacity>
        </ProductView2>
      </ProductView1>
    </View>
  );
};

export default ProductMainView;
