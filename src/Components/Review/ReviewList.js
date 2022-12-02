import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import Review from './Review';
import Axios from 'axios';
import { ip, userId } from '../../config';
import { AsyncStorage } from 'react-native';

const Container = styled.View`
  flex: 1;
`;

const TitleView = styled.View`
  height: 150px;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [gang, setGang] = useState();

  const loadReview = async () => {
    AsyncStorage.getItem('id').then((result) => {
      setGang(result);
    });
    await Axios.get(`${ip}/loadUserReview`, {
      params: { userId: gang },
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
      <TitleView>
        <TitleText>My Review</TitleText>
      </TitleView>
      {Object.values(reviews)
        .reverse()
        .map((item) => (
          <Review
            key={item.contents}
            review={item.contents}
            user={item.users_id}
            id={item.contents}
            productName={item.prodname}
            deleteReview={deleteReview}
          />
        ))}
    </Container>
  );
};

export default ReviewList;
