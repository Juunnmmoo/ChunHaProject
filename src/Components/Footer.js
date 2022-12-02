import { StatusBar } from 'react-native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
  ImageBackground,
} from 'react-native';
import {
  Fontisto,
  Ionicons,
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';
import styled from 'styled-components/native';

const FooterStyle = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  padding-bottom: 40px;
`;

const Footer = ({ navigation }) => {
  return (
    <FooterStyle>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Entypo name="home" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('clicked!')}>
        <AntDesign name="right" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CartPage')}>
        <FontAwesome5 name="shopping-cart" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
        <Ionicons name="information-circle-sharp" size={30} color="black" />
      </TouchableOpacity>
    </FooterStyle>
  );
};

export default Footer;
