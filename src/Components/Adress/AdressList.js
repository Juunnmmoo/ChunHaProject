import React, {useState} from 'react';
import styled from 'styled-components';
import Adress from './Adress';

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
font-weight: bold;
color: white;
`;

const CouponInput = styled.TextInput`
flex: 1;
height: 40px;
margin: 8px;
padding: 10px;
border-radius: 10px;
font-size: 20px;
background-color: #eeeeee;
color: black;
`;
const ReviewList = ({placeholder1, placeholder2, value1, value2, onChangeText1, onChangeText2, onSubmitEditing1, onSubmitEditing2}) => {
    
    return(
        <Container>
            <TitleView>
                <TitleText>My Shipping Adress</TitleText>
            </TitleView>
            <CouponView> 
                <CouponText>
                    배송주소 등록하기
                </CouponText>
                <CouponInput placeholder={placeholder1} maxLength={10}
                returnKeyType="next"
                keyboardAppearance="dark"
                value={value1}
                onChangeText={onChangeText1}
                onSubmitEditing={onSubmitEditing1}
                />
                <CouponInput placeholder={placeholder2} maxLength={10}
                returnKeyType="done"
                keyboardAppearance="dark"
                value={value2}
                onChangeText={onChangeText2}
                onSubmitEditing={onSubmitEditing2}
                />
            </CouponView>
        </Container>
    )
};


export default ReviewList;