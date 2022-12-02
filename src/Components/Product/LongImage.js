import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';

const MiddleImageView = styled.View`
  background-color: #e3e3e3;
  height: 5000px;
  margin: 10px;
`;

const LongImage = ({ product }) => {
  return (
    <View>
      <MiddleImageView>
        <Image
          source={{
            uri: `https:${product.subimage}`,
          }}
          style={{ height: 5000, width: '100%' }}
        />
      </MiddleImageView>
    </View>
  );
};

export default LongImage;
