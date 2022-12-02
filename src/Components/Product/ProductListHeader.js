import React from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

const SelectStyle = styled.TouchableOpacity`
  width: 70px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

const SelectText = styled.Text`
  font-size: 15px;
  text-align: center;
  line-height: 30px;
`;
const MiddleTitle = styled.Text`
  background-origin: white;
  height: 180px;
  text-align: center;
  line-height: 180px;
  font-size: 25px;
  font-weight: bold;
`;
const KoreanName = styled.Text`
  height: 30px;
  font-size: 15px;
  text-align: center;
`;

const ProductListHeader = ({ navigation, TitleEn, TitleKo }) => {
  const click = () => {
    navigation.replace('ProductListPage', {
      nowCate: Tag1,
    });
  };

  return (
    <View>
      <MiddleTitle>{TitleEn}</MiddleTitle>
      <KoreanName>{TitleKo}</KoreanName>
      <View style={{ height: 50 }}></View>
    </View>
  );
};

export default ProductListHeader;
