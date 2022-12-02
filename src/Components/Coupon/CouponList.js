import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Coupon from './Coupon';

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

const CouponView = styled.View`
  margin: 10px;
  border-width: 1px;
  border-color: gray;
  background-color: black;
  border-radius: 10px;
`;

const CouponText = styled.Text`
  flex: 1;
  height: 40px;
  margin: 10px;
  margin-bottom: 5px;
  padding: 10px;
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

const CouponInput = styled.TextInput`
  flex: 1;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #eeeeee;
  color: black;
`;

const CouponList = ({ placeholder, value, onChangeText, onSubmitEditing }) => {
  return (
    <Container>
      <TitleView>
        <TitleText>My Coupon</TitleText>
      </TitleView>
      <CouponView>
        <CouponText>쿠폰 등록하기</CouponText>
        <CouponInput
          placeholder={placeholder}
          maxLength={10}
          returnKeyType="done"
          keyboardAppearance="dark"
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
      </CouponView>
    </Container>
  );
};

export default CouponList;
