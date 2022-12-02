import React from 'react';
import {  View, Image } from 'react-native';
import styled from 'styled-components/native';


const MiddleImageView = styled.View`
    background-color: #e3e3e3;
    height: 400px;
    margin-bottom: 10px;
`;

const MiddleImage = ({imageSouce}) => {
  return (
        <View>
            <MiddleImageView>
                <Image source={imageSouce} style={{height: 400, width: "100%"}}/>
            </MiddleImageView>
        </View>
  );
}


export default MiddleImage;
