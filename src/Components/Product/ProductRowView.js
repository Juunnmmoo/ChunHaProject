import { Alert, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
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
import Axios from 'axios';
import { ip, userId } from '../../config';
import { AsyncStorage } from 'react-native';

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
  flex-direction: row;
`;

const ProductView3 = styled.View`
  flex: 1;
  justify-content: center;
  //background-color: #e3e3e3;
  height: 300px;
  margin: 5px;
`;

const ProductName = styled.Text`
  height: 60px;
  font-size: 15px;
  font-weight: bold;
  padding-left: 20px;
  line-height: 25px;
`;

const ProductDetail = styled.Text`
  height: 30px;
  font-size: 10px;
  padding-left: 20px;
  line-height: 15px;
`;

const ProductRowView = ({ navigation, product, deleteProd, id }) => {
  const [amount, setAmount] = useState(product.amount);
  const [gang, setGang] = useState();

  const click1 = () => {
    navigation.navigate('ProductDetail', {
      product: product,
    });
  };

  const clickPlus = async () => {
    await Axios.post(`${ip}/changeCartAmount`, {
      params: {
        amount: product.amount + 1,
        userId: gang,
        prodNum: product.prodnum,
      },
    })
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
    navigation.replace('CartPage');
  };

  const clickMinus = async () => {
    if (amount == 1) {
      alert('최소 수량은 1개 입니다.');
      return;
    }
    await Axios.post(`${ip}/changeCartAmount`, {
      params: {
        amount: product.amount - 1,
        userId: gang,
        prodNum: product.prodnum,
      },
    })
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
    navigation.replace('CartPage');
  };

  const getId = () => {
    AsyncStorage.getItem('id').then((result) => {
      setGang(result);
    });
  };

  useEffect(() => {
    getId();
  }, []);

  return (
    <View>
      <ProductView2>
        <TouchableOpacity style={{ flex: 1 }} onPress={click1}>
          <ProductView3>
            <Image
              source={{
                uri: `https:${product.mainimage}`,
              }}
              style={{ height: 300, width: '100%' }}
            />
          </ProductView3>
        </TouchableOpacity>
        <ProductView3>
          <ProductName>{product.prodname}</ProductName>
          <ProductDetail>Unisex</ProductDetail>
          <ProductDetail>price : {product.prodprice}</ProductDetail>
          <ProductDetail>size : {product.size}</ProductDetail>
          <ProductDetail>color : {product.color}</ProductDetail>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
            }}
          >
            <TouchableOpacity style={{ width: 30 }} onPress={clickMinus}>
              <Text
                style={{
                  fontSize: '30px',
                }}
              >
                -
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: 40,
                borderColor: '#e3e3e3',
                borderWidth: '1px',
                marginRight: 25,
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: '30px',
                }}
              >
                {product.amount}
              </Text>
            </View>
            <TouchableOpacity style={{ width: 30 }} onPress={clickPlus}>
              <Text
                style={{
                  fontSize: '30px',
                }}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20 }}>
            <DeleteButton id={id} onPress={deleteProd} />
          </View>
        </ProductView3>
      </ProductView2>
    </View>
  );
};

export default ProductRowView;
