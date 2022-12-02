import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterImformation from '../Components/FooterImformation';
import HeartList from '../Components/Heart/HeartList';
import Review from '../Components/Review/Review';
import ProductView from '../Components/Product/ProductViewLeft';
import Axios from 'axios';
import { ip, userId } from '../config';
import ProductViewRight from '../Components/Product/ProductViewRight';
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
  const [gang, setGang] = useState();

  const getProduct = async () => {
    AsyncStorage.getItem('id').then((result) => {
      setGang(result);
    });

    await Axios.get(`${ip}/loadWishProduct`, {
      params: { userId: gang },
    })
      .then((data) => {
        setProduct(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProd = async (id) => {
    await Axios.post(`${ip}/deleteWish`, {
      params: { userId: gang, prodNum: id },
    })
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
    navigation.replace('HeartPage');
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Container>
      <Header navigation={navigation} />
      <Main>
        <HeartList navigation={navigation} />
        {Object.values(product)
          .reverse()
          .map((product) => (
            <ProductViewRight
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
