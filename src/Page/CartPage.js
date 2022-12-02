import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterImformation from '../Components/FooterImformation';
import CartList from '../Components/Cart/CartList';
import Review from '../Components/Review/Review';
import ProductRowView from '../Components/Product/ProductRowView';
import Axios from 'axios';
import { ip, userId } from '../config';
import { AsyncStorage } from 'react-native';

const Container = styled.View`
  flex: 1;
`;
const Main = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

export default function App({ navigation }) {
  const [product, setProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [gang, setGang] = useState();

  const getProduct = async () => {
    AsyncStorage.getItem('id').then((result) => {
      setGang(result);
    });

    await Axios.get(`${ip}/loadCartProduct`, {
      params: { userId: gang },
    })
      .then((data) => {
        setProduct(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProd = async (id) => {
    await Axios.post(`${ip}/deleteCart`, {
      params: { userId: gang, prodNum: id },
    })
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
    navigation.replace('CartPage');
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container>
      <Header navigation={navigation} />
      <Main>
        <CartList />
        {Object.values(product)
          .reverse()
          .map((product) => (
            <ProductRowView
              key={product.prodnum}
              product={product}
              navigation={navigation}
              id={product.prodnum}
              deleteProd={deleteProd}
            />
          ))}
        <FooterImformation />
      </Main>
      <Footer navigation={navigation} />
    </Container>
  );
}
