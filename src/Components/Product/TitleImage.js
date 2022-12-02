import React from 'react';
import {  View, Image } from 'react-native';
import styled from 'styled-components/native';


const TitleImageView = styled.View`
    background-color: #e3e3e3;
    height: 550px;
    margin-bottom: 10px;
`;

const TitleImage = ({imageSouce1}) => {
  return (
        <View>
            <TitleImageView>
                <Image source={imageSouce1} style={{height: 550, width: "100%"}}/>
            </TitleImageView>
        </View>
  );
}


export default TitleImage;
