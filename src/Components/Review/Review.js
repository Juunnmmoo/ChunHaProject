import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import DeleteButton from '../DeleteButton';

const Container = styled.View`
  height: 100px;
  margin: 15px;
  margin-bottom: 3px;
  border-radius: 10px;
  background-color: black;
`;

const TopView = styled.View`
  height: 25px;
  flex-direction: row;
  margin: 5px;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

const TopText = styled.Text`
  font-size: 12px;
`;

const BottomView = styled.View`
  flex: 2;
  border-radius: 10px;
  margin: 5px;
  padding: 10px;
  background-color: black;
`;

const BottomText = styled.Text`
  font-size: 15px;
  color: white;
`;

const Coupon = ({ productName, id, deleteReview, review, user }) => {
  return (
    <Container>
      <TopView>
        <TopText>{productName}</TopText>
        <TopText>{user}</TopText>
        <DeleteButton id={id} onPress={deleteReview} />
      </TopView>
      <BottomView>
        <BottomText>{review}</BottomText>
      </BottomView>
    </Container>
  );
};

export default Coupon;
