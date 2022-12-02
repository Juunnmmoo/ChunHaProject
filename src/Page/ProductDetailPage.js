import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterImformation from '../Components/FooterImformation';
import TitleImage from '../Components/Product/TitleImage';
import ProductDetailHeader from '../Components/Product/ProductDetailHeader';
import ProductDetailMiddle from '../Components/Product/ProductDetailMiddle';
import Review from '../Components/Review/Review';
import ProductDetailReview from '../Components/Product/ProductDetailReview';
import MiddleImage from '../Components/Product/MiddleImage';
import LongImage from '../Components/Product/LongImage';
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

export default function App({ navigation, route }) {
  const [newReview, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [gang, setGang] = useState();

  const addReview = async () => {
    if (newReview.length < 1) {
      return;
    }
    await Axios.post(`${ip}/addReview`, {
      params: {
        userId: gang,
        prodNum: route.params.product.prodnum,
        review: newReview,
      },
    })
      .then((data) => {
        setReviews(data.data);
        alert('리뷰 작성이 완료되었습니다.');
        setReview('');
        loadReview();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadReview = async () => {
    AsyncStorage.getItem('id').then((result) => {
      setGang(result);
    });

    await Axios.get(`${ip}/loadReview`, {
      params: { prodNum: route.params.product.prodnum },
    })
      .then((data) => {
        setReviews(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteReview = async (id) => {
    await Axios.post(`${ip}/deleteReview`, {
      params: { userId: gang, review: id },
    })
      .then((data) => {
        loadReview();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadReview();
  }, []);

  return (
    <Container>
      <Header navigation={navigation} />
      <Main>
        <ProductDetailHeader product={route.params.product} />
        <ProductDetailMiddle product={route.params.product} />
        <LongImage product={route.params.product} />
        <ProductDetailReview
          placeholder="+ 리뷰 글 입력"
          value={newReview}
          onChangeText={(text) => setReview(text)}
          onSubmitEditing={addReview}
        />
        {Object.values(reviews)
          .reverse()
          .map((item) => (
            <Review
              key={item.contents}
              review={item.contents}
              user={item.users_id}
              id={item.contents}
              productName={route.params.product.prodname}
              deleteReview={deleteReview}
            />
          ))}
        <FooterImformation />
      </Main>
      <Footer navigation={navigation} />
    </Container>
  );
}
