import React from 'react';
import {  View, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
`;

const TitleTextView = styled.View`
    height: 120px;
    margin: 15px;
    margin-top: 35px;
    border-top-width: 2px;
    border-top-color: black;
`;
const TitleMiddleText = styled.Text`
    margin-top: 15px;
    flex: 1;
    font-size: 20px;
`;

const ReviewInput = styled.TextInput`
flex: 1;
height: 20px;
border-radius: 10px;
padding: 5px;
font-size: 15px;
background-color: #eeeeee;
color: black;
`;

const ProductDetailReview = ({placeholder, value, onChangeText, onSubmitEditing}) => {
    return (
          <TitleTextView>
            <TitleMiddleText>Review 작성하기</TitleMiddleText>
            <ReviewInput placeholder={placeholder} maxLength={50}
                returnKeyType="done"
                keyboardAppearance="dark"
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
                />
          </TitleTextView>
    );
  }

  export default ProductDetailReview;